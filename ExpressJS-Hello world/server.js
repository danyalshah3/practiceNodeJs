const express = require('express')

const app = express()

app.get('/' , function(req, res){

    res.end("This is hello world in homepage using expressjs")

})

app.listen(3000, function(){
    console.log('connection successfull')
})