SERVER

// to change into server folder run in terminal:
// cd server
// to create package.json file: npm init -y
// to install dependencies:
// npm install express mongodb dotenv nodemon
// express - node framework to setup server routes
// mongodb - helps us to connect to out MongoDB server
// dotenv - allows us to create a .env file for holding sensitive info
// nodemon - allows us to update our server on every save, so we don't
// have to reset it after every change


// import express framework into the server-side JS file
// Express is a Node.js web application framework used for
// building web applications and APIs

const express = require("express");

// create an instance of express called app
// app variable will be used to configure routes, handle
// HTTP requests and start the server

const app = express();

// create a test router with http GET method
// when client sends a GET request to the /hello endpoint, the
// server responds with a JSON object containing a message "hello"
// and status code of 200 - success.
// It contains an arrow function that serves as the route handler.
// It takes 2 parameters req (request) and res (response)
// Parameters represent the HTTP request and response objects
// Function defines what should happen when a request is made to the
// specified endpoint.
// res.status(200) sets HTTP request of the response 200
// .json({mssg:"hello"}) is a method used to send a JSON response back
// to the client.

app.get("/hello", (req, res) => {
    res.status(200).json({ mssg: "hello bub" });
    console.log(req);
});

// create a port variable and assign it the value 5000
// this variable represents the port number on which the server will listen
// for incoming requests

const port = 5000;

// listen to our server on our localhost
// listen method starts the server and makes it listen for incoming
// connections on the specified port (5000)
// when the server starts listening, it executes the callback function
// which logs a message to the console indicating that the server is
// now running and accessible at http://localhost:5000

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
})


// now we will run our server, enter in terminal: node index.js
// we will get an error when we open localhost: cannot GET
// because we didn't set up anything to our root end point "/"
// we set up "/hello" though -> http://localhost:5000/hello - we will get {"mssg":"hello"} there.

// open package.json and add under scripts section following:
// "scripts":
//    {"start": "node index.js"
//     "dev": "nodemon index.js"
// },
// when we run npm run dev we will be running our server with nodemon
// which will be watching for any changes we make in our files
// when we deploy we will use npm start, this will run our server
// without watching for changes because at that point we shouldn't be changing anything.


CLIENT

- Now let us setup the skeleton of our front end
- Enter your client folder, if you are still in the server folder you can do the following commands to back out into the awesometodos folder and then enter the client folder
- `cd ..`
- `cd client`
- now that we are in the client folder, we will install react using create-react-app, a popular way to get started with a react application easily, run the following command in your terminal (make sure you are in the client folder)
- `npx create-react-app .`
- the . means we want to create our application inside the folder are already in, which in this case is client, this might take a minute or two
- once everything finished installing run the following command, `npm start`

open the src folder and delete unnecessary files

- along with deleting files, do the following as well
    - change **App.js** and **index.js** to **App.jsx** and **index.jsx**

- also rename our index.css file to styles.css, again, this is just a personal preference
- inside the styles.css, delete everything currently in it so that we have a blank file
- inside index.jsx, update the file to reflect the following

AFTER ROUTES ARE SET OPEN INDEX.JS and set up our routes there


SETTING UP A DATABASE

