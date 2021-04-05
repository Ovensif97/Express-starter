var express = require('express');
var router = express.Router();

// include controller
let Auth = require('../controllers/Auth');

/* GET users listing. */
router.post('/register', Auth.register)

module.exports = router;