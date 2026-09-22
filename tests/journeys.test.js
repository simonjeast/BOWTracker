import test from 'node:test';
import assert from 'node:assert/strict';
import { schedule, weekdayRows, lateWeekdayRows, saturdayRows } from '../lib/schedule.js';
import { searchJourneys, journeysForDate, zonedInstant, localParts, formatTime, rowMinutes, validDate, rowsForDate, waitLabel } from '../lib/journeys.js';
const query = { date:'2026-04-16', time:'16:00', origin:'wellesley-campus', destination:'babson-hollister', preview:true };
test('preserves source row counts and published break gaps',()=>{
 assert.equal(weekdayRows.length,23);assert.equal(lateWeekdayRows.length,26);assert.equal(saturdayRows.length,16);
 const r=searchJourneys({...query,time:'09:41'});assert.equal(formatTime(r.trips[0].departure),'10:40 AM');
 assert.equal(formatTime(searchJourneys({...query,time:'12:01'}).trips[0].departure),'12:40 PM');
});
test('Eastern time and DST conversion are independent of device timezone',()=>{
 const zone=process.env.TZ;
 try{for(const tz of ['Europe/London','America/Los_Angeles','Asia/Tokyo']){process.env.TZ=tz;assert.equal(zonedInstant('2026-04-16',970).toISOString(),'2026-04-16T20:10:00.000Z');assert.equal(zonedInstant('2026-01-16',970).toISOString(),'2026-01-16T21:10:00.000Z');}}finally{if(zone)process.env.TZ=zone;else delete process.env.TZ;}
 assert.throws(()=>zonedInstant('2026-03-08',150),/does not exist/);
});
test('pairs only downstream stops within one run, never across rows',()=>{
 const r=searchJourneys(query);assert.equal(r.trips[0].duration,15);assert.deepEqual(r.trips[0].calls.map(c=>formatTime(c.at)),['4:10 PM','4:12 PM','4:22 PM','4:25 PM']);
 assert.equal(searchJourneys({...query,origin:'babson-hollister',destination:'olin-east'}).status,'no-direct-route');
 const trips=journeysForDate(query.date,'wellesley-founders','wellesley-campus');
 assert.equal(trips.length,26);assert.ok(trips.every(t=>t.duration===2 && t.calls[0].position===4));
});
test('midnight return retains Saturday service day and Sunday calendar date',()=>{
 const result=searchJourneys({...query,date:'2026-04-19',time:'00:00',origin:'wellesley-founders',destination:'wellesley-campus'});
 assert.equal(result.trips.length,1);assert.equal(result.trips[0].serviceDate,'2026-04-18');assert.equal(formatTime(result.trips[0].departure),'12:05 AM');assert.equal(formatTime(result.trips[0].arrival),'12:07 AM');assert.equal(localParts(result.trips[0].departure).date,'2026-04-19');
 assert.deepEqual(rowMinutes(saturdayRows.at(-1)),[1420,1422,1432,1435,1445,1447]);
 assert.equal(searchJourneys({...query,date:'2026-04-19'}).status,'empty');
});
test('arrive-by includes previous-day departure ending after midnight',()=>{
 const r=searchJourneys({...query,date:'2026-04-19',time:'00:10',mode:'arrive',origin:'babson-hollister',destination:'wellesley-campus'});
 assert.equal(r.trips.length,1);assert.equal(localParts(r.trips[0].departure).date,'2026-04-18');assert.equal(formatTime(r.trips[0].departure),'11:55 PM');
});
test('late weekdays do not repeat onto the wrong day; no departed fallback',()=>{
 assert.equal(searchJourneys({...query,date:'2026-04-14',time:'21:11'}).status,'empty');
 assert.equal(searchJourneys({...query,date:'2026-04-17',time:'21:11'}).trips.length,3);
 assert.equal(searchJourneys({...query,time:'23:59'}).status,'empty');
 assert.equal(searchJourneys({...query,time:'16:10'}).trips[0].departure.getTime(),zonedInstant(query.date,970).getTime());
 assert.equal(formatTime(searchJourneys({...query,time:'16:11'}).trips[0].departure),'4:40 PM');
});
test('arrive-by returns latest matching departure first',()=>{
 const r=searchJourneys({...query,mode:'arrive',time:'16:25'});assert.equal(formatTime(r.trips[0].departure),'4:10 PM');assert.ok(r.trips.every(t=>t.arrival<=zonedInstant(query.date,985)));
});
test('invalid dates, invalid times and same-stop queries do not create trips',()=>{
 for(const date of ['2026-02-30','2026-13-01','garbage','2025-02-29'])assert.equal(validDate(date),false);
 for(const patch of [{time:'24:01'},{time:'x'},{date:'2026-02-30'},{destination:query.origin},{origin:'bad'},{mode:'bad'}])assert.equal(searchJourneys({...query,...patch}).status,'invalid');
});
test('unconfirmed or expired calendars never produce current recommendations',()=>{
 assert.equal(searchJourneys({...query,preview:false}).status,'unconfirmed');
 const data={...schedule,status:'verified',calendarConfirmed:true,effectiveStart:'2026-04-01',effectiveEnd:'2026-04-30'};
 assert.equal(searchJourneys({...query,preview:false},data).status,'ok');
 assert.equal(searchJourneys({...query,date:'2026-05-01',preview:false},data).status,'unconfirmed');
 assert.equal(searchJourneys({...query,preview:false},{...data,calendarConfirmed:false}).status,'unconfirmed');
 assert.equal(searchJourneys({...query,preview:false},{...data,effectiveEnd:null}).status,'unconfirmed');
});
test('explicit cancellation and replacement days override normal service',()=>{
 const data={...schedule,exceptions:{'2026-04-16':null,'2026-04-19':weekdayRows}};
 assert.deepEqual(rowsForDate('2026-04-16',data),[]);
 assert.equal(searchJourneys(query,data).status,'empty');assert.equal(searchJourneys({...query,date:'2026-04-19'},data).status,'ok');
});
test('countdown never rounds a future departure to now',()=>{
 const now=new Date('2026-04-16T20:00:00Z');assert.equal(waitLabel(new Date(+now+30000),now),'Under 1 min');assert.equal(waitLabel(new Date(+now-1),now),'Departed');assert.equal(waitLabel(now,now),'Scheduled now');
});
