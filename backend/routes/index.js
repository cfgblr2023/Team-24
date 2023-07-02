var express = require('express');
var cors = require("cors");
var router = express.Router();
var User = require('../models/user');
// const { ObjectId } = require('mongodb');
var ObjectId = require('mongodb').ObjectID;

router.use(cors());

router.get('/', function (req, res, next) {
	return res.render('index.ejs');
});


router.post('/', function (req, res, next) {
	console.log(req.body);
	var personInfo = req.body;


	if (!personInfo.email || !personInfo.contact || !personInfo.username || !personInfo.password || !personInfo.passwordConf || !personInfo.course) {
		res.send();
	} else {
		if (personInfo.password == personInfo.passwordConf) {

			User.findOne({ email: personInfo.email }, function (err, data) {
				if (!data) {
					var c;
					User.findOne({}, function (err, data) {

						if (data) {
							console.log("if");
							c = data.unique_id + 1;
						} else {
							c = 1;
						}

						var newPerson = new User({
							unique_id: c,
							email: personInfo.email,
							contact: personInfo.contact,
							username: personInfo.username,
							password: personInfo.password,
							passwordConf: personInfo.passwordConf,
							course: personInfo.course,
							registration: personInfo.registration
						});

						newPerson.save(function (err, Person) {
							if (err)
								console.log(err);
							else
								console.log('Success');
						});

					}).sort({ _id: -1 }).limit(1);
					res.send({ "Success": "You are registered,You can login now." });
				} else {
					res.send({ "Success": "Email is already used." });
				}

			});
		} else {
			res.send({ "Success": "password is not matched" });
		}
	}
});

router.get('/login', function (req, res, next) {
	return res.render('login.ejs');
});

router.post('/login', function (req, res, next) {
	//console.log(req.body);
	User.findOne({ email: req.body.email }, function (err, data) {
		if (data) {

			if (data.password == req.body.password) {
				//console.log("Done Login");
				req.session.userId = data.unique_id;
				//console.log(req.session.userId);
				res.send({ "Success": "Success!" });

			} else {
				res.send({ "Success": "Wrong password!" });
			}
		} else {
			res.send({ "Success": "This Email Is not registered!" });
		}
	});
});

router.get('/profile', function (req, res, next) {
	console.log("profile");
	User.findOne({ unique_id: req.session.userId }, function (err, data) {
		console.log("data");
		console.log(data);
		if (!data) {
			res.redirect('/');
		} else {
			//console.log("found");
			return res.render('data.ejs', { "name": data.username, "email": data.email, "registration": data.registration });
		}
	});
});

router.get('/logout', function (req, res, next) {
	console.log("logout")
	if (req.session) {
		// delete session object
		req.session.destroy(function (err) {
			if (err) {
				return next(err);
			} else {
				return res.redirect('/');
			}
		});
	}
});

router.get('/forgetpass', function (req, res, next) {
	res.render("forget.ejs");
});

router.post('/forgetpass', function (req, res, next) {
	//console.log('req.body');
	//console.log(req.body);
	User.findOne({ email: req.body.email }, function (err, data) {
		console.log(data);
		if (!data) {
			res.send({ "Success": "This Email Is not regestered!" });
		} else {
			// res.send({"Success":"Success!"});
			if (req.body.password == req.body.passwordConf) {
				data.password = req.body.password;
				data.passwordConf = req.body.passwordConf;

				data.save(function (err, Person) {
					if (err)
						console.log(err);
					else
						console.log('Success');
					res.send({ "Success": "Password changed!" });
				});
			} else {
				res.send({ "Success": "Password does not matched! Both Password should be same." });
			}
		}
	});

});


router.get('/users', async function (req, res, next) {
	await User.find({}, function (err, users) {
		if (err) {
			console.log(err);
			return res.status(500).send({ "Error": "Something went wrong." });
		}

		res.status(200).send(users);
	});
});

router.post('/:id', function (req, res, next) {
	var id = req.params.id;
	var updates = req.body;
	console.log(id, typeof (id))
	console.log("api was called")
	// User.findOne(find(id)), (err, obj) => {
	// 	console.log("error:", err);
	// 	console.log("object", obj);
	// })
	let objectId = new ObjectId(id.trim());
	console.log(objectId);
	User.findById(ObjectId(id.trim()), function (err, obj) {
		console.log(err);
		console.log(obj)
	});
	User.findByIdAndUpdate(id, updates, { new: true }, function (err, user) {
		if (err) {
			console.log(err)
			res.send({ "Error": "An error occurred while updating the user." });
		} else {
			res.send(user);
		}
	});
});

// ...


module.exports = router;