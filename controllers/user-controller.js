const { User } = require('../models');
const { Thought } = require('../models');

const UserController = {
  getAllUsers(req, res) {
    // Retrieve all users from the database
    User.find({})
      .then(userData => res.json(userData))
      .catch(err => res.status(500).json(err));
  },
  
  getUserById(req, res) {
    // Retrieve a single user by their unique ID from the database
    User.findById(req.params.userId)
      .then(userData => res.json(userData))
      .catch(err => res.status(500).json(err));
  },
  
  createUser(req, res) {
    // Create a new user record in the database using the request body data
    User.create(req.body)
      .then(userData => res.json(userData))
      .catch(err => res.status(500).json(err));
  },

  updateUserById(req, res) {
    // Find and update a user's information by their ID
    User.findByIdAndUpdate(req.params.userId, req.body, { new: true })
      .then(userData => {
        if (!userData) {
          // If the user is not found, return a 404 response
          return res.status(404).json({ message: 'User not found with this ID!' });
        }
        // Return the updated user data
        res.json(userData);
      })
      .catch(err => res.status(500).json(err));
  },

  async deleteUserById(req, res) {
    try {
      // Find and remove the user by ID
      const user = await User.findOneAndDelete({ _id: req.params.userId });
  
      if (!user) {
        return res.status(404).json({ message: 'No such user exists' });
      }
  
      // Remove all thoughts owned by the deleted user
      await Thought.deleteMany({ user: req.params.userId });
  
      res.json({ message: 'User and associated thoughts successfully deleted' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
 
  addFriend(req, res) {
    // Find the user by ID and add a friend to their friend list
    User.findByIdAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.body.friendId || req.params.friendId } },
      { new: true }
    )
      .then(userData => {
        if (!userData) {
          // If the user is not found, return a 404 response
          return res.status(404).json({ message: 'User not found with this ID!' });
        }
        // Return the updated user data
        res.json(userData);
      })
      .catch(err => res.status(500).json(err));
  },

  removeFriend({ params }, res) {
    // Find the user by ID and remove a friend from their friend list
    User.findByIdAndUpdate(
      { _id: params.userId },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          // If the user is not found, return a 404 response
          return res.status(404).json({ message: "User not found with this ID!" });
        }
        // Check if the friend was successfully removed and return an appropriate response
        const removed = !dbUserData.friends.includes(params.friendId);
        if (removed) {
          res.json({ message: "Friend removed successfully!", dbUserData });
        } else {
          res.json(dbUserData);
        }
      })
      .catch((err) => res.status(400).json(err));
  },
};

// Export UserController to make it available for other parts of the application
module.exports = UserController;
