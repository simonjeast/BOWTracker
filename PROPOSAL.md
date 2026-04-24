# BOWTracker - Project 3

I am building this for my girlfriend, a Wellesley College student, who frequently takes the BOW (Babson, Olin, Wellesley) community shuttle from Wellesley to Babson. The current schedule is in a confusing pdf. With this, I aim to make her travel experience easier.

## What I'm Building

I am building a BOW Shuttle Finder that uses the current time and approximate user location to show the next Babson, Olin, and Wellesley community shuttle departure.

## Which API I'm Using

- Location API: [Geolocation DB](https://geolocation-db.com/) through `https://geolocation-db.com/json/`
- Schedule source: [AY 2025-2026 BOW Shuttle Schedule PDF](https://www.babson.edu/media/babson/assets/isss/AY-2025-2026-BOW-Shuttle-Schedule.pdf)

## Why I Chose This

The shuttle schedule is useful for students moving between the three campuses, but a PDF table is not the fastest way to answer "when is the next shuttle from here?" This project turns that schedule into a simple interactive tool.

## Core Features

- Fetch approximate location data from an external API with `fetch()`.
- Match the detected location to the nearest BOW shuttle stop.
- Show the next departure, estimated arrival, wait time, and route.
- Let the user manually browse by departure stop, destination, and service day.
- Save the user's latest choices with `localStorage`.
- Handle loading, API failure, no-route, and no-service states.
