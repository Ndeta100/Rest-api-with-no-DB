const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const userRoute=require('./routes/users')


app.use(bodyParser.json())

app.use('/users', userRoute)
const PORT=process.env.PORT||4000


app.listen(PORT, console.log(`App running on port ${PORT}`))

 