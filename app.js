const http = require ('http');
const router = require('./router')

http.createServer ((req, res) => {
    res.writeHead (200, {'Content-Type': 'text / plain; charset = utf-8'});
    // Sistema de ruta
    // ¿?
}). listen (3030, 'localhost', () => console.log ('Servidor que se ejecuta en el puerto 3030'));
