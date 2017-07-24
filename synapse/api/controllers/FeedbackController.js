/**
 * FeedbackController
 *
 * @description :: Server-side logic for managing feedbacks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	'dashboard': function(req, res) {

		res.locals.flash = _.clone(req.session.flash);
		res.view('feedback/dashboard');
		req.session.flash = {};
	},	

	create: function(req, res, next) {
		Feedback.create(req.params.all(), function feedbackCreated (err, feedback) {

			console.log(req.params.all());

			// Case: Error
			if(err) {

				req.session.flash = {
					err: err
				}

				return res.redirect('feedback/dashboard');
			}

			// Case: Success
			return res.redirect('feedback');

			//res.json(feedback);
			req.session.flash = {};
		});
	},

	// Display Feedbacks
	index: function(req, res, next) {

		Feedback.find(function foundFeedback (err, feedbacks) {

			if (err)
				return next(err);

			console.log("Debugging View");
			console.log(feedbacks[0]);

			res.view({
				feedbacks: feedbacks
			});
		});
	}


};

