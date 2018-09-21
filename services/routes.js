
module.exports = function(app) {

  // Insert routes below
  app.use('/status', require('./status'));
  app.use('/version', require('./version'));

};
