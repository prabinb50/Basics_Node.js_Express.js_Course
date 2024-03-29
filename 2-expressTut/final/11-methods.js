const express = require ('express')
const app = express()

let {people} = require('./data')

// for METHOD - GET
app.get('/api/people', (req, res) => {
    res.status(200).json({ sucess: true, data: people })
})

// for METHOD - POST
// static assests
app.use(express.static ('./methods-public'))
//parse from data
app.use(express.urlencoded({extended: false}))
// parse from json
app.use(express.json())

// for METHOD - POST....for traditional form example
app.post('/login', (req, res) => {
    const {name} = req.body
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide credentials')
})

// for METHOD - POST....for js example
app.post('/api/people', (req, res) => {
    const {name} = req.body
    if (!name){
       return res.status(401).json({sucess: false, msg: 'please provide value name'})
    }
    res.status(201).send({sucess: true, person: name})
})

// for METHOD - POST
app.post('/api/postman/people', (req, res) => {
    const {name} = req.body
    if (!name){
       return res.status(401).json({sucess: false, msg: 'please provide value name'})
    }
    res.status(201).send({sucess: true, data: [...people, name]})
})

// for METHOD - PUT
app.put('/api/people/:id', (req, res)=> {
    const {id} = req.params
    const {name} = req.body
    const person = people.find((person) => person.id === Number(id)) 
    if (!person){
        return res.status(404).json({sucess: false, msg: `no person with that ${id}`})
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({sucess: true, data: newPeople})
})

// for METHOD - DELETE
app.delete('/api/people/:id', (req, res)=> {
    const person = people.find((person) => person.id === Number(req.params.id)) 
    if (!person){
        return res.status(404).json({sucess: false, msg: `no person with that ${req.params.id}`})
    }
    const newPeople = people.filter((person)=> person.id !== Number(req.params.id))
    return res.status(200).json({sucess: true, data: newPeople})
})

app.listen(5000, ()=>{
    console.log('server listening on port 5000....');
})