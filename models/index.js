// Importing the User and Thought models from their respective files
const User = require('./user');
const Thought = require('./thought');

// Exporting the User and Thought models as a single module for easy access in other parts of the application
module.exports = {Thought, User};
