var express = require('express');
var router = express.Router();

// include controller
let example = require('../controllers/example');

/* GET users listing. */
router.get('/', example.index)
router.get('/test_connection', example.test_connection)

module.exports = router;