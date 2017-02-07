/*
 * API registry for
 * GET POST PUT DELETE
 */

// 3rd party modules
var fs = require('fs');
var express = require('express');
var bodyparser = require('body-parser');

// Custom modules
var certapi = require('./api/certificate.js');


/**
 * Initializes API paths.
 */
var initAPI = function(app) {

    // Always use JSON Body parsing for API endpoints.
    app.use(bodyparser.json());


    /*
     * PUT requests
     */

    app.put('/certificates/request/', function(req, res) {
        certapi.certificate.request(req, res);
    });

    app.put('/certificates/revoke/', function(req, res) {
        certapi.certificate.revoke(req, res);
    });


    /*
     * GET requests
     */

    app.get('/certificates/:serial/', function(req, res) {
        certapi.certificate.get(req, res);
    });


    app.get('/certificates/:state/', function(req, res) {
        certapi.certificates.list(req, res);
    });

};



// Export initAPI() function
module.exports = {
    initAPI: initAPI
}
