var express=require("express")
var bodyParser=require("body-parser")
var mongoose=require("mongoose")

const app=express()

app.get("/",(req,res) => {
    res.send("Server connection is successful")
}).listen(3000);

console.log("Listening on port 3000") 

