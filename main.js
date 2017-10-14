require('dotenv').config();
var https = require('https');

var dash_button = require('node-dash-button'),
    dash = dash_button(process.env.MAC_ADDRESS, null, null, 'all'), //REPLACE WITH YOUR ADDRESS
    exec = require('child_process').exec;

var URL = process.env.URL;
URL = URL.replace('https://','');
URL = URL.replace('http://','');

var options = {
    host : process.env.URL,
    port: process.env.PORT,
    method : process.env.TYPE
};

dash.on('detected', function() {
    var req = https.request(options, function(res) {
        console.log("Request sent and received: ", res.statusCode);
    });
     
    req.end();
    console.log('Button pushed!');
});

