const admin = require('../models/admin.model');
const userModel = require('../models/user.model');

const jwtHelper = require('../helpers/jwt.helper');

const debug = console.log.bind(console);

const bcrypt = require('bcrypt');
const saltRounds = 10;
const generator = require('generate-password');

const nodeMail = require('../helpers/nodeMail');



// Biến cục bộ trên server này sẽ lưu trữ tạm danh sách token


// Thời gian sống của token
const accessTokenLife = process.env.ACCESS_TOKEN_LIFE || "7h";

// Thời gian sống của refreshToken
const refreshTokenLife = process.env.REFRESH_TOKEN_LIFE || "3650d";


// Mã secretKey này phải được bảo mật tuyệt đối, các bạn có thể lưu vào biến môi trường hoặc file
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || "access-token-secret-example-123456789"
const accessTokenSecretAdmin = process.env.ACCESS_TOKEN_SECRET_ADMIN || "access-token-secret-example-987654321"



// Mã secretKey này phải được bảo mật tuyệt đối, các bạn có thể lưu vào biến môi trường hoặc file
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET_ADMIN || "refresh-token-secret-example-123456789"
const refreshTokenSecretAdmin = process.env.REFRESH_TOKEN_SECRET_ADMIN || "refresh-token-secret-example-987654321"



/**
 * controller login
 * @param {*} req 
 * @param {*} res 
 */
// dang ky user
let userDangky = async (req, res) => {
    let userData = {
        email: req.body.email,
        password: req.body.password
    }
    //kiem tra du lieu
    // console.log(userData)

    if (userData.email && userData.password) {

        try {
            var getEmail = function (email) {
                return new Promise((resolve, reject) => {
                    userModel.getEmail(email, (err, data) => {
                        if (err)
                            reject(err);
                        else {
                            resolve(data);
                        }

                    })
                })
            }
            const getEmailData = await getEmail(userData.email);


            if (getEmailData.length > 0 && getEmailData[0].email === userData.email) {
                return res.status(200).json({ error: 'Email đã tồn tại' });
            }

            const hash = bcrypt.hashSync(userData.password, saltRounds);
            var insertUser = function (mail, password) {
                return new Promise((resolve, reject) => {
                    userModel.insert(mail, password, (err, data) => {
                        if (err)
                            reject(err);
                        else {
                            resolve(data);
                        }

                    })
                })
            }

            const insertUserData = await insertUser(userData.email, hash);
            console.log(insertUserData)
            if (insertUserData.affectedRows > 0) {
                const option = nodeMail.createOption();
                const createTransportMail = nodeMail.createTransportMail(option);

                let from = 'webdoan20192019@gmail.com';// Địa chỉ email của người gửi
                let to = userData.email; // Địa chỉ email của người gửi
                let subject = 'Thư gửi để xác nhận tài khoản'; // Tiêu đề mail
                let text = "Nhấp vào link để xác nhận tài khoản, cảm ơn bạn đã tham gia sàn thương mại của chúng tôi !!!";// Nội dung mail dạng text
                let html = `<p>Nhấp vào link để xác nhận tài khoản, cảm ơn bạn đã tham gia sàn thương mại của chúng tôi !!!</p><a href="http://localhost:5000/apiUser/activeuser/${insertUserData.insertId}">Link</a>`; // Nội dung mail dạng html

                const createMail = nodeMail.createMail(from, to, subject, text, html);

                const sendMailer = nodeMail.sendMailer(createMail, createTransportMail);

                console.log('đã tới được mục mail');
                return res.status(200).json({ message: 'Đăng ký thành công xác nhận email để mở tài khoản' })
            } else {
                return res.status(500).json({ error: 'insert user thất bại' });
            }
        } catch (error) {
            return res.status(500).json(error);
        }


    } else {
        return res.status(403).send({
            message: 'không tìm thấy mail and password trong request',
        });
    }

}
let userResetPassword = async (req, res) => {
    const password = generator.generate({
        length: 10,
        numbers: true
    });

    let userData = {
        email: req.body.email,
        password: req.body.password ? req.body.password : password
    }
    //kiem tra du lieu
    console.log(userData)

    if (userData.email && userData.password) {

        try {
            var getEmail = function (email) {
                return new Promise((resolve, reject) => {
                    userModel.getEmail(email, (err, data) => {
                        if (err)
                            reject(err);
                        else {
                            resolve(data);
                        }

                    })
                })
            }
            const getEmailData = await getEmail(userData.email);

            console.log(getEmailData)
            if (getEmailData.length === 0) {
                return res.status(200).json({ error: 'Email không tồn tại!!' });
            }

            const hash = bcrypt.hashSync(userData.password, saltRounds);
            var resetPassword = function (mail, password) {
                return new Promise((resolve, reject) => {
                    userModel.userResetPassword(mail, password, (err, data) => {
                        if (err)
                            reject(err);
                        else {
                            resolve(data);
                        }

                    })
                })
            }

            const updatePasswordUserData = await resetPassword(userData.email, hash);
            console.log(updatePasswordUserData)
            if (updatePasswordUserData.affectedRows > 0) {
                const option = nodeMail.createOption();
                const createTransportMail = nodeMail.createTransportMail(option);

                let from = 'webdoan20192019@gmail.com';// Địa chỉ email của người gửi
                let to = userData.email; // Địa chỉ email của người gửi
                let subject = 'Thư gửi ResetPassword'; // Tiêu đề mail
                let text = "Nhấp vào link để xác nhận tài khoản, cảm ơn bạn đã tham gia sàn thương mại của chúng tôi !!!";// Nội dung mail dạng text
                let html = `<p>Password đã resset là : !!!</p> <h3> ${userData.password}</h3>`; // Nội dung mail dạng html

                const createMail = nodeMail.createMail(from, to, subject, text, html);

                const sendMailer = nodeMail.sendMailer(createMail, createTransportMail);

                console.log('đã tới được mục mail');
                return res.status(200).json({ message: 'Reset Password thành công' })
            } else {
                return res.status(500).json({ error: 'Reset password thất bại user thất bại' });
            }
        } catch (error) {
            return res.status(500).json(error);
        }


    } else {
        return res.status(403).send({
            message: 'không tìm thấy mail trong request',
        });
    }

}


let loginAdmin = async (req, res) => {
    try {
        let userAdmin = {
            username: req.body.username,
            password: req.body.password
        }
        // get data admin username and password
        var adminIdD = function (userAdmin) {
            return new Promise((resolve, reject) => {
                admin.getByAdminUserNameAndPassWord(userAdmin, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }

                })
            })
        }


        var updateRefreshToken = function (refreshToken, id) {
            return new Promise((resolve, reject) => {
                admin.updateRefreshTokenAdmin(refreshToken, id, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }
                })
            })
        }

        var updateAccessToken = function (accesstoken, id) {
            return new Promise((resolve, reject) => {
                admin.updateAccessTokenAdmin(accesstoken, id, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }
                })
            })
        }

        var adminData = await adminIdD(userAdmin);

        // so sanh mat khau
        const flagHash = bcrypt.compareSync(userAdmin.password, adminData[0].password);

        // var a = await data();
        // console.log(adminData[0].refreshtoken);
        const userFakeData = {
            _id: adminData[0].admin_id,
            name: adminData[0].username,
        };


        if (adminData.length > 0 && flagHash) {
            const accessToken = await jwtHelper.generateToken(userFakeData, accessTokenSecretAdmin, accessTokenLife);
            const refreshToken = await jwtHelper.generateToken(userFakeData, refreshTokenSecretAdmin, refreshTokenLife);


            const flagUpdateRefreshToken = await updateRefreshToken(refreshToken, adminData[0].admin_id);
            const flagUpdateAccessToken = await updateAccessToken(accessToken, adminData[0].admin_id);


            if (flagUpdateRefreshToken.changedRows > 0 && flagUpdateAccessToken.changedRows > 0) {
                // console.log(flagUpdateRefreshToken)
                debug(`Gửi Token và Refresh Token về cho client...`);
                return res.status(200).json({ userFakeData, accessToken, refreshToken })
            } else {
                return res.status(500).json({ error: 'Luu token that bai' });
            }
        } else {
            return res.status(200).json({ error: 'Sai tài khoản hoặc mật khẩu' });
        }

    } catch (error) {
        return res.status(500).json(error);
    }
}



let loginUser = async (req, res) => {
    try {
        let userData = {
            email: req.body.email,
            password: req.body.password
        }
        // console.log(req.body.email)
        // console.log(req.body.password)
        // get data user username and password

        var getEmail = function (email) {
            return new Promise((resolve, reject) => {
                userModel.getEmail(email, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }

                })
            })
        }



        var updateRefreshToken = function (refreshToken, id) {
            return new Promise((resolve, reject) => {
                userModel.updateRefreshTokenUser(refreshToken, id, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }
                })
            })
        }

        var updateAccessToken = function (accesstoken, id) {
            return new Promise((resolve, reject) => {
                userModel.updateAccessTokenUser(accesstoken, id, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }
                })
            })
        }

        const getEmailData = await getEmail(userData.email);

        if (getEmailData.length === 0) {
            return res.status(200).json({ error: 'Tài khoản không tồn tại!!' });
        }

        if (getEmailData[0].active === 0) {
            return res.status(200).json({ error: 'Tài khoản chưa xác nhận mail' });
        }

        if (getEmailData[0].vipham === 1) {
            return res.status(200).json({ error: 'Tài khoản đang bị vi phạm , và đang bị khóa' });
        }
        // console.log(getEmailData);
        // so sanh mat khau
        const flagHash = bcrypt.compareSync(userData.password, getEmailData[0].password);

        // console.log(flagHash)
        // var a = await data();
        // console.log(adminData[0].refreshtoken);
        const userFakeData = {
            _id: getEmailData[0].user_id,
            email: getEmailData[0].email,
        };


        if (getEmailData.length > 0 && flagHash) {
            // tạo ra accesstoken and refreshtoken
            const accessToken = await jwtHelper.generateToken(userFakeData, accessTokenSecret, accessTokenLife);
            const refreshToken = await jwtHelper.generateToken(userFakeData, refreshTokenSecret, refreshTokenLife);

            // update accesstoken and refreshtoken vào dtb
            const flagUpdateRefreshToken = await updateRefreshToken(refreshToken, getEmailData[0].user_id);
            const flagUpdateAccessToken = await updateAccessToken(accessToken, getEmailData[0].user_id);

            // kiểm tra có thêm vào được chưa
            if (flagUpdateRefreshToken.changedRows > 0 && flagUpdateAccessToken.changedRows > 0) {
                // console.log(flagUpdateRefreshToken)
                debug(`Gửi Token và Refresh Token về cho client...`);
                return res.status(200).json({ userFakeData, accessToken, refreshToken })
            } else {
                return res.status(200).json({ error: 'Luu token that bai' });
            }
        } else {
            return res.status(200).json({ error: 'Sai tài khoản hoặc mật khẩu' });
        }

    } catch (error) {
        return res.status(200).json(error);
    }
}

/**
 * controller refreshToken
 * @param {*} req 
 * @param {*} res 
 */

let refreshTokenAdmin = async (req, res) => {
    // User gửi mã refresh token kèm theo trong body
    const refreshTokenFromClient = req.body.refreshToken;



    // debug("tokenList: ", tokenList);

    // Nếu như tồn tại refreshToken truyền lên và nó cũng trong trong user list
    if (refreshTokenFromClient) {
        try {
            const decoded = await jwtHelper.verifyToken(refreshTokenFromClient, refreshTokenSecretAdmin);

            const userFakeData = decoded.data;
            const userAdmin = {
                username: userFakeData.name,
                admin_id: userFakeData._id,
            }

            var adminIdD = function (userAdmin) {
                return new Promise((resolve, reject) => {
                    admin.getRefreshTokenById(userAdmin.admin_id, (err, data) => {
                        if (err)
                            reject(err);
                        else {
                            resolve(data);
                        }

                    })
                })
            }

            var adminData = await adminIdD(userAdmin);

            // set 2 refreshtoken de so sanh
            var str1 = adminData[0].refreshtoken;
            var str2 = refreshTokenFromClient;

            if (str1.localeCompare(str2) === 0) {
                const accessToken = await jwtHelper.generateToken(userFakeData, accessTokenSecretAdmin, accessTokenLife);
                // gửi token mới về cho người dùng
                return res.status(200).json({ accessToken });
            } else {
                res.status(403).json({
                    message: 'Invalid refresh token.',
                });
            }

        } catch (error) {
            res.status(403).json({
                message: 'Invalid refresh token',
            });
        }
    } else {
        // Không tìm thấy token trong request
        return res.status(403).send({
            message: 'No token provided.',
        });
    }
};

let updateAciveUser = async (req, res) => {
    const user_id = req.params.user_id;
    try {
        var flagActive = function (user_id) {
            return new Promise((resolve, reject) => {
                userModel.updateActiveUser(user_id, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }
                })
            })
        }
        const dataFlagActive = await flagActive(user_id);
        if (dataFlagActive.changedRows > 0) {
            return res.send('<p>Mở tài Active user thành công !!</p>');
            // return res.status(200).json({ message: 'Mở tài Active user thành công !!' })
            //  res.redirect('http://localhost:3000/');
        } else {
            return res.status(200).json({ error: 'Mở tài Active user thất bại !!' })
            //  res.redirect('http://localhost:3000/');
        }
    } catch (error) {
        return res.status(500).json(error);
    }


}


module.exports = {
    userDangky: userDangky,
    loginAdmin: loginAdmin,
    loginUser: loginUser,
    userResetPassword: userResetPassword,
    updateAciveUser: updateAciveUser,
    refreshTokenAdmin: refreshTokenAdmin
}