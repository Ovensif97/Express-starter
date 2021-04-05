class Helpers {

    // Is empty object
    isEmpty(obj) {
        if (Object.keys(obj).length === 0) {
            return true;
        } else {
            return false;
        }
    }


}

module.exports = new Helpers