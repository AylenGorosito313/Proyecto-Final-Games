

const sendMail = (from, userEmail, subject, html) => {
    return {
        from,
        to: userEmail,
        subject,
        html
    }
}

module.exports = sendMail