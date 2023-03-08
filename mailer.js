const nodemailer = require('nodemailer');
const authorization = require('./authorization')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASSWORD
  }
})

const sendRegistrationConfirmationEmail = (userId, email) => new Promise((resolve, reject) => {
  const token = authorization.createLongSession(userId)
  const mailOptions = {
    from: process.env.MAILER_USER,
    to: email,
    subject: 'Marketplace app token',
    text: `Your token for the marketplace app is: ${token}`
  }
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      reject(error)
    } else {
      resolve(info.response)
    }
  })
})

module.exports = {
  sendRegistrationConfirmationEmail
}