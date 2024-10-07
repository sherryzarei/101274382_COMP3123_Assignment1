const express = require('express')
const app = express()
const userRouter = require('./routes/user')
const employeeRouter = require('./routes/employee')
require('dotenv').config();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/v1/user', userRouter)
app.use('/api/v1/emp/employees', employeeRouter)

const SERVER_PORT = process.env.PORT;

const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTION_STRING)
.then(() => {
    console.log("Connected to database!")
    app.listen(SERVER_PORT, () => {
        console.log("server is running on port 3000")
    });
    
})
.catch(() => {
    console.log("Connection failed")
})




