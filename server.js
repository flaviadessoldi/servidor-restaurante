const http = require('http')


const servidor = http.createServer(function (request, response) {
    if (request.url === '/') {
        response.end('Hello Wonderful World')
    } else if (request.url === '/comidas') {
         if (request.method === 'GET') {
            response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"})
            response.end("<h1> Respostão diferentona </h1>")
        } else if (request.method === 'POST') {
            response.writeHead(201, {"Content-Type":"text/html;charset=utf-8"})
            response.end("<h1> Respostão diferentona do POST </h1>")
    }
}
})

servidor.listen(3000)
console.log('servidor rodando na porta 3000')



