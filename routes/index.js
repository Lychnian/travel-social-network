// Import the necessary modules and create an Express Router instance
const router = require('express').Router(); 

// Import the API routes
const apiRoutes = require('./api');

// Mount the 'apiRoutes' under the '/api' endpoint
router.use('/api', apiRoutes);

// Define a catch-all route for handling 404 (Not Found) errors
router.use((req, res) => {
    // Respond with a 404 status code and a simple error message
    return res.status(404).send('Wrong Route!');
});

// Export the configured router to be used in other parts of the application
module.exports = router;
