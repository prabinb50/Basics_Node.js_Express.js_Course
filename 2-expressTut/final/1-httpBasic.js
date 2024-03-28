const http =  require('http')

const server = http.createServer((req, res) => {
    // console.log(req.method)
    
    // for home page
    if (req.url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>home page</h1>')
        res.end()
    }
    // for about page
    else if (req.url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>about page</h1>')
        res.end()
    }
    // for 404
    else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>page not found</h1>')
        res.end()
    }
})

server.listen(5000)