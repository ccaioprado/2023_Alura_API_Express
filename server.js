const http = require("http")
const port = 3000

const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('API Node')
}) 

server.listen(port, () => {
    console.log(`Servido rodando em "http://localhost:${port}"`)
})
