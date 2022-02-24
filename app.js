const express = require("express")
var favicon = require('serve-favicon')
var path = require('path')

const PORT = process.env.PORT || 3000

const app = express()
app.use('healthcheck', require('./routes/healthcheck.routes'));
app.use(favicon(path.join(__dirname, 'public', 'faviconSofia.ico')))
app.use(express.static('public'))

app.get('/highscore', function(req, res){
    res.sendFile(__dirname + "./public/index.html")
})

app.get('/levelOne', function(req, res){
    res.sendFile(__dirname + "./public/html/levelOne.html")
})

app.listen(PORT, function(){
    console.log(`Server started on port ${PORT}`)
})