var sequalize = require('../database/Mysql');

class Example {

    index(req, res) {

        res.send('NONONO');

    }

}

module.exports = new Example