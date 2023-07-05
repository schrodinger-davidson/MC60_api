const express = require('express')

const app = express()

app.get("/",(req, res)=>{
    res.send("Hello this is the test api");
});

const port =8000

app.listen(port, ()=>{
    console.log("A node js Api listening on port ")
});