// Import necessary models and dependencies
const { Thought, User } = require('../models');


// Define the ThoughtController object, which contains methods for handling various API requests related to thoughts
const ThoughtController = {
  // Handler for the "get all thoughts" API endpoint
  async getAllThoughts(req, res) {
    try {
      // Retrieve all thoughts from the database
      const thoughts = await Thought.find({});
      res.json(thoughts);
    } catch (err) {
      // Handle server error and return a 500 status code with the error message
      res.status(500).json(err);
    }
  },

  // Handler for the "get thought by ID" API endpoint
  async getThoughtById(req, res) {
    try {
      // Find a thought by its unique ID
      const thought = await Thought.findOne({ _id: req.params.thoughtId });
      if (!thought) {
        // If no thought is found with the specified ID, return a 404 response
        res.status(404).json({ message: 'No Thought found with that ID' });
      } else {
        // Return the found thought
        res.json(thought);
      }
    } catch (err) {
      // Handle server error and return a 500 status code with the error message
      res.status(500).json(err);
    }
  },

  // Handler for the "create thought" API endpoint
  async createThought(req, res) {
    try {
      // Create a new thought using the request body data
      const thought = await Thought.create(req.body);

      // Update the associated user's thoughts array with the new thought's _id
      const updatedUser = await User.findByIdAndUpdate(
        req.body.userId,
        { $push: { thoughts: thought._id } },
        { new: true }
      );

    // If the associated user is not found, return a 404 response
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

      // Return the created thought
      res.status(201).json(thought);
    } catch (err) {
      // Handle server error and return a 500 status code with the error message
      res.status(500).json(err);
    }
  },

  // Handler for the "delete thought" API endpoint
  async deleteThought(req, res) {
    try {
      // Find and delete a thought by its ID
      const thought = await Thought.findByIdAndDelete({ _id: req.params.thoughtId });
      res.status(200).json(thought);
    } catch (err) {
      // Handle server error and return a 500 status code with the error message
      res.status(500).json(err);
    }
  },

  // Handler for the "update thought by ID" API endpoint
  async updateThoughtById(req, res) {
    try {
      // Find and update a thought by its ID with the provided request body data
      const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {
        new: true,
      });
      if (!thought) {
        // If no thought is found with the specified ID, return a 404 response
        res.status(404).json({ message: 'No thought found with that ID' });
      } else {
        // Return the updated thought
        res.json(thought);
      }
    } catch (err) {
      // Handle server error and return a 500 status code with the error message
      res.status(500).json(err);
    }
  },

  // Handler for the "create reaction" API endpoint
  async createReaction(req, res) {
    try {
      // Find a thought by ID and add a reaction to its reactions array
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      thought ? res.json(thought) : res.status(404).json({ message: 'Thought not found' });
    } catch (err) {
      // Handle server error and return a 500 status code with the error message
      res.status(500).json(err);
    }
  },

  // Handler for the "delete reaction" API endpoint
  async deleteReaction(req, res) {
    try {
      // Find a thought by ID and remove a reaction from its reactions array
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      thought ? res.json(thought) : res.status(404).json({ message: 'Thought not found' });
    } catch (err) {
      // Handle server error and return a 500 status code with the error message
      res.status(500).json(err);
    }
  },
};

// Export ThoughtController for use in other parts of the application
module.exports = ThoughtController;
