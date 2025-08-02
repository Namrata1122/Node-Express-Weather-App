const express = require('express')
const hbs = require('hbs')
const path = require('path')

const app = express();
const weatherData = require("../utils/weatherData");

const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hello This is my first Express app");
})

app.get("/weather",(req,res)=>{
    if(!req.query.address){
        return res.send("Address is required.")
    }
    weatherData(req.query.address,(error,result)=>{
        if(error){
            return res.send(error);
        }
        res.send(result);
    })
})

app.listen(port,()=>{
    console.log(`The server is listening on port ${port}`);
})
