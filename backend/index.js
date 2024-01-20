const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./Routers/todoRoutes')
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI
).then(()=>console.log("Connected to MongoDB..."))
.catch((err)=>console.log(err))

//routes
app.use(routes)


app.listen(3001, ()=>{
    console.log("Server is running on port")
})