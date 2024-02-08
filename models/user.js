// Importing the required dependencies from the mongoose library
const { Schema, model } = require('mongoose'); 
const validator = require('validator'); // Import the validator library

// Defining the User schema with the required fields and their respective data types
const userSchema = new Schema(
  {
    // Define the 'username' field with the following properties:
    username: {
      type: String,     // Data type: String
      required: true,   // Field is required
      unique: true,     // Field must be unique
      trim: true,       // Trim whitespace from both ends of the string
    },
     
    // Define the 'email' field with the following properties:
    email: {
      type: String,     // Data type: String
      required: true,   // Field is required
      unique: true,     // Field must be unique
      validate: { 
        // Use validator.js's email validation method
        validator: validator.isEmail,  
        // Custom error message if email validation fails
        message: 'Invalid email address',
      },
    },

    // Define the 'friends' field as an array of ObjectIds referencing the 'User' model
    friends: [
      {
        type: Schema.Types.ObjectId,  // Data type: ObjectId
        ref: 'User',                   // Reference to the 'User' model
      }
    ],

    // Define the 'thoughts' field as an array of ObjectIds referencing the 'Thought' model
    thoughts: [
      {
        type: Schema.Types.ObjectId,  // Data type: ObjectId
        ref: 'Thought',                // Reference to the 'Thought' model
      }
    ],
  },
  {
    // Define options for schema configuration
    toJSON: {
      virtuals: true, // Enables virtual properties to be displayed when a user document is transformed into JSON format
    },
    id: false,        // Disables the default '_id' field in the User model to be returned when calling toJSON() method
  }
);

// Defining a virtual property 'friendCount' which returns the number of friends in the friends array
userSchema.virtual('friendCount').get(function(){
  return this.friends.length;
});

// Creating the User model from the userSchema
const User = model('User', userSchema);

// Exporting the User model for use in other parts of the application
module.exports = User;
