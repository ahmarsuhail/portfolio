const nodemailer = require('nodemailer');

const sendEmail = async(req) => {
  
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_ID, 
          pass: process.env.EMAIL_PASSWORD }
      });
      
  let info = await transporter.sendMail({
    from: process.env.EMAIL_ID, 
    to: process.env.EMAIL_ID, 
    subject: "Work stuff", 
    text: JSON.stringify(req), 
  });
}

module.exports = sendEmail;