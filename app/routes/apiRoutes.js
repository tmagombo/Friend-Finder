var data = require('../data/friends')


module.exports = function(app) {

    app.post("/api/friends", function(req, res) {
        data.push(req.body);
        res.json(true);
    });
    

};