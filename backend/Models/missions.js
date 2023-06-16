const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const missionSchema = new mongoose.Schema({
    missionID: String,
    name: String,
    status: String,
    type: String,
    vacancy: Number
});

module.exports = Mission = mongoose.model('missions', missionSchema);