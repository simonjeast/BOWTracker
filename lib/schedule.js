export const stops = [
  {
    id: "wellesley-campus",
    name: "Wellesley Campus Center",
    shortName: "Wellesley",
    detail: "Campus Center",
    lat: 42.2937,
    lon: -71.3065,
  },
  {
    id: "wellesley-founders",
    name: "Wellesley Founders Lot Gates",
    shortName: "Founders Lot",
    detail: "Founders Parking Lot Gates",
    lat: 42.2919,
    lon: -71.3049,
  },
  {
    id: "olin-east",
    name: "Olin East Hall",
    shortName: "Olin",
    detail: "East Hall",
    lat: 42.2931,
    lon: -71.2642,
  },
  {
    id: "babson-hollister",
    name: "Babson Hollister Lot",
    shortName: "Babson",
    detail: "Hollister Parking Lot",
    lat: 42.2992,
    lon: -71.2639,
  },
];

export const routePattern = [
  "wellesley-campus",
  "wellesley-founders",
  "olin-east",
  "babson-hollister",
  "wellesley-founders",
  "wellesley-campus",
];

export const weekdayRows = [
  ["7:40 AM", "7:42 AM", "7:52 AM", "7:55 AM", "8:05 AM", "8:07 AM"],
  ["8:10 AM", "8:12 AM", "8:22 AM", "8:25 AM", "8:35 AM", "8:37 AM"],
  ["8:40 AM", "8:42 AM", "8:52 AM", "8:55 AM", "9:05 AM", "9:07 AM"],
  ["9:10 AM", "9:12 AM", "9:22 AM", "9:25 AM", "9:35 AM", "9:37 AM"],
  ["9:40 AM", "9:42 AM", "9:52 AM", "9:55 AM", "10:05 AM", "10:07 AM"],
  ["10:40 AM", "10:42 AM", "10:52 AM", "10:55 AM", "11:05 AM", "11:07 AM"],
  ["11:10 AM", "11:12 AM", "11:22 AM", "11:25 AM", "11:35 AM", "11:37 AM"],
  ["11:40 AM", "11:42 AM", "11:52 AM", "11:55 AM", "12:05 PM", "12:07 PM"],
  ["12:40 PM", "12:42 PM", "12:52 PM", "12:55 PM", "1:05 PM", "1:07 PM"],
  ["1:40 PM", "1:42 PM", "1:52 PM", "1:55 PM", "2:05 PM", "2:07 PM"],
  ["2:10 PM", "2:12 PM", "2:22 PM", "2:25 PM", "2:35 PM", "2:37 PM"],
  ["2:40 PM", "2:42 PM", "2:52 PM", "2:55 PM", "3:05 PM", "3:07 PM"],
  ["3:10 PM", "3:12 PM", "3:22 PM", "3:25 PM", "3:35 PM", "3:37 PM"],
  ["4:10 PM", "4:12 PM", "4:22 PM", "4:25 PM", "4:35 PM", "4:37 PM"],
  ["4:40 PM", "4:42 PM", "4:52 PM", "4:55 PM", "5:05 PM", "5:07 PM"],
  ["5:10 PM", "5:12 PM", "5:22 PM", "5:25 PM", "5:35 PM", "5:37 PM"],
  ["5:40 PM", "5:42 PM", "5:52 PM", "5:55 PM", "6:05 PM", "6:07 PM"],
  ["6:10 PM", "6:12 PM", "6:22 PM", "6:25 PM", "6:35 PM", "6:37 PM"],
  ["6:40 PM", "6:42 PM", "6:52 PM", "6:55 PM", "7:05 PM", "7:07 PM"],
  ["7:40 PM", "7:42 PM", "7:52 PM", "7:55 PM", "8:05 PM", "8:07 PM"],
  ["8:10 PM", "8:12 PM", "8:22 PM", "8:25 PM", "8:35 PM", "8:37 PM"],
  ["8:40 PM", "8:42 PM", "8:52 PM", "8:55 PM", "9:05 PM", "9:07 PM"],
  ["9:10 PM", "9:12 PM", "9:22 PM", "9:25 PM", "9:35 PM", "9:37 PM"],
];

export const lateWeekdayRows = [
  ...weekdayRows,
  ["9:40 PM", "9:42 PM", "9:52 PM", "9:55 PM", "10:05 PM", "10:07 PM"],
  ["10:10 PM", "10:12 PM", "10:22 PM", "10:25 PM", "10:35 PM", "10:37 PM"],
  ["10:40 PM", "10:42 PM", "10:52 PM", "10:55 PM", "11:05 PM", "11:07 PM"],
];

export const saturdayRows = [
  ["3:10 PM", "3:12 PM", "3:22 PM", "3:25 PM", "3:35 PM", "3:37 PM"],
  ["3:40 PM", "3:42 PM", "3:52 PM", "3:55 PM", "4:05 PM", "4:07 PM"],
  ["4:10 PM", "4:12 PM", "4:22 PM", "4:25 PM", "4:35 PM", "4:37 PM"],
  ["4:40 PM", "4:42 PM", "4:52 PM", "4:55 PM", "5:05 PM", "5:07 PM"],
  ["5:10 PM", "5:12 PM", "5:22 PM", "5:25 PM", "5:35 PM", "5:37 PM"],
  ["5:40 PM", "5:42 PM", "5:52 PM", "5:55 PM", "6:05 PM", "6:07 PM"],
  ["6:10 PM", "6:12 PM", "6:22 PM", "6:25 PM", "6:35 PM", "6:37 PM"],
  ["6:40 PM", "6:42 PM", "6:52 PM", "6:55 PM", "7:05 PM", "7:07 PM"],
  ["8:10 PM", "8:12 PM", "8:22 PM", "8:25 PM", "8:35 PM", "8:37 PM"],
  ["8:40 PM", "8:42 PM", "8:52 PM", "8:55 PM", "9:05 PM", "9:07 PM"],
  ["9:10 PM", "9:12 PM", "9:22 PM", "9:25 PM", "9:35 PM", "9:37 PM"],
  ["9:40 PM", "9:42 PM", "9:52 PM", "9:55 PM", "10:05 PM", "10:07 PM"],
  ["10:10 PM", "10:12 PM", "10:22 PM", "10:25 PM", "10:35 PM", "10:37 PM"],
  ["10:40 PM", "10:42 PM", "10:52 PM", "10:55 PM", "11:05 PM", "11:07 PM"],
  ["11:10 PM", "11:12 PM", "11:22 PM", "11:25 PM", "11:35 PM", "11:37 PM"],
  ["11:40 PM", "11:42 PM", "11:52 PM", "11:55 PM", "12:05 AM", "12:07 AM"],
];


export const schedule = {
  id: 'babson-ay-2025-26', title: 'AY 2025–26', status: 'archived',
  checkedAt: '2026-09-22', timezone: 'America/New_York',
  sourceUrl: 'https://www.babson.edu/media/babson/assets/isss/AY-2025-2026-BOW-Shuttle-Schedule.pdf',
  wellesleyUrl: 'https://www.wellesley.edu/about-us/offices-departments/transportation/shuttle-bus-schedule',
  effectiveStart: null, effectiveEnd: null, calendarConfirmed: false,
  exceptions: {},
  // Source names all times as departures, including the destination stop call.
  rowsByDay: { 0: [], 1: weekdayRows, 2: weekdayRows, 3: weekdayRows,
    4: lateWeekdayRows, 5: lateWeekdayRows, 6: saturdayRows }
};
