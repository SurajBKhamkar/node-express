var express = require("express");
var students = require("./routes/student")

var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/", (req, res)=>{
    console.log("Successful");
    res.send("You got it.");
});

app.use("/students", students);

app.listen(7500, ()=>{
    console.log("Server Started at 7500..");
})