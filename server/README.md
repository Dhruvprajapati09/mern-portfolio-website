# MERN Portfolio Website

This is a MERN stack portfolio website project that showcases the skills and projects of the portfolio owner. The project consists of a client-side React application and a server-side Node.js application using Express and MongoDB.

## Project Structure

The project is organized into two main directories: `client` and `server`.

### Client

The `client` directory contains the React application, which is structured as follows:

- `src/`: Contains the source code for the React application.
  - `components/`: Contains reusable React components.
  - `pages/`: Contains the different pages of the application.
  - `styles/`: Contains the CSS styles for the application.
  - `index.js`: The entry point for the React application.

### Server

The `server` directory contains the backend application, which is structured as follows:

- `src/`: Contains the source code for the server application.
  - `controllers/`: Contains the logic for handling requests.
  - `models/`: Contains the database models.
  - `routes/`: Contains the API routes for the application.
  - `app.js`: The main application file that sets up the server.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the `client` directory and install dependencies:
   ```
   cd client
   npm install
   ```

3. Navigate to the `server` directory and install dependencies:
   ```
   cd ../server
   npm install
   ```

### Running the Application

1. Start the server:
   ```
   cd server
   npm start
   ```

2. Start the client:
   ```
   cd ../client
   npm start
   ```

The application should now be running on `http://localhost:3000` for the client and `http://localhost:5000` for the server.

## Features

- Portfolio showcasing projects and skills.
- Contact form for inquiries.
- Responsive design.

## License

This project is licensed under the MIT License.