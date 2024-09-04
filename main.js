const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'storage')));

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/views/camisetas", (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/camisetas.html'));
})

app.get("/views/abrigos", (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/abrigos.html'));
})

app.get("/views/todos", (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/todos.html'));
})

app.get("/views/pantalones", (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/pantalones.html'));
})

let config = {port: process.env.EXPRESS_PORT, host: process.env.EXPRESS_HOST}

app.listen(config, ()=>{
    console.log(`Running at http://${config.host}:${config.port}`);
})