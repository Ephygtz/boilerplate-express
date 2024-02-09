require('dotenv').config();
let express = require('express');
let app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get(’/json’, (req, res) => {
    let message = ‘Hello json’;
    (process.env.MESSAGE_STYLE == ‘uppercase’) ? message=message.toUpperCase() : message=message; res.json({‘message’: message});
    });

// app.get("/json", function(req, res){
//     // let caseN = process.env.MESSAGE_STYLE;
//     if(process.env.MESSAGE_STYLE === "uppercase"){
//         res.json( {"message": "Hello json".toUpperCase()});
//     } else {
//         res.json( {"message": "Hello json"});
//     }
// });




































 module.exports = app;
