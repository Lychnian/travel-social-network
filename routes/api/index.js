// Create a router instance
const router = require('express').Router();

// Import user and thought routes
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// Define endpoints for user and thought routes
router.use('/users',userRoutes);
router.use('/thoughts',thoughtRoutes);

// Export the router
module.exports = router;
