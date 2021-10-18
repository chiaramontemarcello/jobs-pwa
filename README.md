# Project Title

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [CORS](#cors)
- [API](#api)

## About <a name = "about"></a>

This fullstack project comprehends an Angular Ionic Progressive Web App and a Nest.js Backend App.

Its objective is to provide a simplified view of some jobs that are provided by the jobs.ch API.

Currently there is no filtering from the PWA, but the backend have this feature implemented.

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

- For the API Client Code generation it is necessay to have Java installed. Follow [this](https://java.com/en/download/help/windows_manual_download.html#download) instructions for the installation. This is however not strictly necessary, as the API client code already is on this repo.

- The PATH enviromental variable in Windows must contain the installation path of the java binaries. Example:

```
C:\Program Files (x86)\Java\jre1.8.0_301\bin
```

- Dependencies to install at the local machine
  - Node 14
  - npm 8

### Developing

At the nest-backend folder, run:

```
npm install
npm run start:dev
```

At the frontend-pwa/source folder, run:

```
npm install
npm start
```

Open your browser at http://localhost:4200

The Backend server is listening at http://localhost:3000

## CORS <a name = "cors"></a>

To avoid CORS-relate problems, the nest.js web server was set up to relay all communication between the public jobs.ch API and the user.

## API <a name = "api"></a>

Although a powerful and broad API, there are some points lacking at jobs.ch/ap1/v1

- There is no available API documentation
- Many of the datapoints need a mapping front-end sided from numbers to locations and categories

The API was partially reverse engineered. The OpenAPI3 documentation is at /frontend-pwa/docs/api-definition.yaml

## Live Demo: [kollabo.app](https://kollabo.app)

## Possible features:

- Infinite Scrolling
- Location/IP Address based recommendations
