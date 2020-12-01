const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello World!!!")
})

app.listen(process.env.PORT,()=>{
    console.log("Server running on port 8080");
})

app.post("/",(req,res)=>{
    res.send("POST called");
})

app.get("/product",(req,res)=>{
    res.send("POST called");
})
app.post("/",(req,res)=>{
    res.send("POST another");
})