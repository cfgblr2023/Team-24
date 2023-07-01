const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const videoSchema = new mongoose.Schema({
    url: String,

});

module.exports = Video = mongoose.model('videos', videoSchema);