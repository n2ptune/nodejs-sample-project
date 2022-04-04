const express = require('express')
const app = express()
const mysql = require('mysql2')

const conn = mysql.createConnection({
	host: '10.131.0.89',
	port: 3306,
	user: 'root',
	database: 'khlee',
	password: 'growth2014!'
})

app.get('/', (req, res) => {
	console.log(conn)
	res.send('Hello World rebuild')
})

app.listen(8080, '0.0.0.0', () => {
	console.log(123)
})
