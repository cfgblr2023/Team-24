const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const videoSchema = new mongoose.Schema({
    url: String,
    desc: String,
    name: String,
});

module.exports = Video = mongoose.model('videos', videoSchema);