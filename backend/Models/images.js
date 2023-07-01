const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const imageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});

module.exports = Image = mongoose.model('images', imageSchema);