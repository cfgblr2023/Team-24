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

export const Intern = mongoose.model('interns', internSchema);