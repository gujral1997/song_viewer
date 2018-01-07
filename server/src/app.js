const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors()) // used to host server on different domains

require('./routes')(app) // calls app from routes.js

sequelize.sync()
  .then(() => {
    app.listen(config.port) // To overwrite that port using enviorment variable
    console.log(`Server started on port ${config.port}`)
  })
