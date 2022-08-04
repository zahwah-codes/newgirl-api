require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

// Create express app
const app = express()

// Database
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

// Middleware
app.use(express.json())

// Routes
const newGirlRouter = require ('./routes/newgirl')
app.use('/newgirl', newGirlRouter)

let port = process.env.PORT || 8000;

// Starting server
app.listen(port, () => console.log(`Server Started`))