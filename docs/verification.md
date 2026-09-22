# Verification — 22 September 2026

## Completed

- 11 pure-engine regression tests: source row counts and break gaps; device timezone independence; DST; same-run pairing; Founders direction; Saturday midnight spillover; Sunday starts; arrive-by ordering; exact departure boundaries; invalid input; archived/unconfirmed/expired calendar gating; cancellation and replacement days; countdown rounding.
- One in-memory DOM integration test: corrupt stored preferences → current-service notice → archive preview → journey detail → back preserving search → swap → unsupported direction → stop cards → denied location → confirmed location suggestion → full Saturday timetable → exit archive → invalid journey fallback.
- `node --check app.js` passes.
- npm installation audit reports no vulnerabilities. Production has no runtime package dependencies.
- Two generated design concepts inspected before code. Refinements recorded in design/decisions.md.

## Still required

Browser inspection was blocked by the browser tool: its admin-enforced policy could not be verified. No alternate browser path was used to bypass that check. In-memory DOM tests do not measure layout, rendering, browser permissions, or keyboard behavior.

Before release, check at 360px, 390px, 768px and 1440px:

- No horizontal page overflow; timetable overflow is confined to its scroll container.
- Labels, warning text and trip times remain legible; navigation and forms fit.
- Search → journey → back, route reversal, arrive-by, source links and stop selection work in the browser.
- Tab focus is visible and follows reading order; source and archive states are understandable with a screen reader.
- Denied, unavailable, low-accuracy and far-away location fixes retain manual operation.
- No JavaScript errors; direct repository-path loads work on GitHub Pages.
- Compare implemented screens against concept-v2.png and refine any spacing/typography problems.

## External evidence gaps

A confirmed 2026–27 timetable, holiday/service calendar and any authorized GPS feed remain unavailable from the checked sources. The interface handles this with an unconfirmed default and an explicit archive preview; no current service claim should be enabled until evidence changes.

## Resilience follow-up

The interface test now also covers missing geolocation support, low-accuracy and invalid coordinates, far-away fixes, late location callbacks after navigation, and offline → navigate → refresh controls → reconnect. The offline notice now survives view changes, and archived journey context stays visible on the Stops page. All 12 tests still pass. Browser policy verification was retried and remains unavailable; rendered-layout checks are still outstanding.
