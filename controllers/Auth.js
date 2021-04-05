// Load another class function
const helpers = require('../helpers/Helper');

class Auth {

    async register(req, res) {

        let bodyPost = JSON.parse(JSON.stringify(req.body));

        // Check if body parameter cannot be empty!
        if (!bodyPost.hasOwnProperty('email') || !bodyPost.hasOwnProperty('password') || !bodyPost.hasOwnProperty('first_name') || !bodyPost.hasOwnProperty('last_name')) {
            res.status(404).json({
                "status": false,
                "message": "Some of property cannot be empty!"
            });
        }

    }

}


module.exports = new Auth