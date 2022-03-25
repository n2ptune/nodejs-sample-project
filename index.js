const express = require('express')
const app = express()
const mysql = require('mysql2')

// const conn = mysql.createConnection({
// 	host: '172.30.179.19',
// 	port: 3306,
// 	user: 'root',
// 	database: 'khlee',
// 	password: ''
// })

app.get('/', (req, res) => {
	res.send('Hello World')
})

app.listen(8080, () => {
	console.log(123)
})
