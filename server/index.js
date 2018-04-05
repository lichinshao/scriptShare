const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db/dbSchemas').mongoose;
const http = require('http');
const router = require('./middleware/router');

const app = express();
const server = http.Server(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, '../client/dist/')));

app.use(router);

var port = 3400;
server.listen(port, () => {console.log('Hi!, listening on 3400...')});



/*
google clint ID: 359676469159-mpv1ch806qqd696si02kjshcqmen4oa8.apps.googleusercontent.com

google client secret: 2CPFq3o4eeAAC9Aal4squWLi
*/