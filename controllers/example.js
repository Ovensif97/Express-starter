var sequalize = require('../database/Mysql');

class Example {

    index(req, res) {

        res.send('nice');

    }

    async test_connection(req, res) {

        try {

            await sequalize.authenticate();
            console.log('Connection has been established successfully.');

        } catch (error) {

            console.error('Unable to connect to the database:', error);
        }
    }

}

module.exports = new Example