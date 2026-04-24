# Mini Project #3: API-Powered App

## The Challenge

Build a web app that fetches **real data from an external API** and presents it in a useful, well-designed interface. This is where your sites go from static to connected, pulling live data from the real world.

## What to Build

Choose an API and build something around its data. Here are some ideas:

**No API key required (easiest to start with):**

| API | What You Could Build | URL |
|-----|---------------------|-----|
| Open-Meteo | Weather dashboard, trip planner | [open-meteo.com](https://open-meteo.com/en/docs) |
| PokéAPI | Pokédex browser, team builder | [pokeapi.co](https://pokeapi.co/) |
| REST Countries | Country explorer, travel quiz, flag game | [restcountries.com](https://restcountries.com/) |
| Open Library | Book search, reading list builder | [openlibrary.org/developers](https://openlibrary.org/developers/api) |
| TheMealDB | Recipe search, meal planner | [themealdb.com/api.php](https://www.themealdb.com/api.php) |
| Dog CEO | Dog breed gallery, random dog viewer | [dog.ceo/dog-api](https://dog.ceo/dog-api/) |
| Art Institute of Chicago | Art gallery browser, artist explorer | [api.artic.edu](https://api.artic.edu/docs/) |

**Free API key required (quick signup):**

| API | What You Could Build | URL |
|-----|---------------------|-----|
| OMDB | Movie search, watchlist builder | [omdbapi.com](https://www.omdbapi.com/) |
| NASA APOD | Space photo viewer, astronomy calendar | [api.nasa.gov](https://api.nasa.gov/) |
| Spoonacular | Recipe finder by ingredients | [spoonacular.com/food-api](https://spoonacular.com/food-api) |
| The Movie Database | Movie/TV show browser | [themoviedb.org](https://www.themoviedb.org/documentation/api) |

**Or find your own.** Browse [github.com/public-apis/public-apis](https://github.com/public-apis/public-apis) for hundreds of free APIs.

> Tip: Start with a no-key API. Getting an API key working adds complexity that can slow you down on day one.

## Requirements (Base)

- Fetch data from at least one external API using `fetch()`
- Display the data dynamically (rendered with JavaScript, not hard-coded)
- Include a **search, filter, or browse** feature (the user chooses what data to see)
- Handle **loading state** (show something while the data loads)
- Handle **error state** (show a friendly message if the API fails)
- Responsive design
- Deployed on GitHub Pages

## Extensions

Push further if you want:

- Use **multiple API endpoints** or combine data from two APIs
- **localStorage** to save favorites, history, or preferences
- Pagination or infinite scroll for large datasets
- Detail view (click an item to see more info)
- Visual data display (charts, progress bars, color-coding)
- Unit conversion or data transformation (Celsius/Fahrenheit, currency, etc.)
- Animations on data load or transitions between views

## Iteration Plan

### Milestone 0: Proposal

**Goal:** Choose your API and define what you'll build.

Commit a `PROPOSAL.md` with:

- **What I'm building:** (one sentence)
- **Which API I'm using:** (name and URL)
- **Why I chose this:** (what interests you about this data?)
- **Core features:** (3-5 things it will do)
- **What I don't know yet:** (what about fetch/async/JSON is new to you?)

**Before proposing:** Open your API URL in the browser. Look at the raw JSON. Make sure you understand what data is available.

### Iteration 1: Fetch and Display

**Goal:** Get data from the API and show it on the page.

**Tasks:**

- Create the basic HTML page with placeholder layout
- Write a `fetch()` call to your API
- `console.log` the response. Understand the JSON structure.
- Display at least 3-5 data items on the page
- Hard-code any parameters for now (e.g., a specific city, a default search term)

**Learning log entry:** What does the API response look like? What fields did you use? What was the trickiest part of getting fetch to work? If AI helped, what did it explain about async/await?

### Iteration 2: Interactivity and Design

**Goal:** Let the user control what data they see, and make it look good.

**Tasks:**

- Add search, filter, or browse functionality
- Style the data display with CSS (cards, grid, list, whatever fits your data)
- Make it responsive (test on mobile)
- Add loading state (show a spinner or "Loading..." while fetching)
- Add error handling (show a message if the API call fails)

**Learning log entry:** How did you connect user input to API calls? What CSS layout did you use for displaying data? What design decisions did you make?

### Iteration 3: Polish and Extend

**Goal:** Make it feel like a real app.

**Tasks:**

- Add at least one extension (localStorage favorites, detail view, pagination, etc.)
- Handle edge cases (no results found, API rate limit, empty search)
- Run Lighthouse audit
- Get feedback from a classmate
- Final polish

**Learning log entry:** What extension did you add? What edge cases did you handle? What surprised you about working with a real API?

## Submission

- Push all code to a **public GitHub repo**
- Deploy on **GitHub Pages**
- Include in your repo:
  - `PROPOSAL.md` with all sections
  - `README.md` with:
    - What your app does
    - Which API you used (with link)
    - Link to live site
    - Screenshot
    - What you learned about working with APIs
- Link from your `oim3690` repo README and your `projects.html` portfolio page
- Learning log entries for all 3 iterations

## Grading

See the [overall mini project grading criteria](README.md#grading).

## Helpful Resources

- [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN: Working with JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
- [Public APIs list](https://github.com/public-apis/public-apis)
- Ask AI: "Explain this API response" (paste the JSON you get back)

## Tips

- **Start in the console.** Before writing any HTML, paste the API URL in your browser to see the raw JSON. Then use `console.log` in your JS to explore the response object.
- **Hard-code first, fetch later.** Build your HTML/CSS with fake data. Once it looks good, replace the hard-coded values with real API data.
- **Read the API docs.** Every API is different. Spend 10 minutes reading the documentation before asking AI for help.
- **Pick an API you find interesting.** You'll spend more time looking at this data than you expect. Choose something you enjoy.
- **No-key APIs are your friend.** Open-Meteo, PokéAPI, and REST Countries all work without signup or authentication.
