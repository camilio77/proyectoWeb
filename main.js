const express = require('express');
const path = require('path');
const app = express();

// Serve all static files from the root directory
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'storage')));
app.use(express.static(path.join(__dirname, 'views')));

// Serve the main index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve specific HTML files
app.get('/views/:page', (req, res) => {
    const page = req.params.page;
    res.sendFile(path.join(__dirname, `views/${page}.html`));
});

// Define port and host from environment variables or default
let config = { port: process.env.PORT || 3000, host: process.env.HOST || 'localhost' };

app.listen(config.port, () => {
    console.log(`Running at http://${config.host}:${config.port}`);
});
