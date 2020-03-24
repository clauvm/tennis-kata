const express = require('express');
const debug = require('debug')('server:server');
const http = require('http');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');


const app = express(); // Init express

app.use(express.static(path.join(__dirname, 'public'))); // Specify the folder where express will serve the static files
app.use(cors()); // For the moment, request that are not from the same origin will be accepted

/**
 * Main route for application
 */
app.get('/', (req, res) => {
    res.send({
        message: "Welcome to tennis kata API"
    })
});

/**
 * Normalize a port into a number, string, or false.
 */
const normalizePort = (val) => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
};


const port = normalizePort(process.env.PORT || '8000');
const ip = process.env.IP || '0.0.0.0';

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);


