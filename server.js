const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3001;
const nodemailer = require('nodemailer');
const server = express();
const app = next({ dev });
const handle = app.getRequestHandler();
const cors = require('cors');
require('dotenv').config();

// middleware
server.use(express.json());
server.use(cors());

//next.js
app
  .prepare()
  .then(() => {
    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on ${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN
  }
});

transporter.verify((err, success) => {
  err ? console.log(err) : console.log(`=== Server is ready to take messages: ${success} ===`);
});

server.post('/send', function (req, res) {
  let mailOptions = {
    from: `${req.body.values.email}`,
    to: process.env.EMAIL,
    subject: `Message from ${req.body.values.name}`,
    text: `${req.body.values.message}`
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        status: 'fail'
      });
    } else {
      console.log('== Message Sent ==');
      res.json({
        status: 'success'
      });
    }
  });
});
