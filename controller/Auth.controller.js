const admin = require('../models/admin.model');
const userModel = require('../models/user.model');

const jwtHelper = require('../helpers/jwt.helper');

const debug = console.log.bind(console);

const bcrypt = require('bcrypt');
const saltRounds = 10;

const nodeMail = require('../helpers/nodeMail');



// Biến cục bộ trên server này sẽ lưu trữ tạm danh sách token


// Thời gian sống của token
const accessTokenLife = process.env.ACCESS_TOKEN_LIFE || "1h";

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
    // console.log(userData) kiem tra du lieu

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
            if (insertUserData.affectedRows > 0) {
                const option = nodeMail.createOption();
                const createTransportMail = nodeMail.createTransportMail(option);

                let from = 'webdoan20192019@gmail.com';// Địa chỉ email của người gửi
                let to = userData.email; // Địa chỉ email của người gửi
                let subject = 'Thư được gửi bằng Node.js'; // Tiêu đề mail
                let text = 'Gửi mail luận văn tốt nghiệp';// Nội dung mail dạng text
                let html = '<h1>Luận văn tốt nghiệp</h1>'; // Nội dung mail dạng html

                const createMail = nodeMail.createMail(from, to, subject, text, html);

                const sendMailer = nodeMail.sendMailer(createMail, createTransportMail);

                console.log('đã tới được mục mail');
                return res.status(200).json({ message: 'đăng ký thành công xác nhận email để mở tài khoản' })
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
        console.log(req.body.email)
        console.log(req.body.password)
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
        console.log(getEmailData);
        // so sanh mat khau
        const flagHash = bcrypt.compareSync(userData.password, getEmailData[0].password);
        console.log(flagHash)
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
                return res.status(500).json({ error: 'Luu token that bai' });
            }
        } else {
            return res.status(200).json({ error: 'Sai tài khoản hoặc mật khẩu' });
        }

    } catch (error) {
        return res.status(500).json(error);
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

// let refreshTokenAdmin = async (req, res) => {
//     // User gửi mã refresh token kèm theo trong body
//     const refreshTokenFromClient = req.body.refreshToken;



//     // debug("tokenList: ", tokenList);

//     // Nếu như tồn tại refreshToken truyền lên và nó cũng trong trong user list
//     if (refreshTokenFromClient) {
//         try {
//             const decoded = await jwtHelper.verifyToken(refreshTokenFromClient, refreshTokenSecret);

//             const userFakeData = decoded.data;
//             const userAdmin = {
//                 username: userFakeData.name,
//                 admin_id: userFakeData._id,
//             }

//             var adminIdD = function (userAdmin) {
//                 return new Promise((resolve, reject) => {
//                     admin.getRefreshTokenById(userAdmin.admin_id, (err, data) => {
//                         if (err)
//                             reject(err);
//                         else {
//                             resolve(data);
//                         }

//                     })
//                 })
//             }

//             var adminData = await adminIdD(userAdmin);

//             // set 2 refreshtoken de so sanh
//             var str1 = adminData[0].refreshtoken;
//             var str2 = refreshTokenFromClient;

//             if (str1.localeCompare(str2) === 0) {
//                 const accessToken = await jwtHelper.generateToken(userFakeData, accessTokenSecret, accessTokenLife);
//                 // gửi token mới về cho người dùng
//                 return res.status(200).json({ accessToken });
//             } else {
//                 res.status(403).json({
//                     message: 'Invalid refresh token.',
//                 });
//             }

//         } catch (error) {
//             res.status(403).json({
//                 message: 'Invalid refresh token',
//             });
//         }
//     } else {
//         // Không tìm thấy token trong request
//         return res.status(403).send({
//             message: 'No token provided.',
//         });
//     }
// };

module.exports = {
    userDangky: userDangky,
    loginAdmin: loginAdmin,
    loginUser: loginUser,
    refreshTokenAdmin: refreshTokenAdmin
}