/**
 * Feedback.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {


	schema: true,


  	attributes: {

  		description: {
  			type: 'string'
  		},

  		communication: {
  			type: 'string'
  		},

  		expression: {
  			type: 'string'
  		},

  		availability: {
  			type: 'string'
  		},

  		respect: {
  			type: 'string'
  		},

  		stimulation: {
  			type: 'string'
  		},

  		facilitation: {
  			type: 'string'
  		},

  		enthusiasm: {
			type: 'string'
  		},

  		encouragemnt: {
			type: 'string'
  		},

  		overall: {
			type: 'string'
  		},

  		toJSON: function() {
	  		var obj = this.toObject();
	  		delete obj._csrf;
	  		return obj;
	  	}
 	}
};

