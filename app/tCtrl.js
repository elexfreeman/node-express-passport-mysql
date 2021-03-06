// app/routes.js
var db = require('../db');

module.exports = function(app, passport) {

	// =====================================
	// PROFILE SECTION =========================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/tCtrl', isLoggedIn, function(req, res) {
        res.send( req.user);
        /*db.query("SELECT * FROM users WHERE id = ? ",[id], function(err, rows){
            res.send(err, rows);
        });*/

	});


};

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
