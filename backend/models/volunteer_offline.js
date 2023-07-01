const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const volunteerOfflineSchema = new mongoose.Schema({
    name: String,
    desc: String,
    email: String,
    contact: String,
    location: String,
    date: String,
    slot: String,
    course: String
});

module.exports = OfflineClass = mongoose.model('offlineClasses', volunteerOfflineSchema);