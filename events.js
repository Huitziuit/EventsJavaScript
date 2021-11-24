var events = require('events')
var myEventEmitter = events.EventEmitter
var manager = new  myEventEmitter()

manager.on('greeting',function(name){
    console.log("hi "+ name)
})

manager.on('goodbye',function(name){
    console.log("bye "+ name)
})

manager.emit('greeting',"Erick")

setInterval(function(){
    manager.emit('greeting',"Erick")
},1000);

setInterval(function(){
    manager.emit('goodbye',"Erick")
},1000);