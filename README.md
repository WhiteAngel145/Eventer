# Event Manager

## Description
This is a SPA (Single Page Application) for creating and managing events. The application allows visitors to browse through the event catalog. Users may register with an email and a password which allows them to create their own events. Event authors can also edit or delete their own publications at any time.

## Technologies
- JavaScript
- lit-html
- Page.js
- Node.js

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/WhiteAngel145/Eventer.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

## Usage
1. Start the application:
    ```bash
    npm start
    ```
2. Open a browser and go to `http://localhost:3000`.

## Features
- Browse the event catalog
- Create new events
- Edit existing events
- Delete events
- User registration and login

## Project Structure
- `src/`: Source code folder
    - `components/`: Components folder
        - `Header.js`: Navigation component
        - `EventList.js`: Component for displaying a list of events
        - `EventDetail.js`: Component for displaying event details
        - `EventForm.js`: Component for creating and editing events
    - `pages/`: Pages folder
        - `HomePage.js`: Home page
        - `EventPage.js`: Page for displaying a list of events
        - `LoginPage.js`: Page for user login
        - `RegisterPage.js`: Page for user registration
    - `services/`: Service modules folder
        - `eventService.js`: Service for event operations
        - `authService.js`: Service for user authentication
	- `App.js`: Main application component
	- `index.js`: Application entry point