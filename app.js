var express = require('express');
var app = express();
require('dotenv').config()
var appController = require('./controllers/appController');


//template engine
app.set('view engine','ejs');

//static dir
app.use(express.static('./static'));

//listen to port
app.listen(3000, function(){
    console.log("Listening on port 3000...");
});

//controllers of app
appController(app);



