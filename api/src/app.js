const express = require('express');
const morgan = require('morgan');
const mainRouter = require('./routes');

require('./db.js');
const cors = require('cors');
const app = express();
app.use(cors());
app.name = 'API';
app.use(express.json());
app.use(mainRouter);

/*app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));*/
// app.use(cookieParser());
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    console.log('Hola, estoy pasando por el middleware de app.js'); //? este lo puse yo para consolear Morgan
    next();
});




// Error catching endware.
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

module.exports = app;