const stops = [
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

const routePattern = [
  "wellesley-campus",
  "wellesley-founders",
  "olin-east",
  "babson-hollister",
  "wellesley-founders",
  "wellesley-campus",
];

const weekdayRows = [
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

const lateWeekdayRows = [
  ...weekdayRows,
  ["9:40 PM", "9:42 PM", "9:52 PM", "9:55 PM", "10:05 PM", "10:07 PM"],
  ["10:10 PM", "10:12 PM", "10:22 PM", "10:25 PM", "10:35 PM", "10:37 PM"],
  ["10:40 PM", "10:42 PM", "10:52 PM", "10:55 PM", "11:05 PM", "11:07 PM"],
];

const saturdayRows = [
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

const elements = {
  apiStatus: document.querySelector("#apiStatus"),
  apiDetail: document.querySelector("#apiDetail"),
  originSelect: document.querySelector("#originSelect"),
  destinationSelect: document.querySelector("#destinationSelect"),
  daySelect: document.querySelector("#daySelect"),
  useLocationButton: document.querySelector("#useLocationButton"),
  message: document.querySelector("#message"),
  nextTime: document.querySelector("#nextTime"),
  routeSummary: document.querySelector("#routeSummary"),
  waitTime: document.querySelector("#waitTime"),
  arrivalTime: document.querySelector("#arrivalTime"),
  serviceType: document.querySelector("#serviceType"),
  tripCount: document.querySelector("#tripCount"),
  tripList: document.querySelector("#tripList"),
  stopCards: document.querySelector("#stopCards"),
};

const savedSettings = JSON.parse(localStorage.getItem("bow-shuttle-settings") || "{}");
let latestLocation = null;

function initializeApp() {
  renderStopOptions();
  renderStopCards();
  elements.originSelect.value = savedSettings.origin || "babson-hollister";
  updateDestinationOptions(savedSettings.destination);
  elements.daySelect.value = savedSettings.day || "auto";
  bindEvents();
  renderTrips();
  fetchApproximateLocation();
}

function bindEvents() {
  elements.originSelect.addEventListener("change", () => {
    updateDestinationOptions();
    renderTrips();
    saveSettings();
  });

  elements.destinationSelect.addEventListener("change", () => {
    renderTrips();
    saveSettings();
  });

  elements.daySelect.addEventListener("change", () => {
    renderTrips();
    saveSettings();
  });

  elements.useLocationButton.addEventListener("click", () => {
    if (!latestLocation) {
      showMessage("Location is not available yet. Try again after the API finishes loading.");
      return;
    }

    setOriginToNearestStop(latestLocation.lat, latestLocation.lon, "API location");
  });
}

function renderStopOptions() {
  elements.originSelect.innerHTML = stops.map(stopOption).join("");
}

function updateDestinationOptions(preferredDestination) {
  const originId = elements.originSelect.value;
  const validStops = stops.filter((stop) => stop.id !== originId);
  elements.destinationSelect.innerHTML = validStops.map(stopOption).join("");

  if (preferredDestination && validStops.some((stop) => stop.id === preferredDestination)) {
    elements.destinationSelect.value = preferredDestination;
  }
}

function stopOption(stop) {
  return `<option value="${stop.id}">${stop.name}</option>`;
}

function renderStopCards() {
  elements.stopCards.innerHTML = stops
    .map(
      (stop) => `
        <article class="stop-card">
          <strong>${stop.name}</strong>
          <span>${stop.detail}</span>
        </article>
      `,
    )
    .join("");
}

async function fetchApproximateLocation() {
  setApiState("Loading...", "Fetching approximate location from geolocation-db.com.");

  try {
    const response = await fetch("https://geolocation-db.com/json/");
    if (!response.ok) {
      throw new Error(`Location API returned ${response.status}`);
    }

    const data = await response.json();
    if (!data.latitude || !data.longitude) {
      throw new Error("Location API did not include coordinates.");
    }

    latestLocation = {
      lat: Number(data.latitude),
      lon: Number(data.longitude),
      label: [data.city, data.state || data.region].filter(Boolean).join(", "),
    };

    const nearest = getNearestStop(latestLocation.lat, latestLocation.lon);
    setApiState("Ready", `${latestLocation.label || "Approximate location"} is closest to ${nearest.stop.name}.`);
    setOriginToNearestStop(latestLocation.lat, latestLocation.lon, "API location");
  } catch (error) {
    setApiState("Manual mode", "Location lookup failed. Pick a stop and day to browse the schedule.");
    showMessage("Could not load the location API. The schedule still works with manual stop selection.");
    console.error(error);
  }
}

function setApiState(status, detail) {
  elements.apiStatus.textContent = status;
  elements.apiDetail.textContent = detail;
}

function setOriginToNearestStop(lat, lon, source) {
  const nearest = getNearestStop(lat, lon);
  elements.originSelect.value = nearest.stop.id;
  updateDestinationOptions(elements.destinationSelect.value);
  renderTrips();
  saveSettings();
  showMessage(`${source} selected ${nearest.stop.name}, about ${nearest.distance.toFixed(1)} miles from the detected position.`);
}

function getNearestStop(lat, lon) {
  return stops
    .map((stop) => ({
      stop,
      distance: distanceInMiles(lat, lon, stop.lat, stop.lon),
    }))
    .sort((a, b) => a.distance - b.distance)[0];
}

function distanceInMiles(lat1, lon1, lat2, lon2) {
  const earthRadius = 3958.8;
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) ** 2;
  return earthRadius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function renderTrips() {
  hideMessage();

  const now = new Date();
  const service = getSelectedService(now);
  const trips = getTripsForSelection(service, now);
  const nextTrip = trips.find((trip) => trip.departureDate >= now) || trips[0];

  if (!trips.length) {
    renderEmptyState(service);
    return;
  }

  renderNextTrip(nextTrip, service, now);
  renderTripList(trips, now);
}

function getSelectedService(now) {
  const selectedDay = elements.daySelect.value;
  const serviceDay = selectedDay === "auto" ? getCurrentServiceDay(now) : selectedDay;
  const serviceMap = {
    weekday: {
      label: "Monday-Wednesday",
      rows: weekdayRows,
    },
    "late-weekday": {
      label: "Thursday-Friday",
      rows: lateWeekdayRows,
    },
    saturday: {
      label: "Saturday",
      rows: saturdayRows,
    },
    sunday: {
      label: "Sunday",
      rows: [],
    },
  };

  return {
    key: serviceDay,
    ...serviceMap[serviceDay],
  };
}

function getCurrentServiceDay(date) {
  if (date.getDay() === 6) return "saturday";
  if (date.getDay() === 0) return "sunday";
  if (date.getDay() === 4 || date.getDay() === 5) return "late-weekday";
  return "weekday";
}

function getTripsForSelection(service, now) {
  const originId = elements.originSelect.value;
  const destinationId = elements.destinationSelect.value;
  const events = buildServiceEvents(service.rows, now);
  const trips = [];

  events.forEach((event, index) => {
    if (event.stopId !== originId) {
      return;
    }

    const destinationEvent = events.slice(index + 1).find((candidate) => candidate.stopId === destinationId);
    if (destinationEvent) {
      trips.push({
        origin: getStop(originId),
        destination: getStop(destinationId),
        departureDate: event.date,
        arrivalDate: destinationEvent.date,
      });
    }
  });

  return trips.sort((a, b) => a.departureDate - b.departureDate);
}

function buildServiceEvents(rows, now) {
  const events = [];

  rows.forEach((row, rowIndex) => {
    row.forEach((timeText, stopIndex) => {
      const date = buildDateForTime(timeText, now);

      if (events.length && date < events[events.length - 1].date) {
        date.setDate(date.getDate() + 1);
      }

      events.push({
        rowIndex,
        stopId: routePattern[stopIndex],
        date,
      });
    });
  });

  const nextDayRows = rows.slice(0, 2);
  nextDayRows.forEach((row, nextRowIndex) => {
    row.forEach((timeText, stopIndex) => {
      const date = buildDateForTime(timeText, now);
      date.setDate(date.getDate() + 1);
      events.push({
        rowIndex: nextRowIndex + rows.length,
        stopId: routePattern[stopIndex],
        date,
      });
    });
  });

  return events.sort((a, b) => a.date - b.date);
}

function buildDateForTime(timeText, referenceDate) {
  const match = timeText.match(/^(\d{1,2}):(\d{2}) (AM|PM)$/);
  let hours = Number(match[1]);
  const minutes = Number(match[2]);
  const period = match[3];

  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;

  const date = new Date(referenceDate);
  date.setHours(hours, minutes, 0, 0);

  if (period === "AM" && hours === 0 && referenceDate.getHours() >= 12) {
    date.setDate(date.getDate() + 1);
  }

  return date;
}

function renderEmptyState(service) {
  elements.nextTime.textContent = "--";
  elements.routeSummary.textContent = `No ${service.label} trips match that route direction. Try another destination.`;
  elements.waitTime.textContent = "--";
  elements.arrivalTime.textContent = "--";
  elements.serviceType.textContent = service.label;
  elements.tripCount.textContent = "0 trips";
  elements.tripList.innerHTML = `<p class="message">No scheduled trips are available for this route direction.</p>`;
}

function renderNextTrip(trip, service, now) {
  elements.nextTime.textContent = formatTime(trip.departureDate);
  elements.routeSummary.textContent = `${trip.origin.name} to ${trip.destination.name}`;
  elements.waitTime.textContent = formatWait(trip.departureDate - now);
  elements.arrivalTime.textContent = formatTime(trip.arrivalDate);
  elements.serviceType.textContent = service.label;
}

function renderTripList(trips, now) {
  const upcomingTrips = trips.filter((trip) => trip.departureDate >= now).slice(0, 8);
  const visibleTrips = upcomingTrips.length ? upcomingTrips : trips.slice(0, 8);

  elements.tripCount.textContent = `${trips.length} trip${trips.length === 1 ? "" : "s"}`;
  elements.tripList.innerHTML = visibleTrips
    .map(
      (trip) => `
        <article class="trip-row">
          <strong>${formatTime(trip.departureDate)}</strong>
          <div>
            <p>${trip.origin.shortName} to ${trip.destination.shortName}</p>
            <p>Arrives ${formatTime(trip.arrivalDate)}</p>
          </div>
          <span>${formatWait(trip.departureDate - now)}</span>
        </article>
      `,
    )
    .join("");
}

function formatTime(date) {
  return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function formatWait(milliseconds) {
  if (milliseconds < 0) {
    return "later";
  }

  const totalMinutes = Math.round(milliseconds / 60000);
  if (totalMinutes < 1) {
    return "now";
  }

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (!hours) {
    return `${minutes} min`;
  }

  return `${hours}h ${minutes}m`;
}

function getStop(id) {
  return stops.find((stop) => stop.id === id);
}

function showMessage(text) {
  elements.message.textContent = text;
  elements.message.classList.remove("hidden");
}

function hideMessage() {
  elements.message.classList.add("hidden");
}

function saveSettings() {
  localStorage.setItem(
    "bow-shuttle-settings",
    JSON.stringify({
      origin: elements.originSelect.value,
      destination: elements.destinationSelect.value,
      day: elements.daySelect.value,
    }),
  );
}

initializeApp();
