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

// Starting server
app.listen(3000, () => console.log(`Server Started`))