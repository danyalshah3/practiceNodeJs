const http = require('http')

http.createServer(function(req, res){

res.end('this is first module')

}).listen(3000)