'use strict';

module.exports = function (server) {
    
    /**
    * Load and display location.
    */
    server.get('/location', function (req, res) {
        var model = new {
            
        };

        res.render('location', model);
    });

};
