const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const internSchema = new mongoose.Schema({
    ID: String,
    name: String,
    email: String,
    contact: String,
});

module.exports = Intern = mongoose.model('interns', internSchema);