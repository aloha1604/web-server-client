//declare model
const user = require('../models/user.model');

//controller module
exports.userDangky = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    

}




//module test
exports.test = (req, res) => {
    res.send(process.env.VIETNAM);
}