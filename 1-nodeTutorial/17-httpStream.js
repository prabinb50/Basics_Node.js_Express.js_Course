// var http = require('http')
// var fs = require('fs')

// http
//   .createServer(function (req, res) {
//     // const text = fs.readFileSync('./content/big.txt', 'utf8')
//     // res.end(text)
//     const fileStream = fs.createReadStream('./content/bigFile.txt', 'utf8')
//     fileStream.on('open', () => {
//       fileStream.pipe(res)
//     })
//     fileStream.on('error', (err) => {
//       res.end(err)
//     })
//   })
//   .listen(5000)



// Another way of coding

const fs = require('fs')
const http = require('http')

const server = http.createServer()
server.on('request', (req, res)=>{
  // create a readable stream
  // reading from a stream
  // handle stream events -> data, end, and error
  const readableSTream = fs.createReadStream('./content/bigFile.txt', 'utf8')
  readableSTream.on('data', (chunkData)=>{
    res.write(chunkData)
  })
  readableSTream.on('end', ()=>{
    res.end()
  })
  readableSTream.on('error', (err)=>{
    console.log(err)
    res.end('file not found')
  })
})
server.listen(5000)

  