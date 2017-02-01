var express = require('express')
var app = express()
var cors = require('cors')
var jwt = require('express-jwt')

var jwtCheck = jwt({
  secret: 'FhIEi0WuzwrNK1fZPFesN3I2ddnL4Ae0N-L3SiGbAve6iR97m08Fr87CY0Nh3No1',
  audience: '90tlZAlxZOIqqH5ABgEZ2FkbhGRQ5hMI'
})

app.use(cors())

// check security for anything under the secured route
app.use('/secured', jwtCheck)

// open call
app.get('/ping', function(req, res) {
  res.send("All good. You don't need to be authenticated to call this");
})

// secured call
app.get('/secured/ping', function(req, res) {
  res.status(200).send("All good. You only get this message if you're authenticated");
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
