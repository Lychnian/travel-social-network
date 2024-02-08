// Importing the necessary dependencies and configuration files
const express = require("express"); // Importing Express.js to handle routing
const db = require("./config/connection"); // Importing the MongoDB connection configuration
const routes = require("./routes"); // Importing the routes defined in the routes directory

// Setting up the port for the server to listen on
const PORT = 3001;

// Creating an instance of the Express application
const app = express();

// Middleware setup to parse incoming request data
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data
app.use(express.json()); // Parses JSON data

// Mounting the routes defined in the routes directory
app.use(routes);

// Establishing a connection to the MongoDB database
db.once("open", () => { // Once the connection is open...
  // Starting the Express server and listening for incoming requests on the specified port
  app.listen(PORT, () => {
    // Displaying a message indicating that the API server is running on the specified port
    console.log(`API server running on port ${PORT}!`);
  });
});
