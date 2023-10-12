const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'your-email-service', 
    auth: {
      user: 'testo@gmail.com',  
      pass: 'test1234'  
    }
  });

  const mailOptions = {
    from: 'test-email@gmail.com',
    to: 'gomycodetest@gmail.com',  
    subject: 'This is a test email',
    text: 'This is a test email from Node.js using nodemailer.'
  };
  
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error('Email sending failed:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });