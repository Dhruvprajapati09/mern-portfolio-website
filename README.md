# MERN Portfolio Website

This project is a portfolio website built using the MERN stack (MongoDB, Express, React, Node.js). It showcases the skills, projects, and experience of the portfolio owner.

## Project Structure

The project is organized into two main directories: `client` and `server`.

### Client

The `client` directory contains the React application.

- **src/**: Contains the source code for the React application.
  - **components/**: Contains reusable React components.
  - **pages/**: Contains the different pages of the application.
  - **styles/**: Contains the CSS styles for the application.
  - **index.js**: The entry point for the React application.
- **package.json**: Configuration file for npm, listing dependencies and scripts.
- **README.md**: Documentation specific to the client-side application.

### Server

The `server` directory contains the backend application.

- **src/**: Contains the source code for the server application.
  - **controllers/**: Contains the logic for handling requests.
  - **models/**: Contains the database models.
  - **routes/**: Contains the API routes.
  - **app.js**: The main application file for setting up the server.
- **package.json**: Configuration file for npm, listing dependencies and scripts.
- **README.md**: Documentation specific to the server-side application.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the client directory and install dependencies:
   ```
   cd client
   npm install
   ```

3. Navigate to the server directory and install dependencies:
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

The application should now be running on `http://localhost:3000`.

## Features

- Showcase of skills and projects
- Contact form for inquiries
- Responsive design

## License

This project is licensed under the MIT License.