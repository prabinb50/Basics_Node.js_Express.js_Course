const express = require ('express')
const app = express()
const morgan = require('morgan')

const logger = require('./logger')
const authorize = require('./authorize')

//  incoming request (req) => middleware => sending responses (res)

// 1. use vs route
// 2. options - our own / express / third party

// app.use([logger, authorize])
// app.use(express.static('./navbar-app'))
app.use(morgan('tiny'))

// api/home/about/products
app.get('/', (req, res) => {
    res.send('Home')
})
  
app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})
  
app.get('/api/items', (req, res) => {
    console.log(req.user)
    res.send('Items')
})

app.listen(5000, ()=>{
    console.log('server listening on port 5000....');
})