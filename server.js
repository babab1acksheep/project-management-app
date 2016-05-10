// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================
	
// config files
var db = require('./config/db');
var DB = mongoose.connect(db.url);
var Schema = mongoose.Schema;
var UserSchema = new Schema(db.userSchema);
var User = mongoose.model('Employee',UserSchema);
var port = process.env.PORT || 8080; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.post("/nerds/user/add",function(req,res){	
	var user = new User();	
	var reqBody = req.body;	
	user.firstName=reqBody.firstName;
	user.lastName=reqBody.lastName;	
	user.email=reqBody.email;
	user.employeeId=reqBody.employeeId;
	user.designation=reqBody.designation;	
	console.log(user);
	console.log("Adding new user");	
	user.save(function(err, user_Saved){
    	if(err){
        	throw err;
        	console.log(err);
    	}
    	else{
        	console.log('New employee saved!!');
    	}
	});
})
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user


exports = module.exports = app; 						// expose app