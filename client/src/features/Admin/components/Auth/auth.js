const { faThumbsDown } = require("@fortawesome/free-solid-svg-icons");

class Auth {
    constructor() {
        this.authenticated = false;
    }

    login(cb) {
        this.authenticated = true;
        cb();
    }

    logout(cb) {
        this.authenticated = false;
        cb();
    }

    idAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();