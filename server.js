const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

port = process.env.PORT || 3030

io.on('connection',(socket)=>{
    console.log('Client connected: '+socket.id)
    socket.on('join',(data)=>{
        console.log('=========CHAT MESSAGE========')
        console.log(data)
        socket.emit('join',(data))
    })
    socket.on('disconnect',()=>{
        console.log('Client disconnected: '+socket.id)
    })
})
http.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})