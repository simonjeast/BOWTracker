import { schedule, stops, routePattern } from './schedule.js';
export const ZONE = 'America/New_York';
const partsFormatter = new Intl.DateTimeFormat('en-CA', { timeZone: ZONE, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' });
export function localParts(date = new Date()) {
  const p = Object.fromEntries(partsFormatter.formatToParts(date).map(x => [x.type, x.value]));
  return { date: `${p.year}-${p.month}-${p.day}`, time: `${p.hour}:${p.minute}`, ...p };
}
export function validDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const d = new Date(`${value}T12:00:00Z`);
  return Number.isFinite(+d) && d.toISOString().slice(0, 10) === value;
}
export function addDays(date, days) {
  if (!validDate(date)) throw new Error('Choose a valid calendar date.');
  const d = new Date(`${date}T12:00:00Z`); d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}
export function minuteValue(value) {
  if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(value)) throw new Error('Choose a valid time.');
  const [h, m] = value.split(':').map(Number); return h * 60 + m;
}
export function zonedInstant(date, minute) {
  if (!validDate(date) || !Number.isInteger(minute) || minute < 0) throw new Error('Invalid service time.');
  const day = addDays(date, Math.floor(minute / 1440));
  const clock = minute % 1440;
  const desired = Date.parse(`${day}T${String(Math.floor(clock / 60)).padStart(2, '0')}:${String(clock % 60).padStart(2, '0')}:00Z`);
  let instant = desired;
  for (let i = 0; i < 4; i++) {
    const p = localParts(new Date(instant));
    const represented = Date.parse(`${p.date}T${p.time}:${p.second}Z`);
    const difference = desired - represented;
    if (difference === 0) return new Date(instant);
    instant += difference;
  }
  throw new Error('That time does not exist in Eastern Time because clocks change. Choose another time.');
}
export function rowMinutes(row) {
  let previous = -1;
  return row.map(value => {
    const m = /^(\d{1,2}):(\d{2}) (AM|PM)$/.exec(value);
    if (!m || +m[1] < 1 || +m[1] > 12 || +m[2] > 59) throw new Error('Invalid timetable row.');
    let n = (+m[1] % 12 + (m[3] === 'PM' ? 12 : 0)) * 60 + +m[2];
    while (n < previous) n += 1440;
    previous = n; return n;
  });
}
export function rowsForDate(date, data = schedule) {
  if (!validDate(date)) throw new Error('Choose a valid calendar date.');
  if (Object.hasOwn(data.exceptions, date)) return data.exceptions[date] ?? [];
  return data.rowsByDay[new Date(`${date}T12:00:00Z`).getUTCDay()] ?? [];
}
export function serviceConfirmed(date, data = schedule) {
  return data.status === 'verified' && data.calendarConfirmed && Boolean(data.effectiveStart && data.effectiveEnd) && date >= data.effectiveStart && date <= data.effectiveEnd;
}
export function directDirection(origin, destination) {
  return origin !== destination && routePattern.some((id, i) => id === origin && routePattern.slice(i + 1).includes(destination));
}
export function journeysForDate(date, origin, destination, data = schedule) {
  if (!stops.some(s => s.id === origin) || !stops.some(s => s.id === destination) || origin === destination) return [];
  const trips = [];
  rowsForDate(date, data).forEach((row, rowIndex) => {
    const minutes = rowMinutes(row);
    routePattern.forEach((id, from) => {
      if (id !== origin) return;
      const to = routePattern.findIndex((id, i) => i > from && id === destination);
      if (to < 0) return;
      // Do not offer a circuit back to Founders when its later call provides a direct return leg.
      if (routePattern.slice(from + 1, to).includes(origin)) return;
      const calls = routePattern.slice(from, to + 1).map((stopId, i) => ({ stopId, at: zonedInstant(date, minutes[from + i]), position: from + i }));
      trips.push({ id: `${date}_${rowIndex}_${from}_${to}`, serviceDate: date, origin, destination, departure: calls[0].at, arrival: calls.at(-1).at, duration: minutes[to] - minutes[from], calls });
    });
  });
  return trips.sort((a, b) => a.departure - b.departure);
}
export function searchJourneys({ date, time, origin, destination, mode = 'leave', preview = false }, data = schedule) {
  if (!validDate(date)) return { status: 'invalid', message: 'Choose a valid calendar date.', trips: [] };
  let at;
  try { at = zonedInstant(date, minuteValue(time)); } catch (e) { return { status: 'invalid', message: e.message, trips: [] }; }
  if (!['leave', 'arrive'].includes(mode)) return { status: 'invalid', message: 'Choose leave after or arrive by.', trips: [] };
  if (!stops.some(s => s.id === origin) || !stops.some(s => s.id === destination) || origin === destination) return { status: 'invalid', message: 'Choose two different stops.', trips: [] };
  if (!preview && !serviceConfirmed(date, data)) return { status: 'unconfirmed', trips: [] };
  if (!directDirection(origin, destination)) return { status: 'no-direct-route', trips: [] };
  // Include Saturday's post-midnight stop calls when the selected calendar day is Sunday.
  const trips = [addDays(date, -1), date].filter(d => preview || serviceConfirmed(d, data)).flatMap(d => journeysForDate(d, origin, destination, data)).filter(t => {
    return mode === 'arrive' ? localParts(t.arrival).date === date && t.arrival <= at : localParts(t.departure).date === date && t.departure >= at;
  }).sort((a, b) => mode === 'arrive' ? b.departure - a.departure : a.departure - b.departure);
  return { status: trips.length ? 'ok' : 'empty', trips };
}
export function formatTime(date) { return new Intl.DateTimeFormat('en-US', { timeZone: ZONE, hour: 'numeric', minute: '2-digit' }).format(date); }
export function formatDate(date) { return new Intl.DateTimeFormat('en-US', { timeZone: ZONE, weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }).format(zonedInstant(date, 12 * 60)); }
export function waitLabel(departure, now = new Date()) {
  const ms = departure - now;
  if (ms < 0) return 'Departed';
  if (ms === 0) return 'Scheduled now';
  if (ms < 60000) return 'Under 1 min';
  return `${Math.ceil(ms / 60000)} min`;
}
