
const express = require('express');
const bodyParser = require("body-parser");

let weight, height, bmi;

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
})


app.post("/", function(req,res){
    height = parseFloat(req.body.height);
    weight = parseFloat(req.body.weight);
    bmi = weight / (height *height);
    res.send("The bmi number is: " + bmi);
})

app.listen(3000, function(){
    console.log("App is listening on port 3000");
});


