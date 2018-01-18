const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const adminController = require('./admin');
const apiController = require('./public-api');
const cors = require('cors');

const app = express();

// Set up the port number
app.set('port', (process.env.PORT || 3000));
var env = process.env.NODE_ENV || 'development';

// Sett server's settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



// Set the /admin routes to use the admin controller file
app.use('/admin', adminController);
app.use('/api', apiController);

// Serve the dist directory statically (i.e. serve the angular app)
app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use('/ckeditor', express.static(path.join(__dirname, 'ckeditor')));
app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
})


// start  the server on the proper port
app.listen(app.get('port'), (err) => {
    if(err) {
        return console.log('An error occurred', err);
    }

    console.log(`Server is listening on ${app.get('port')}`)
});