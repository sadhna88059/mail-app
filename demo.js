var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host:'smtp.gmail.com',
  port:587,
  secure:false,
  requireTLS:true,
  auth: {
    user: 'sadhnasharma41234@gmail.com',
    pass: 'lzyzmkssjqizzuiz'
  }
});

var mailOptions = {
  from: 'sadhnasharma41234@gmail.com',
  to: 'sadhnasharma1808@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That helll00 was easy!'
};


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});