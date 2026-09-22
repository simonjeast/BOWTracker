# Concept review

The built-in image generator produced concept-v1.png before implementation. Keep the forest navigation rail, warm paper canvas, editorial headings, sage route panel and large timetable typography.

Refinement before coding:
- The actual loop returns from Babson through Founders to Wellesley. Show all six stop calls in the schematic; do not imply a reverse stop at Olin.
- Use an in-year archive example (16 April 2026), not the generated April 2025 example.
- Remove generated, unverified boarding descriptions such as “East Hall loop.” Preserve only official stop names and use map searches rather than claiming surveyed coordinates.
- A prominent archive label must persist on results and detail screens. The current service view must not offer unverified current departures.
- Carry the image's visual hierarchy into real controls and separate views; do not use the raster as application UI.
- Results should remain useful: a clear first scheduled option, compact later departures, duration, date and an explicit journey action.

## Implementation pass

Concept-v2.png became the implementation reference. The implemented flow preserves the concept's hierarchy, desktop navigation rail, pale-sage stop sequence and separate journey detail page. On mobile the rail becomes a compact header with all three destinations visible. The diagram uses a readable stop sequence rather than implying geographic accuracy.

Precision refinement: the source PDF identifies every time as a departure. The implementation therefore describes the destination time as a scheduled stop call and duration as time between stops; it avoids a measured-arrival claim. Browser visual verification later succeeded, leading to refined mobile warning spacing and a compact first-result action; see docs/verification.md.
