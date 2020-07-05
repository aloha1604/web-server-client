const nodemailer = require("nodemailer");
const Mail = require("nodemailer/lib/mailer");

// tạo option cài đặt mail
// const option = {
//     service: 'gmail',
//     auth: {
//         user: 'webdoan20192019@gmail.com', // email hoặc username
//         pass: '04031604' // password
//     }
// };
exports.createOption = () => {
    const option = {
        service: 'gmail',
        auth: {
            user: 'webdoan20192019@gmail.com', // email hoặc username
            pass: '04031604' // password
        }
    };
    return option;
}

exports.createTransportMail = (option) => {
    // tạo 1 kết nói mail
    var transporter = nodemailer.createTransport(option);

    // kiểm tra kết nối mail thành công hay không
    transporter.verify(function (error, success) {
        // Nếu có lỗi.
        if (error) {
            console.log(error);
        } else { //Nếu thành công.
            console.log('Kết nối mail hệ thống thành  thành công!');
        }
    });
    return transporter;
}

exports.createMail = (from, to, subject, text, html) => {
    return mail = {
        from: from, // Địa chỉ email của người gửi
        to: to, // Địa chỉ email của người gửi
        subject: subject, // Tiêu đề mail
        text: text, // Nội dung mail dạng text
        html: html // Nội dung mail dạng html
    }
}

exports.sendMailer = (createMail, createTransportMail) => {
    const sendMailer = createTransportMail.sendMail(createMail, function (error, info) {
        if (error) { // nếu có lỗi
            console.log(error);
        } else { //nếu thành công
            console.log('Email sent: ' + info.response);
        }
    });
    return sendMailer;
}

// // tạo 1 kết nói mail
// var transporter = nodemailer.createTransport(option);

// // kiểm tra kết nối mail thành công hay không
// transporter.verify(function (error, success) {
//     // Nếu có lỗi.
//     if (error) {
//         console.log(error);
//     } else { //Nếu thành công.
//         console.log('Kết nối mail hệ thống thành  thành công!');
//     }
// });



// var mail = {
//     from: 'webdoan20192019@gmail.com', // Địa chỉ email của người gửi
//     to: 'webdoan20192019@gmail.com', // Địa chỉ email của người gửi
//     subject: 'Thư được gửi bằng Node.js', // Tiêu đề mail
//     text: 'Gửi mail luận văn tốt nghiệp', // Nội dung mail dạng text
//     html: '<h1>Luận văn tốt nghiệp</h1>' // Nội dung mail dạng html
// };


// //Tiến hành gửi email
// const sendMailer = transporter.sendMail(mail, function (error, info) {
//     if (error) { // nếu có lỗi
//         console.log(error);
//     } else { //nếu thành công
//         console.log('Email sent: ' + info.response);
//     }
// });

// module.exports = {
//     option: option,
//     sendMailer: sendMailer,

// }