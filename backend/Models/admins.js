const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const adminSchema = new mongoose.Schema({
    ID: String,
    name: String,
    email: String,
    contact: String,
});

export const Admin = mongoose.model('admins', adminSchema);