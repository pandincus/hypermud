'use strict';


module.exports = function (server) {

    server.get('/', function (req, res) {
        var model = { name: 'hypermud' };
        
        res.render('index', model);
        
    });

};
