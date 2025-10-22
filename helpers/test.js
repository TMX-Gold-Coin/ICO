 const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465, // use 465 if you prefer SSL
  secure: true, // true for port 465, false for 587 (TLS/STARTTLS)
  auth: {
    user: "no-reply@tmxglobal.com",    // full Zoho Mail address 
    pass: "1AzrSRxAg4LG"      // App Password if 2FA enabled  TMXGoldCoinTest@2025

  },
  tls: {
    rejectUnauthorized: false
  }
});

transporter.sendMail({
  from: '"TMXGlobal" <no-reply@tmxglobal.com>',  // must match Zoho domain
  to: "nderebakelvin@gmail.com",
  subject: "Test Email via Zoho SMTP",
  text: "Hello! This is a test email sent using Zoho SMTP + Nodemailer."
}, (error, info) => {
  if (error) {
    return console.log("Error:", error);
  }
  console.log("Message sent:", info.messageId);
}); 

/** const nodemailer = require("nodemailer");
//const config = require('../config')

let transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 465, // use 465 if you want SSL
  secure: true, // true for port 465, false for 587 (TLS/STARTTLS)
  auth: {
    user: "no-reply@tmxgoldcoin.co",   // full email address
    pass: "TmxGoldCoin@2025"   // your Private Email password yhib-prdx-oxnh-byar
  },
  tls: {
    rejectUnauthorized: false  // sometimes needed if TLS issues
  }
});

// send email
transporter.sendMail({
  from: '"TMX GoldCoin" <no-reply@tmxgoldcoin.co>', // must match your domain
  to: "nderebakelvin@gmail.com",
  subject: "Test Email from Nodemailer",
  text: "Hello, this is a test email sent using Private Email + Nodemailer!",
}, (error, info) => {
  if (error) {
    return console.log("Error:", error);
  }
  console.log("Message sent:", info.messageId);
}); **/

//T0.+;p[~h;*e