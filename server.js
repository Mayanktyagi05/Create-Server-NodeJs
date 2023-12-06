
const http = require('http');

const server = http.createServer((req, res)=>{
    res.write('Mayank Tyagi');
    res.end();
})

server.listen(4000);