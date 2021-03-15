class ExampleMiddleware {


    AuthExample(req, res, next) {

        next();
    }


};

module.exports = new ExampleMiddleware;