const express = require("express");
const app = express();
const database = require("./database")

// import our todos router

const router = require("./routes")

// use /api to prefix our endpoints
// with app.use() we are able to register our routes to be prefixed
// with /api, so now our endpoints are as followed: 
/* 
- **GET /api/todos**
- **POST /api/todos**
- **DELETE /api/todos/:id**
- **PUT /api/todos/:id** 
*/



// post /signup/1
function onSignUp(userName, password) {
    // If username exits -> "User already exists" -> return;
    // If not -> add username and password to the database

}

// get /signin/1
function onSignIn(userName, password) {
    // If username exits -> compare the given password
    // with the password connected to the username in the database
    // If it doesn't match -> return;
    // If it matches -> Sign in
}

const port = 5000;

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
})

// taskzilla.com/login -> routes on the front end from which the functions are called on the backend

// taskzilla.com/login/0 -> call the function on the backend to sign up
// taskzilla.com/login/1 -> call the function on the backend to sign in