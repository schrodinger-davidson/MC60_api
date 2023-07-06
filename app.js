const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json()) // for getting body from post api
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.get("/test",(req, res)=>{
    //res.json("Hello this is the test api");
    res.json({requestBody: req.headers.metadata})
});

app.post("/test-post",(req, res)=>{

    let bo = req.body
    let data = "This is the quick brown fox dummy data"
    res.json({"request key":bo , "respose data":data} )
});

const port = 8000

app.listen(port, ()=>{
    console.log("A node js Api listening on port : ",port)
});