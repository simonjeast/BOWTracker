# Verification — 22 September 2026

## Completed

- 11 pure-engine regression tests: source row counts and break gaps; device timezone independence; DST; same-run pairing; Founders direction; Saturday midnight spillover; Sunday starts; arrive-by ordering; exact departure boundaries; invalid input; archived/unconfirmed/expired calendar gating; cancellation and replacement days; countdown rounding.
- One in-memory DOM integration test: corrupt stored preferences → current-service notice → archive preview → journey detail → back preserving search → swap → unsupported direction → stop cards → denied location → confirmed location suggestion → full Saturday timetable → exit archive → invalid journey fallback.
- `node --check app.js` passes.
- npm installation audit reports no vulnerabilities. Production has no runtime package dependencies.
- Two generated design concepts inspected before code. Refinements recorded in design/decisions.md.

## Browser verification completed

The Codex in-app browser became available on retry. On 22 September 2026, the local app loaded over HTTP with no browser error or warning logs. The rendered planner, archived results, journey detail, boarding-stop view and service page were inspected. The complete archive → first result → journey → boarding stop flow worked, and the source-status warning stayed visible in archived views.

Viewport widths 360, 390, 768 and 1440 px had no page-level horizontal overflow. At 360 px, both service tables overflowed only inside their keyboard-focusable scroll regions. The 390 px planner and journey screens were inspected visually against concept-v2.png. The source warning and first-result action were refined during this pass, then reloaded and checked in the browser. The first result remains on one readable row at 390 px, and the page has no overflow.

Browser permission prompts for real device location were not invoked; the interface test covers denied, unavailable, imprecise, invalid, far-away and late fixes. Automated accessibility analysis and screen-reader narration were not run. These remain useful follow-up checks before a public launch but are not required to review the draft PR.

## External evidence gaps

A confirmed 2026–27 timetable, holiday/service calendar and any authorized GPS feed remain unavailable from the checked sources. The interface handles this with an unconfirmed default and an explicit archive preview; no current service claim should be enabled until evidence changes.

## Resilience follow-up

The interface test now also covers missing geolocation support, low-accuracy and invalid coordinates, far-away fixes, late location callbacks after navigation, and offline → navigate → refresh controls → reconnect. The offline notice now survives view changes, and archived journey context stays visible on the Stops page. All 12 tests still pass. Browser access later recovered, and rendered layout checks are recorded above.
