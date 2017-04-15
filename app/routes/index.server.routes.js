module.exports = function(app) {
	const index = require('/Users/orenono/Desktop/MEANSecondProject/app/controllers/index.server.controller');
	app.get('/', index.render); 
};