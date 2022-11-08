const express = require('express');
const IP = require('ip');
const app = express();
app.set('trust proxy', true)
const port = 3500;

app.get('/', (req, res)=>{
    res.redirect("/api/whoami")
})
app.get('/api/whoami', (req, res)=>{
    res.status(200).json({
        ipaddress: IP.address(),
        language: req.get("accept-language"),
        software : req.headers["user-agent"]
    }) 
});


app.listen(port, ()=>{
    console.log("Server is starting...");
})