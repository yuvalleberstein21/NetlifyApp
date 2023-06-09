const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const { MessagingResponse } = require('twilio').twiml;
const mysql = require('mysql');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);
require('dotenv').config()



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'portfolio',
});

// Connect to the MySQL database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});



const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);



app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();

    client.messages
        .create({
            body: req.body.message,
            from: req.body.email,
            to: '+9720509525201'
        })
        .then(message => console.log(message.sid));

    twiml.message('The Robots are coming! Head for the hills!');

    res.type('text/xml').send(twiml.toString());
});


app.listen(5000, () => console.log('server on port 5000'))