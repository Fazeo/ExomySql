var express = require(‘express’);
var bodyParser = require(‘body-parser’);
var mysql = require(‘mysql’);

var connection = function () {
   return mysql.createConnection({
      host     : ‘localhost’,
      user     : ‘root’,
      password : ‘root’,
      database : ‘parlements’,
      socketPath : ‘/Applications/MAMP/tmp/mysql/mysql.sock’
    });
}

var app = express();

// we add to express the body-parser add-on allowing us to read req.body
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post('/api/students', function (req, res) {
    var q = "INSERT INTO students (firstname, lastname, age, class, gender) VALUES ('" + req.body.firstname + "', '" + req.body.lastname + "', " + req.body.age + ", '" + req.body.class + "', '" + req.body.gender + "');";
    console.log(q);
    var co = connection();
    co.connect(); //init connection
    co.query(q, function (error, results, fields) {
        if (error) return console.log(error);
        res.send(req.body);
    }); //excecution of request
    co.end(); //close connection
});

app.post('/api/notes', function (req, res) {
    var q = "INSERT INTO notes (students, mark) VALUES (" + req.body.student + ", " + req.body.mark + ");";
    console.log(q);
    var co = connection();
    co.connect(); //init connection
    co.query(q, function (error, results, fields) {
        if (error) return console.log(error);
        res.send(req.body);
    }); //excecution of request
    co.end(); //close connection
});

app.get('/api/students', function (req, res) {
    var q = 'select * from students',
        co = connection();
    co.connect();
    co.query(q, function (error, results, fields) {
        if (error) return console.log(error);
        res.send(results);
    }); //excecution of request
    co.end(); //close connection
});

app.get('/api/notes', function (req, res) {
    var q = 'select * from notes',
        co = connection();
    co.connect();
    co.query(q, function (error, results, fields) {
        if (error) return console.log(error);
        res.send(results);
    }); //excecution of request
    co.end(); //close connection
});

app.listen(1337);