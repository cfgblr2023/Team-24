const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const internSchema = new mongoose.Schema({
    ID: String,
    name: String,
    program: String,
    email: String,
    contact: String,
    startDate: Date,
    endDate: Date,
});

module.exports = Intern = mongoose.model('interns', internSchema);