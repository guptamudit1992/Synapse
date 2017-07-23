/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	'login': function(req, res) {

		var oldDateObj = new Date();
		var newDateObj = new Date(oldDateObj.getTime() + 60000);
		req.session.cookie.expires = newDateObj;
		req.session.authenticated = true;


		res.locals.flash = _.clone(req.session.flash);
		res.view('session/login');
		req.session.flash = {};
	},

	'create': function(req, res, next) {

		// Check for email and password in params sent via the form, if none
		// redirect the browser back to the sign-in form.
		if (!req.param('email') || !req.param('password')) {
			// return next({err: ["Password doesn't match password confirmation."]});

			var usernamePasswordRequiredError = [{
				name: 'usernamePasswordRequired',
				message: 'You must enter both a username and password.'
			}]

			// Remember that err is the object being passed down (a.k.a. flash.err), whose value is another object with
			// the key of usernamePasswordRequiredError
			req.session.flash = {
				err: usernamePasswordRequiredError
			}

			res.redirect('/session/login');
			return;
		}

		// Try to find the user by there email address. 
		// findOneByEmail() is a dynamic finder in that it searches the model by a particular attribute.
		// User.findOneByEmail(req.param('email')).done(function(err, user) {
		Users.findOneByEmail(req.param('email'), function foundUser(err, user) {
			if (err) return next(err);

			// If no user is found...
			if (!user) {
				var noAccountError = [{
					name: 'noAccount',
					message: 'The email address ' + req.param('email') + ' not found.'
				}]
				req.session.flash = {
					err: noAccountError
				}
				res.redirect('/session/login');
				return;
			}

			// Compare password from the form params to the encrypted password of the user found.
			if(req.param('password') === user.password && req.param('access') === user.access) {
				if (err) 
					return res.redirect('/session/login');

				// Log user in
				req.session.authenticated = true;
				req.session.User = user;

				// Change status to online
				user.online = true;
				user.save(function(err, user) {
					if (err) 
						return res.redirect('/session/login');

					// Inform other sockets (e.g. connected sockets that are subscribed) that this user is now logged in
					/*Users.publishUpdate(user.id, {
						loggedIn: true,
						id: user.id,
						name: user.name,
						action: ' has logged in.'
					});*/

					// If the user is also an admin redirect to the user list (e.g. /views/user/index.ejs)
					// This is used in conjunction with config/policies.js file
					if (req.param('access') == "Admin") {
						res.redirect('/users');
						return;
					} else if (req.param('access') == "Student") {
						res.redirect('/feedback/index');
						return;
					} else {
						res.redirect('/dashboard/index');
						return;
					}

					//Redirect to their profile page (e.g. /views/user/show.ejs)
					//res.redirect('/users/show/' + user.id);
				});
			} else {

			var passwordIncorretdError = [{
				name: 'passwordIncorretdError',
				message: 'Your password is incorrect'
			}]

			// Remember that err is the object being passed down (a.k.a. flash.err), whose value is another object with
			// the key of passwordIncorretdError
			req.session.flash = {
				err: passwordIncorretdError
			}

				return res.redirect('/session/login');
			}
		});
	}
};

