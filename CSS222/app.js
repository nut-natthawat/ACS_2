const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("Welcome to my first server!!");
});

app.get("/name/:firstname",function(req,res){
    res.type("text");
    res.send("Hello " + req.params.firstname);
});

app.get("/xxx/:path",function(req,res){
    if(req.params.path.startsWith("abc")){
        res.send("Correct path");
        console.log("Great user");
    }
    else{
        res.send("This is a bad request");
    }
});

app.listen(8000,function(){
    console.log("Server running at port 8000");
});