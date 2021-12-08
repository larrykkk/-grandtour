const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'larry',
  password: '1234',
  port: 5432,
})
pool.query('SELECT * FROM public.member', (err, res) => {
  console.log(err, res)
  pool.end()
})
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'larry',
  password: '1234',
  port: 5432,
})
client.connect()
client.query('SELECT * FROM public.member', (err, res) => {
  console.log(err, res)
  client.end()
})