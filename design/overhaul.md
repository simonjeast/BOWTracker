# BOWTracker overhaul

Created 22 September 2026. Scope: rebuild the product around trustworthy campus journeys, with a distinct identity and an image-first design process. Reference principles recovered from the TabShare redesign: purposeful full-page flows, generous desktop layouts, equally considered mobile layouts, real working actions, and visual richness without clutter.

## 1. Trust and schedule provenance

- Separate published timetable, confirmed service calendar, and live vehicle observations. Never represent a timetable countdown as GPS tracking.
- Store source URL, source title, academic year, date checked, verification status, service days, and exceptions alongside the data.
- Current research does NOT establish a 2026–27 timetable. Babson still links AY 2025–26; Wellesley's undated page conflicts with it. Default to a current-service-unconfirmed state, with explicit opt-in historical timetable exploration.
- Show source conflicts in Schedule & service, with links and the operator's published contact number. Do not silently blend sources.
- Support date-bounded schedules and explicit no-service/replacement-day exceptions. Academic class calendars alone are not proof of shuttle service.
- Treat a future GPS integration as dependent on an authorized operator feed. Freshness, timestamp, accuracy and outage handling are required before any live claim.

## 2. Rebuild journey calculations

- Use America/New_York for all service dates, time labels and countdowns, regardless of device timezone.
- Model each scheduled run as an ordered list of stop calls; repeated Founders calls have distinct positions and directions.
- Only pair origin and destination within the same documented run. Do not stitch different rows into an invented through journey.
- Explain unsupported directions clearly. Babson → Olin is not a direct journey in the documented loop; do not suggest sitting through an assumed turnaround.
- Use concrete date and time inputs, with leave-after and arrive-by searches.
- Handle breaks, end of service, Sundays, midnight arrivals, previous-service-day spillover, DST, and validity boundaries.
- Remove fallback to already-departed trips and automatic copying of today's service onto tomorrow.
- Refresh time-sensitive displays without resetting user input or keyboard focus.

## 3. Product flow and information architecture

1. **Find a shuttle:** choose origin, destination and departure/arrival time. Wellesley → Babson is the sensible first-use route. Returning users keep their chosen route locally.
2. **Journey:** dedicated detail view with boarding stop, scheduled time, intermediate calls, arrival day, route direction and source status. Back navigation preserves the search.
3. **Stops:** four named boarding locations with external map searches; optional device location suggests a stop for the user to confirm.
4. **Schedule & service:** source validity, discrepancies, full selected timetable, service rules and contact options. A timetable-preview route stays visibly marked throughout.

The first two form the primary journey. Stops and Schedule & service are supporting destinations, not compulsory steps.

## 4. Visual overhaul

- Generate and inspect a desktop/mobile concept before coding; refine it before translating it into native HTML/CSS.
- Give BOWTracker its own transit identity: forest green, warm paper, pale sage, dark ink and restrained yellow service notices.
- Large readable departure times, compact route symbols, a precise vertical stop timeline and clear primary actions.
- Avoid a fabricated moving bus or a decorative map that implies real position. A labelled route diagram is appropriate.
- Desktop uses a spacious navigation rail and two-column planner/results composition. Mobile uses a compact header and accessible navigation with one clear reading order.
- Distinct loading, empty, expired, source-conflict, no-direct-route, location-denied, low-accuracy and offline states.

## 5. Location and privacy

- Remove automatic third-party IP geolocation.
- Request browser geolocation only after the user clicks; explain its purpose.
- Show accuracy and distance, reject unreliable/far-away fixes, and require confirmation before changing origin.
- Keep coordinates in memory only. Store route preferences defensively; blocked or corrupt storage must not break the app.
- Do not infer the bus's position from the passenger's location.

## 6. Accessibility, resilience and performance

- Semantic headings and forms, visible focus, usable keyboard navigation, large touch targets and adequate contrast.
- Dates and state must not rely on color alone. Avoid announcing every countdown update.
- Responsive layouts from 360px to wide desktop; respect reduced motion.
- Keep the static GitHub Pages deployment model, relative asset paths and minimal dependencies.
- Graceful no-JavaScript message and useful offline/source-unavailable guidance.

## 7. Engineering and verification

- Separate data, pure journey engine and interface code; no framework migration solely for styling.
- Regression tests for timezone independence, date validation, exact departure boundary, midnight, Sunday, late-day differences, route direction, Founders repetition, break gaps and expired/unconfirmed data.
- Browser checks for the complete search → journey → back flow, timetable preview, date/time modes, stop selection, malformed preferences, location failure, and desktop/mobile overflow.
- Add reproducible local setup, CI tests, source-update instructions, documented limitations and a release checklist.
- Save changes on a dedicated branch and open a draft PR. Current-service claims remain gated on confirmed schedule evidence; reviewable work need not wait for it.

## Definition of done

A coherent image-led redesign implemented as a usable responsive app; documented source research; a tested journey engine with no invented live accuracy; complete flows and clear uncertainty states; a reviewable GitHub branch/PR. Publishing a confirmed current timetable requires a dated operator/college source or explicit confirmation, which is presently unavailable.
