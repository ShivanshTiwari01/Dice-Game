const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.use(express.static("frontend"));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/frontend/index.html"))
});

app.listen(port, function(err){
    if(err){
        console.log("Error", err);
    }
    console.log("Server is running on ", port);
});

