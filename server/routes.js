const express = require("express");

// create an instance of our router

const router = express.Router()

// GET / todos
// GET request that as of right now sends a simple status code 200 and
// a placeholder message of GET REQUEST TO /api/todos
// we will eventually use this route to send back an array of todos we 
// will retrieve from our database


// CRUD OPERATIONS 

router.get("/todos", (req, res) => {
    res.status(200).json({ mssg: "GET REQUEST TO /api/todos" })
});

// POST /todos
// POST request that sends status 201 and a placeholder message
// we will eventually use this route to take a todo from the front 
// end and insert a new todo  into our database

router.post("/todos", (req, res) => {
    res.status(201).json({ mssg: "POST REQUEST TO /api/todos" })
});

// DELETE /todos
// DELETE request that sends status 200 and a placeholder message
// - we will eventually use this route to take a todo id, and send a request 
// to delete the todo that has that id - we will be able to get the id 
// using the **:id** parameter of our endpoint

router.delete("/todos", (req, res) => {
    res.status(200).json({ mssg: "DELETE REQUEST TO /api/todos" })
});

// PUT /todos
// PUT request that sends status 204 and a placeholder message
// - we will eventually use this route to take a todo id, and send a put request
// (in other words an update) to the todo that has that id - we will be 
// able to get the id using the **:id** parameter of our endpoint

router.put("/todos", (req, res) => {
    res.status(204).json({ mssg: "PUT REQUEST TO /api/todos" })
});

// Module exports are the instructions that tell Node. js which bits of code 
// (functions, objects, strings, etc.) to export from a given file so that other
// files are allowed to access the exported code.


module.exports = router;

