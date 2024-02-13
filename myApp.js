require('dotenv').config();
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

//mount bodyParser
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

app.post((req, res, next) => {

});

app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

//chaining middleware func
app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({"time" : req.time});
});

//route params
app.get("/:word/echo", (req, res, next) =>{
    res.json({echo : req.params.word});
    next();
});

//query params
app.get("/name", (req, res) => {
    let {first: firstname, last: lastname } = req.query;

    res.json({name : `${firstname} ${lastname}`});
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get('/json', (req, res) => {
    let message = 'Hello json';

    (process.env.MESSAGE_STYLE == 'uppercase') ? 
        message=message.toUpperCase() : message=message; 
        res.json({'message': message});
});





































 module.exports = app;
