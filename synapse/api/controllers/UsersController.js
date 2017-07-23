/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	'signup': function(req, res) {
		res.locals.flash = _.clone(req.session.flash);
		res.view();
		req.session.flash = {};
	},


	create: function(req, res, next) {
		Users.create(req.params.all(), function userCreated (err, user) {

			// Case: Error
			if(err) {

				req.session.flash = {
					err: err
				}

				return res.redirect('users/signup');
			}

			// Case: Success
			return res.redirect('users');
			//res.json(user);
			req.session.flash = {};
		});
	},


	// Display Users
	index: function(req, res, next) {

		Users.find(function foundUsers (err, users) {

			if (err)
				return next(err);

			res.view({
				users: users
			});
		});
	}
};

