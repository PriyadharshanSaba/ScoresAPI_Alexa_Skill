var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: true});
require('dotenv').config()
const { Pool, Client } = require('pg');


const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
connectionString: connectionString,
ssl: true
})


module.exports = function(app){
    app.get('/players', function(req, res)
    {
        //res.render('players');
         res.sendfile('./templates/index.html');
    });
    app.post('/game', urlencodedParser, function(req, res)
    {
        x = JSON.parse(req.body.done);
        //no_players.push(x);
        init_score = 0;
        for(var i=0; i<x.length; i++)
        {
            console.log(x[i].pts);
            try{
                const text = 'INSERT INTO points(id,name, points) VALUES($1, $2, $3)'
                const values = [i+1,x[i].pname,init_score];
                
                pool.query(text, values, (err, res) => {
                    console.log(err, res)
                    });
            }
            catch{
                //omit
            }
        }
        pool.end()
        //res.sendfile('./templates/index.html');
        res.render('players',{data:x})
    });

    app.get('/game', function(req, res){
         res.render('players',{data:no_players});
    });
}


