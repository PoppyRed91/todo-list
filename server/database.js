
const { Pool } = require("pg");

//making an instance of the pool and saving it to a variable
const pass = require("../pass.json")
const pool = new Pool({
    host: "34.79.81.42",
    port: 5432,
    user: "group4",
    database: "group4",
    password: pass[0]
});

// create table if it doesn't exist

module.exports = {
    query: (text, params) => pool.query(text, params)
};