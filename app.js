const express = require('express');
const app = express(); // creates an express application
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/v1');
const datastore = require('./config/datastore');

import path from 'path';
app.use(express.static(path.join(__dirname, '/build')));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.use((req, res, next) => {
    datastore.conn(res, next);
});

//routes
app.use('/v1', routes);

app.get('/', (req, res) => {
    res.status(200).send('Welcome to starter API using NodeJs and MongoDB');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.listen(process.env.PORT || 8000, function(){
    console.log('Server is running at port : ' + 8000);
});