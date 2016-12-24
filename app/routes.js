/*подключаем модели*/
var users = require('../model/users');
/**
 * Created by elex on 23.12.2016.
 */
var ms_conn = require('../connect/mssql_conn_pool');

var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
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
/*	app.get('/login1', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});*/

	/*// process the login form
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
    });*/

	/*app.get('/a_is_login', function(req, res) {
		res.send( {status:req.isAuthenticated()});
	});*/

	app.get('/get_users', function(err, req, res) {

		var user_id = req.param('user_id');
		var p = function(err, con){

			r = new Request('select * from [DISP_WEB].[dbo].[users] where user_id = ' + user_id, function(err, rowcount, rows) {
				if (err) {
					console.log(err);
				}
				else {
					res(JSON.stringify(rows));
				}
			});

			r.on('row', function(columns) {
				//res(columns);
			});

			r.on('done', function(rowCount, more) {

			});
			con.execSql(r);
		}


		ms_conn.query(res, p);

	});

	/*app.post('/rest_login',
		passport.authenticate('local-login'),
		function( req, res) {

			// If this function gets called, authentication was successful.
			// `req.user` contains the authenticated user.
			res.send('/users/' + req.user.username);
		});*/



	// =====================================
	// SIGNUP ==============================
	// =====================================
	// show the signup form
/*	app.get('/signup', function(req, res) {
		// render the page and pass in any flash data if it exists
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});*/

	// process the signup form
	/*app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));*/

	// =====================================
	// PROFILE SECTION =========================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	/*app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user : req.user // get the user out of session and pass to template
		});
	});*/

	// =====================================
	// LOGOUT ==============================
	// =====================================
	/*app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});*/

	// =====================================
	// LOGOUT ==============================
	// =====================================


	/*Тесе*/




	/*app.get('/!*', function(req, res){
		console.log('All');
		res
			.status( 200 )
			.set( { 'content-type': 'text/html; charset=utf-8' } )
			.sendfile('public/index.html' );
	});*/




};

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
