'use strict';

var IndexModel = require('../models/index');
module.exports = function (server) {
    var model = new IndexModel();
    
    server.get('/', function (req, res) {
        model.name = 'Dan and Jason';
        
        res.render('index', model);
        
    });

};
