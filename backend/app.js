const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Intern = require("./Models/interns.js")
const Admin = require("./Models/admins.js")
const Mission = require("./Models/missions.js")

// initalizations and config
const PORT = process.env.PORT ? process.env.PORT : 5000;
dotenv.config()

mongoose.connect(process.env.DB_CONNECTION_STRING + process.env.DB_NAME)

// initializing the express app

const app = express();
app.use(express.json());
app.use(cors());

// verification for server is working

app.get("/api/", (req, res) => {
    res.send("App is Working");
});

app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`)
})

// MongoDB apis

app.post("/api/add-mission", async (req, res) => {
    try {
        const mission = new Mission(req.body);
        let result = await mission.save();
        result = result.toObject();
        if (result) {
            res.send({msg: "Mission added successfully!"});
        } else {
            res.send({msg: "There was an error trying to add the mission, please try again."})
        }
    } catch (e) {
        res.send("Something Went Wrong. Please try again. " + e);
    }
})

app.get("/api/get-missions", async (req, res) => {
    try {
        const missions = await Mission.find({});
        res.send(missions)
    } catch (e) {
        console.log(e)
        res.send("Something Went Wrong. Please try again. " + e);
    }
})

app.post("/api/delete-mission", async (req, res) => {
    try {
        await Mission.deleteOne({ _id: req.body.missionID });
        res.send().status(200)
    } catch (e) {
        console.log(e)
        res.send("Something Went Wrong. Please try again. " + e);
    }
})