require('dotenv').config();
let express = require('express');
let app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function(req, res){
    // let caseN = process.env.MESSAGE_STYLE;
    if(process.env.MESSAGE_STYLE !== "uppercase"){
        res.json( {"message": "Hello json"});
    } else {
        res.json( {"message": "Hello json".toUpperCase()});
    }
});




































 module.exports = app;
