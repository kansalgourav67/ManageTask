const express = require('express')

const {db} = require('./db')

const todoRoute = require('./routes/todos')

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use('/', express.static(__dirname + '/public'))

app.use('/todos', todoRoute)

const PORT = process.env.PORT;

db.sync()
  .then(() => {
    app.listen(PORT)
  })
  .catch((err) => {
    console.error(err)
  })