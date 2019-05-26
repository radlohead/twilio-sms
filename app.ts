import twilio from 'twilio'
import express, { Application, Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'
import userInfo from './userInfo'
import ejs from 'ejs'

const app: Application = express()
const accountSid: string = userInfo.accountSid
const authToken: string = userInfo.authToken
const client = twilio(accountSid, authToken)

app.set('/views', __dirname + '/index.html')
app.set('view engine', 'ejs')
app.engine('html', ejs.renderFile)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.render('index.html')
})

app.get('/sms/success', (req: Request, res: Response, next: NextFunction) => {
    res.send('sms send success')
})

app.post(
    '/receive',
    async (req: Request, res: Response, next: NextFunction) => {
        client.messages
            .create({
                body: req.body.smsInput,
                from: '+12562903533',
                to: '+821075457456'
            })
            .then((message: any) => {
                res.redirect('http://localhost:3000/sms/success')
            })
    }
)

app.listen(3000, () => console.log('twilio server listening on port 3000'))
