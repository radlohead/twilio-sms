const twilio = require('twilio')
import express from 'express'
const bodyParser = require('body-parser')
const app = express()
const userInfo = require('./userInfo')
const accountSid = userInfo.accountSid
const authToken = userInfo.authToken
const client = twilio(accountSid, authToken)

app.set('/views', __dirname + '/index.html')
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index.html')
})

app.get('/sms/success', (req, res) => {
    res.send('sms send success')
})

app.post('/receive', async (req, res) => {
    client.messages
        .create({
            body: req.body.smsInput,
            from: '+12562903533',
            to: '+821075457456'
        })
        .then((message: any) => {
            res.redirect('http://localhost:3000/sms/success')
        })
})

app.listen(3000, () => console.log('twilio server listening on port 3000'))
