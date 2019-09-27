require('./src/db/index');
const express = require('express');
const bodyParser = require('body-parser');
var router = require('./src/routes')
var app = express();
app.use(bodyParser.json());
app.listen(3000, (error) => {
    if (error) {
        console.log('error', error)
    }
    console.log('Database successfully connected ' + 3000)
});


// This is our route middleware
app.use('/api/v1', router);
