/**
 * HTTP PETICIONES INTERNET
 */

const http = require('http')
const server = http.createServer()

const io = require('socket.io')(server,{
    cors:{origin: '*'}
})

io.on('connection',(socket)=>{
    console.log("Conectado al servidor");
    //console.log(socket);
    socket.on('chat_message',(data)=>{
        //console.log(data);
        io.emit('chat_message',data)
    })
})
server.listen(3000)