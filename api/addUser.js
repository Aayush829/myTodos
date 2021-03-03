var db = require('../mongodb');
const bcrypt = require('bcrypt');

addUser = (req, res, next) => {

	contactRes = {
		email: req.body.email,
		password: req.body.password
	}


	db.Accounts.findOne({ email: contactRes.email })
		.then(function (response) {
			if (!response) {
				var contact = new db.Accounts({
					"password": contactRes.password,
					"email": contactRes.email
				});
				const saltRounds = 10;
				const salt = bcrypt.genSaltSync(saltRounds);
				const hash = bcrypt.hashSync(contactRes.password, salt);
				console.log("hash", salt, hash);
				delete contact.password;
				contact.password = hash;


				contact.save()
					.then(function (response) {
						console.log("signup response", response);
						console.log(response);
						res.send({ 'status': 'added successfully' })
					})
					.catch(function (e) {
						res.send({ 'status': 'failure', Error: e });
					});
			}
			else {
				res.send({ 'status': 'contact already exist' })
			}
		})
		.catch(function (e) {
			res.send({ 'status': e })
		})
};

module.exports = {
	addUser
}