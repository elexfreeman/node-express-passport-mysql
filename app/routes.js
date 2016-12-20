// app/routes.js
module.exports = function(app, passport) {

	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
/*	app.get('/', function(req, res) {
		res.render('index.ejs'); // load the index.ejs file
	});*/
	// =====================================
	// LOGIN ===============================
	// =====================================
	// show the login form
	app.get('/login1', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});

	// process the login form
	app.post('/a_login', passport.authenticate('local-login', {
            failureFlash : true // allow flash messages
		}),
        function(err,req, res) {
			if(err){
				res.send( {status:'0',error:err});
			}
			else{
				res.send( {status:'1'});
				if (req.body.remember) {
					req.session.cookie.maxAge = 1000 * 60 * 3;
				} else {
					req.session.cookie.expires = false;
				}
			}

       // res.redirect('/');
    });

	app.get('/a_is_login', function(req, res) {
		res.send( {status:req.isAuthenticated()});
	});


	// =====================================
	// SIGNUP ==============================
	// =====================================
	// show the signup form
	app.get('/signup', function(req, res) {
		// render the page and pass in any flash data if it exists
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});

	// process the signup form
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// =====================================
	// PROFILE SECTION =========================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user : req.user // get the user out of session and pass to template
		});
	});

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	app.get('/*', function(req, res){
		console.log('All');
		res
			.status( 200 )
			.set( { 'content-type': 'text/html; charset=utf-8' } )
			.sendfile('public/index.html' );
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
