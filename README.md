# Travel Social Network


## Badges
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)


## Table of Contents
* [License](#license)
* [Description](#description)
* [Technologies Used](#technology)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Demo](#demo)
* [Screenshots](#screenshots)
* [How to Contribute](#how-to-contribute)
* [Questions?](#questions)


## License
This project is licensed under the MIT license.
[License Link](https://opensource.org/licenses/MIT)


## Description
 
The NoSQL Social Networking Project, specifically the Travel Social Network, is a dynamic web application that offers a unique spin on traditional social networks. Themed around travel and exploration, users from different countries can connect, share their thoughts and experiences, react to each other's posts, and make new friends. Powered by Mongoose, Express, and Node.js, this project leverages the flexibility and scalability of MongoDB, a NoSQL database, to provide a seamless user experience. With features such as CRUD operations for users and their shared thoughts, as well as the ability to post and delete reactions to thoughts and friendships, the Travel Social Network fosters a vibrant community of global travelers and adventurers.


## Technologies Used
    
The technologies used in this project include:
- Dynamic JavaScript
- Mongoose
- Express
- Node.js
- NoSQL (MongoDB)
- Postman
- MongoDB Compass


## Usage
   
To use the Travel Social Network:
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Start the server by running `node server`.
5. Use Postman or a similar tool to interact with the API endpoints and explore the features of the Travel Social Network.


## Tests

### Postman API Testing
To ensure the functionality of the routes and endpoints in the Travel Social Network, various tests were conducted using Postman. Below are the test scenarios and instructions on how to run them:

#### Running the Tests
1. Open Postman and import the collection containing the API requests.
2. Run each request in the collection, ensuring that the responses match the expected outcomes.
3. Verify that the CRUD operations for users and thoughts, as well as reactions and friendship requests, are functioning as expected.
4. Monitor the responses and status codes to identify any errors or unexpected behavior.

#### Testing CRUD Operations for Users and Thoughts using the following API Requests:
1. **Create User**: Sent POST requests to the `/api/users` endpoint with the required fields (e.g., username, email) to create new users.
2. **Retrieve Users**: Sent GET requests to the `/api/users` endpoint to retrieve all users from the database.
3. **Update User**: Sent PUT requests to the `/api/users/:userId` endpoint with the updated user information to update existing users.
4. **Delete User**: Sent DELETE requests to the `/api/users/:userId` endpoint to delete users by their unique ID.
5. **Create Thought**: Sent POST requests to the `/api/thoughts` endpoint with the required fields (e.g., thoughtText, username, userId) to create new thoughts shared by users.
6. **Retrieve Thoughts**: Sent GET requests to the `/api/thoughts` endpoint to retrieve all thoughts from the database.
7. **Update Thought**: Sent PUT requests to the `/api/thoughts/:thoughtId` endpoint with the updated thought information to update existing thoughts.
8. **Delete Thought**: Sent DELETE requests to the `/api/thoughts/:thoughtId` endpoint to delete thoughts by their unique ID.

#### Testing Reactions to Thoughts and Friendship  using the following API Requests:
1. **Add Reaction**: Sent POST requests to the `/api/thoughts/:thoughtId/reactions` endpoint with the reaction data to add reactions to specific thoughts.
2. **Delete Reaction**: Sent DELETE requests to the `/api/thoughts/:thoughtId/reactions/:reactionId` endpoint to delete reactions from thoughts.
3. **Add Friend**: Sent POST requests to the `/api/users/:userId/friends/:friendId` endpoint to add friends between users.
4. **Remove Friend**: Sent DELETE requests to the `/api/users/:userId/friends/:friendId` endpoint to remove friends from the user's friend list.


By performing these tests in Postman, the functionality and reliability of the Travel Social Network project's routes and endpoints were thoroughly evaluated.


## Demo

Watch my YouTube demo video to learn how to use API endpoints for performing CRUD operations, including creating, reading, updating, and deleting user profiles, thoughts, reactions, and friendships.

YouTube demo video: 
https://www.youtube.com/watch?v=y2H0BBKE-DQ&t=220s


## Screenshots


## How to Contribute
[Contributor Covenant](https://www.contributor-covenant.org/)  
   
  
## Questions?
### Reach Me Here: 
[Lychnian](https://github.com/Lychnian)

Travel Social Network Repository: 
https://github.com/Lychnian/travel-social-network


