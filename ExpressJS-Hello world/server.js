const http = require('http')

http.createServer(function(req, res){

    res.end('This is about Express framework')
    
}).listen(3000)