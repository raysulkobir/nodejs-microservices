const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const router = require('./routes/api')

const DB_HOST = process.env.DATABASE_HOST
const DB_PORT = process.env.DATABASE_PORT
const DB_NAME = process.env.DATABASE_NAME
const BASE_URL = process.env.BASE_URL

//TODO security middleware
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const hpp = require('hpp')
const cors = require('cors')
const bodyParser = require('body-parser')

//TODO use security middleware
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())
app.use(bodyParser.json())
app.use(express.json())

//TODO  request rete limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false,
  // store: ... , // Redis, Memcached, etc. See below.
})
app.use(limiter)

//TODO Mongo DB Database connection
mongoose
  .connect('mongodb://' + DB_HOST + ':' + DB_PORT + '/' + DB_NAME + '')
  .then(() => console.log('Mongodb connected successfully !'))
  .catch(error => console.log(error))

//TODO Route section
app.use(router)
app.use('*', (req, res) => {
  res.status(404).json({
    status: 'fail',
    data: 'not found',
  })
})

module.exports = app
