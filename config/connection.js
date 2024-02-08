// Import the connect and connection methods from the mongoose library
const { connect, connection } = require('mongoose');

// Define the connection string for the MongoDB database
const connectionString = 'mongodb://127.0.0.1:27017/socialDB';

// Establish a connection to the MongoDB database using the connect method
connect(connectionString);

// Export the connection instance for use in other parts of the application
module.exports = connection;
