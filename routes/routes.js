/* All routing file is containing in here
separate by default middleware by expresss system
Default middleware : 
    app.use();
*/

// Declare library
var express = require('express');
var router = express.Router();

// Declare Controller & Middleware
let exampleController = require('../controllers/example');
let exampleMiddleware = require('../middleware/example');


router.get('/', function(req, res, next) {
    res.send('Index page');
});

// Example : page example with middleware and get request type
router.use('/example', exampleMiddleware.AuthExample);
router.get('/example/', (req, res, next) => { res.send('TEST') });
router.get('/example/hello', exampleController.index);


module.exports = router;