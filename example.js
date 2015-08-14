var http =  require('http');
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/pain'});
	res.end('Hello world\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1');