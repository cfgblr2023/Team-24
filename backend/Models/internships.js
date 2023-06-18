const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const internshipSchema = new mongoose.Schema({
    ID: String,
    status: String,
    internID: String,
    certificateURL: String,
    missionID: String
});

module.exports = Internship = mongoose.model('internships', internshipSchema);