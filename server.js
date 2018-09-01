const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.end('Seeerver on Node.js');
});

server.listen(3000, () => console.log('Сервер работает'));

