const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Intern = require("./Models/interns.js")
const Admin = require("./Models/admins.js")
const Mission = require("./Models/missions.js")
const Internship = require("./Models/internships.js")

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

app.post("/api/get-missions", async (req, res) => {
    try {
        let missions = []
        if(req.body.missionState === "ongoing") {
            missions = await Mission.find({status: "ongoing"});
        } else {
            missions = await Mission.find({});
        }
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

app.post("/api/update-mission", async (req, res) => {
    try {
        const missionID = req.body._id
        const mission = req.body
        const response = await Mission.findByIdAndUpdate({"_id": missionID}, 
            {$set: {
                name: mission.name,
                about: mission.about,
                status: mission.status,
                type: mission.type,
                vacancy: mission.vacancy
            }})
            res.send(200)
    } catch(e) {
        console.log(e)
        res.send(e).status(400)
    }
})

app.post("/api/accept-intern", async (req, res) => {
    try {
        await Intern.updateOne({"ID": req.body.internID}, {$set: {status: "enrolled"}})
        res.sendStatus(200)
    } catch(e) {
        res.send(e)
    }
})


// intern apis

app.post("/api/apply", async (req, res) => {
    try {
        const internship = new Internship({
            missionID: req.body.missionID,
            internID: req.body.internID,
            status: "ongoing"
        });
        let result = await internship.save();
        const response = await Mission.findByIdAndUpdate({"_id": req.body.missionID}, 
            {$set: {
                vacancy: req.body.currentVacancy - 1
            }})
        result = result.toObject();
        if (result) {
            res.send({msg: "Internship added successfully!"});
        } else {
            res.send({msg: "There was an error trying to add the internship, please try again."})
        }
    } catch(e) {
        console.log(e)
        res.send(e).sendStatus(400)
    }
})

app.post("/api/get-internships", async (req, res) => {
    try {
        let internships = []
        if(req.body.type === "ongoing") {
            internships = await Internship.find({internID: req.body.internID, status: "ongoing"});
        } else if(req.body.type === "complete") {
            internships = await Internship.find({internID: req.body.internID, status: "complete"});
        }
        res.send(internships)
    } catch (e) {
        console.log(e)
        res.send("Something Went Wrong. Please try again. " + e);
    }
})

app.post("/api/complete-internship", async (req, res) => {
    try {
    const response = await Internship.findByIdAndUpdate({"_id": req.body.internshipID}, 
            {$set: {
                status: "complete",
            }})
            res.send(200)
    } catch(e) {
        console.log(e)
        res.send(e).status(400)
    }
})

app.get("/api/get-interns", async (req, res) => {
    try {
        const interns = await Intern.find();
        res.send(interns);
    } catch(e) {
        res.send(e);
    }
})

app.post("/api/intern-process", async (req, res) => {
    try {
        let result = await Intern.updateOne({"ID": req.body.internID}, {$set: {"status": "applied"}})
        res.sendStatus(200)
    } catch(e) {
        res.send(e);
    }
})

app.post("/api/current-intern-status", async (req, res) => {
    try {
        let response = await Intern.find({"ID": req.body.internID})
        res.send(response)
    } catch(e) {
        res.send(e);
    }
})

app.post("/api/login-intern", async (req, res) => {
    try {
        await Intern.find({"ID": req.body.ID, "pwd": req.body.pwd})
        .then((interns) => {
            if(interns.length !== 0) {
                res.send({login: true})
            } else {
                res.send({login: false})
            }
        })
    } catch(e) {
        console.log(e)
        res.send({login: false})
    }
})

app.post("/api/register-intern", async (req, res) => {
    try {
        const intern = new Intern(req.body);
        let result = await intern.save();
        result = result.toObject();
        if (result) {
            res.send({register: true});
        } else {
            res.send({register: false})
        }
    } catch (e) {
        console.log(e)
        res.send({register: false});
    }
})