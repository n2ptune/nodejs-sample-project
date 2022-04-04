const express = require('express')
const app = express()
const mysql = require('mysql2')

const conn = mysql.createConnection({
 	host: process.env.DB_URL,
 	port: process.env.DB_PORT,
 	user: process.env.DB_USER,
 	database: process.env.DB_DATABASE,
	password: process.env.DB_PW
})

app.get('/', (req, res) => {
	console.log(conn)
	res.send('Hello World rebuild')
})

app.listen(8080, '0.0.0.0', () => {
	console.log(process.env)
})
