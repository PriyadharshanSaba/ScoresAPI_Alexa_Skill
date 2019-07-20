require('dotenv').config()
const { Pool, Client } = require('pg')
const connectionString = process.env.DATABASE_URL;

const text = 'INSERT INTO points(pid, name, point) VALUES($1, $2, $3)'
const values = [4,'KKS',0]

const client = new Client({
  connectionString: connectionString,
  ssl: true
})
client.connect()
client.query(text, values, (err, res) => {
  console.log(err, res)
  client.end()
})

