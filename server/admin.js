const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const path = require('path');
const moment = require('moment');
var models  = require(path.join(__dirname, "..", "models"));

// We are going to implement a JWT middleware that will ensure the validity of our token. We'll require each protected route to have a valid access_token sent in the Authorization header
const authCheck = jwt({
  secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://joerosenbecker.auth0.com/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: 'https://joerosenbecker.com',
    issuer: "https://joerosenbecker.auth0.com/api/v2/", // e.g., you.auth0.com
    algorithms: ['RS256']
});


router.get('/save', (req, res, error) => {
    console.log('attempting to save')
    models.BlogPost.create({
        postDate: new Date(),
        content: 'Test blog'
    });

    res.sendStatus(200);
});

// router.get('/login', (req, res) => {
//     res.send('Login Page');
// });

module.exports = router;