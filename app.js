'use strict';
const request = require('request')
request('http://www.google.com', (error, reqponse, body) => {
    console.log(body);
});
