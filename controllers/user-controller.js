const { User } = require('../models');

const UserController = {
  // 1. Get all users
  getAllUsers(req, res) {
    // Retrieve all users from the database
    User.find({})
      .then(userData => res.json(userData))
      .catch(err => res.status(500).json(err));
  },

  // 2. Get one user by ID
  getUserById(req, res) {
    // Retrieve a single user by their unique ID from the database
    User.findById(req.params.userId)
      .then(userData => res.json(userData))
      .catch(err => res.status(500).json(err));
  },
  
  // 3. Create a new user
  createUser(req, res) {
    // Create a new user record in the database using the request body data
    User.create(req.body)
      .then(userData => res.json(userData))
      .catch(err => res.status(500).json(err));
  },

  // 4. Update user by ID
  updateUserById(req, res) {
    // Find and update a user's information by their ID
    User.findOneAndUpdate(req.params.id, req.body, { new: true })
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

  // 5. Delete user
  deleteUserById(req, res) {
    // Find and delete a user by their ID
    User.findOneAndDelete(req.params.id)
      .then(userData => {
        if (!userData) {
          // If the user is not found, return a 404 response
          return res.status(404).json({ message: 'User not found with this ID!' });
        }
        // Return a success message after deleting the user
        res.json({ message: 'User deleted successfully!' });
      })
      .catch(err => res.status(500).json(err));
  },

  // 6. Add a friend to a user's friend list
  addFriend(req, res) {
    // Find the user by ID and add a friend to their friend list
    User.findOneAndUpdate(
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

  // 7. Remove a friend from a user's friend list
  removeFriend({ params }, res) {
    // Find the user by ID and remove a friend from their friend list
    User.findOneAndUpdate(
      { _id: userId },
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