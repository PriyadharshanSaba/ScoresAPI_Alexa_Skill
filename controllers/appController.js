var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: true});
require('dotenv').config()
const { Pool, Client } = require('pg');


//var data = [{name:'ravil'},{name:'faiz'}];

var no_players = 0;

module.exports = function(app){

    app.get('/players', function(req, res){
        //res.render('players');
         res.sendfile('./templates/index.html');
    });

    
    app.post('/players', urlencodedParser, function(req, res){
        
        const connectionString = process.env.DATABASE_URL;

        const pool = new Pool({
        connectionString: connectionString,
        ssl: true
        })

        //client.connect();

        x = JSON.parse(req.body.done);
        

        init_score = 0;
        for(var i=0; i<x.length; i++)
        {
            console.log(x[i].pname);

            const text = 'INSERT INTO points(id,name, points) VALUES($1, $2, $3)'
            const values = [i+1,x[i].pname,init_score];

            pool.query(text, values, (err, res) => {
                console.log(err, res)
                });
        }

        pool.end()
        
        
       
        //data.push(req.body);
        //res.json('data');
        res.sendfile('./templates/index.html');
    });
}


