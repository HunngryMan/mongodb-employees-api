const express = require('express')
const morgan = require('morgan')

const app = express()

// SETTINGS
app.set('port', process.env.PORT || 4000)

// MIDDLEWARE
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/employees", require('./routes/employees.routes'))

module.exports = app;