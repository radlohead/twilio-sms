const twilio = require('twilio')
const userInfo = require('./userInfo')
const accountSid = userInfo.accountSid
const authToken = userInfo.authToken
const client = twilio(accountSid, authToken)

client.messages
    .create({
        body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
        from: '+12562903533',
        to: '+821075457456'
    })
    .then(message => console.log(message.sid))

console.log('twilio: ', client)
