const express = require('express')

const app = express()

app.get("/test",(req, res)=>{
    //res.json("Hello this is the test api");
    res.json({requestBody: req.headers.metadata})
});

const port =8000

app.listen(port, ()=>{
    console.log("A node js Api listening on port ")
});