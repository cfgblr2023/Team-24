var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema({

	unique_id: Number,
	email: String,
	contact: String,
	username: String,
	password: String,
	passwordConf: String,
	course: {
		type: String,
		enum: ["course1", "course2", "course3"]
	}
}),
	User = mongoose.model('User', userSchema);

module.exports = User;