/**
 * FeedbackController
 *
 * @description :: Server-side logic for managing feedbacks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	'index': function(req, res) {

		res.view('feedback/index');
	}	
};

