var express = require('express')
var path = require('path')
var app = express()

app.use(express.static(path.join(__dirname,'src')))

app.listen('8050',function(){
	console.log('listening port is 8050')
})