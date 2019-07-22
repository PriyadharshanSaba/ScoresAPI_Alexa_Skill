var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
require('dotenv').config()
const { Pool, Client } = require('pg')



//var data = [{name:'ravil'},{name:'faiz'}];

var no_players = 0;

module.exports = function(app){

    app.get('/players', function(req, res){
        //res.render('players');
         res.sendfile('./templates/index.html');
    });

    
    app.post('/players', urlencodedParser, function(req, res){

        const connectionString = process.env.DATABASE_URL;
        init_score=0;
        const text = 'INSERT INTO points(pid,name, point) VALUES($1, $2, $3)'
        const values = [5,req.body.name,init_score]

        const client = new Client({
        connectionString: connectionString,
        ssl: true
        })

        client.connect();

        console.log("\n\n"+JSON.stringify(req.body));
        /*
        client.query(text, values, (err, res) => {
        console.log(err, res)
        client.end()
        });
        */
       
        //data.push(req.body);
        //res.json('data');
        res.sendfile('./templates/index.html');
    });
}