require("dotenv").config();
const { MAILACOUNT, MAIL_PASS } = process.env;

const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
const mainToEmail = async (mailInfo) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: MAILACOUNT, // generated ethereal user
            pass: MAIL_PASS, // generated ethereal password
        },
    });

    transporter.verify().then(() => {
        console.log("Ready for send emails");
    });
    // send mail with defined transport object
    let info = await transporter.sendMail(mailInfo);
};

module.exports = mainToEmail;
