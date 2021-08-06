const socketController = (socket)=>{ 

    console.log("Cliente conectado", socket.id)

    //Escucha si es que el cliente dispara dicho evento donde se le envia un mensaje
    socket.on('enviar-mensaje', (mensaje, callback)=>{

        console.log("From client: ", mensaje)

        //El servidor emite un evento llamado 'enviar-mensaje' y este se le envia a todos los clientes
        callback(123456789)
        socket.broadcast.emit("enviar-mensaje", mensaje)
    })

    //Cuando un cliente se desconecta se dispara este evento
    socket.on('disconnect', ()=>{ 
        console.log("Cliente desconectado")
    })

}

module.exports= {
    socketController
}