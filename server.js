require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

// Create express app
const app = express()

app.get('/', (req, res) => {
   res.send('Express vercel app response')
})


// Cors
const cors = require("cors");
const corsOptions ={
   origin:'*',
   credentials:true,
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

// Database
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

// Middleware
app.use(express.json())

// Routes
const newGirlRouter = require ('./routes/newgirl')
app.use('/', newGirlRouter)

let port = process.env.PORT || 3000;

// Starting server
app.listen(port, () => console.log(`Server Started`))