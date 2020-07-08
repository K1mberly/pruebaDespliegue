var http = require('http');
const random = require('random');

http.createServer(function (req, res) {
    console.log('texto cualquiera');    
    var numero = random.int(0, 100);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Prueba de despliegue con github y node Kim' + numero);
    
}).listen(3000);
