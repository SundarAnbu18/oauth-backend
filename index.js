const cookieSession = require('cookie-session')
const express=require('express')
const passport = require('passport')
const app=express()
const passportd=require('./passport')
const cors=require('cors')
const authroot=require('./routes/auth')

app.use(cookieSession({
    name:"session",
    keys:["ken42"],
    maxAge:24*60*60*100
})) 

app.use(passport.initialize())
app.use(passport.session())

app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE",
    credentials:true
}))

app.use('/auth',authroot)

app.listen(4000,()=>console.log('Server is running'))





