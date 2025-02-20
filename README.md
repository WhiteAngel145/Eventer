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
To start and use the application, follow these steps:

1. Install dependencies:
    ```bash
    npm install
    ```
2. Run tests:
    ```bash
    npm run test
    ```
3. Start the application:
    ```bash
    npm run start
    ```
4. Start the RESTful server:
    ```bash
    npm run rest
    ```
5. Start the development server:
    ```bash
    npm run dev
    ```
6. Open a browser and go to `http://localhost:3000`.

## Features
- Browse the event catalog
- Create new events
- Edit existing events
- Delete events
- User registration and login

## Project Structure
- `src/`: Source code folder
    - `api`: Folder API
        - `requester.js`: REST service
    - `lib`: Folder library
        - `lit-html.js`: lit-html service
        - `page.js`: page service
    - `middlewares`: Folder middleware service
        - `navMiddleware.js`: Service navigation
    - `services/`: Service modules folder
        - `dataService.js`: Service for event operations
        - `userService.js`: Service for user authentication
    - `utils/`: Folder localStore users
        - `userUtils.js`: Control localStore/sessionStorage
    - `views/`: Pages folder
        - `create.js`: Page for create event
        - `delete.js`: Page for delete event
        - `details.js`: Page for event details
        - `edit.js`: Page for editing event
        - `events.js`: Page for displaying a list of events
        - `home.js`: Home page
        - `login.js`: Page for user login
        - `logout.js`: Page for user logout
        - `navigation.js`: Page showing navigation bar
        - `register.js`: Page for user registration
    - `App.js`: Main application

## Author
XXXXX-XXXXXXXX

## License
ISC
