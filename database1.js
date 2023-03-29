import mysql from 'mysql2'

var mysql = require('mysql')
const pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database: 'test1'

}).promise()

const result =await pool.query("show databases")
console.log(database)