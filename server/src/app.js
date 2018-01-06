const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors()) // used to host server on different domains

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}!, Your user was registered! Have Fun!!!`
  })
})

app.listen(process.env.PORT || 8081) // To overwrite that port using enviorment variable
