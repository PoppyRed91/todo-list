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


app.get('/', async (req, res) => {
    try {
        const result = await database.query("SELECT * from information_schema.tables");
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

const port = 5000;

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
})
