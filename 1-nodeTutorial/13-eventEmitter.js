// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it
customEmitter.on('response', (name, id)=>{
    console.log(`data recived user ${name} with id: ${id}`)
})

customEmitter.on('response', ()=>{
    console.log(`some other logic here`)
})

customEmitter.emit('response', 'prabin', 11)

