const twilio = require('twilio')
const express = require('express')
const app = express()
const userInfo = require('./userInfo')
const accountSid = userInfo.accountSid
const authToken = userInfo.authToken
const client = twilio(accountSid, authToken)

app.get('/', (req, res) => {
    res.send('hi twilio sms')
})

app.get('/receive', (req, res) => {
    client.messages
        .create({
            body:
                'This is the ship that made the Kessel Run in fourteen parsecs?',
            from: '+12562903533',
            to: '+821075457456'
        })
        .then(message => {
            res.send('sms send success')
        })
})

app.listen(3000, () => console.log('twilio server listening on port 3000'))
// console.log('twilio: ', client)
