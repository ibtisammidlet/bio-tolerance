
const Express = require('express'); // Import express

const app = require('express')();
const https = require('https');
const fs = require('fs');
app.get('/', (req, res) => {    res.send('Hello World');});
https.createServer({    key: fs.readFileSync('./ssl/biotunekey.pem'),    cert: fs.readFileSync('./ssl/cert.pem')}, app).listen(443);
