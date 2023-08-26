# Vue Maps

## Table of Contents

1. [Introduction](#introduction)
2. [Technologies](#technologies)
3. [Features](#features)
4. [Setup](#setup)
5. [Usage](#usage)
6. [Contributing](#contributing)

## Introduction

<p>🌍 A web application built using Vue, TypeScript, and the Mapbox API to simulate core functionalities of Google Maps 🗺️. Explore the map, search for places, view details of the most visited locations related to your query, and get directions from your current location 📍 to your desired destination.</p>

<p>💻 Deployed on Netlify! You can visualize this project at: https://64e9f46ac2bf4d36a3bc5d8c--vue-mapbox-maps.netlify.app/#/</p>

## Technologies
- Vue 3
- TypeScript
- Mapbox API
- Vuex
- Vue Router
- Axios

## Features

- Automatically retrieves and displays user's current location.
- Navigate through the map with zoom in and zoom out functionalities.
- Search for places and view the top 5 related locations with markers containing relevant details.
- Get directions from your current location to a chosen destination.
- Draw polylines between 📌 Point A (your current location) and 📌 Point B (the desired location).
- View the distance in km and estimated travel time (by car) between the two points.

## Setup

### Prerequisites

- NPM (v6 or later) or Yarn (v1.22 or later)

### Installation

1. Clone the repository

```bash
git clone https://github.com/Davidrami12/vue-maps.git
cd vue-maps
```

2. Install NPM packages
```bash
npm install
```
  or
```bash
yarn install
```

3. Run the app in the development mode
```bash
npm run serve
```
   or
```
yarn run serve
```

Open http://localhost:8080 to view it in the browser.

## Usage
When opening the web, it will firstly ask for your user's location permission, once you request them you will be able to visualize the page, it's as simple to use as Google Maps.

## Contributing
<p>This project is under the MIT license, and contributions are welcome. Please feel free to fork, create a feature branch, and submit a pull request. If you want to contribute to this project and make it better, your help is very welcome.</p>
