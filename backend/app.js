const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();

const PORT = 5000;

// initializing the express app

app.use(express.json());
app.use(cors());

// verification for server is working

app.get("/api/", (req, res) => {
    res.send("App is Working");
});

app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`)
})