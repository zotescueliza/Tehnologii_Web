const express = require('express')
const { dirname } = require('path')

const app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.send('hello web')
})

app.get('/ping', (req,res) => {
    res.send('pong')
})

app.listen(8080)
