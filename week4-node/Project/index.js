const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/yogi', function (req, res) {
  res.send('Hello World by yogi')
})

app.listen(3000)