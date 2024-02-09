require('dotenv').config();
let express = require('express');
let app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function(req, res){
    // let caseN = process.env.MESSAGE_STYLE;
    // if(process.env.MESSAGE_STYLE==='uppercase'){
    //     res.json({
    //     "message": "HELLO JSON"
    //   })
    //   } else {
    //       res.json({
    //     "message": "Hello json"
    //   })
    //     };
        var response = {
            "message": "Hello json"
          };
          
          if(process.env.MESSAGE_STYLE==='uppercase'){
            //Override message attribute value based on condition
            response.message = response.message.toUpperCase();  
          }
          
          return res.json(response);
});




































 module.exports = app;
