var db = require('../mongodb');
const bcrypt = require('bcrypt');

authenticate = (req, res, next) => {

	db.Accounts.findOne({
		email: req.body.email
	}, function (err, user) {

		if (err) throw err;

		if (!user) {
			res.json({ success: false, message: 'Authentication failed. User not found.' });
		} else if (user) {
			let result = bcrypt.compareSync(req.body.password, user.password);
			console.log("login user", user, req.body);
			console.log("result", result);
			// check if password matches
			if (!result) {
				res.json({ success: false, message: 'Authentication failed. Wrong password.' });
			} else {

				
				req.session.email = req.body.email;
				req.session.isLogged = true;
				console.log('inside auth', req.session.email);
				
				// return the information including token as JSON
				res.json({
					success: true,
					message: 'user logged in!',
					isLogged : req.session.isLogged
		
				});
			}

		}

	});
}

module.exports = {
	authenticate
}