var express = require("express");
var routerStudent = express();

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: "manager",
    database: "java"
});

connection.connect();

routerStudent.use(express.json());

routerStudent.get("/", (request, response)=>{
    var queryText = " select * from studentinfo";
    connection.query(queryText, (error, data)=>{
        if (error==null) {
            response.send(JSON.stringify(data));
        } else {
            response.send(error);
        }
    })
})

module.exports = routerStudent;