
// const lblOnline = document.getElementById("lbl-online") 
// const lblOffline = document.getElementById("lbl-offline") 

const lblOnline = document.querySelector("#lbl-online") 
const lblOffline = document.querySelector("#lbl-offline") 

const txtMensaje = document.querySelector("#txtMensaje")
const btnEnviar = document.querySelector("#btnEnviar")


const socket = io();

//Cuando el servidor se conecta se dispara este evento
socket.on('connect', client =>{
    //console.log("Conectado desde el browser")
    lblOnline.style.display = ''
    lblOffline.style.display = 'none'
})

//Cuando el servidor se cae o no se puede comunicar se dispara este evento
socket.on('disconnect', client =>{
    //console.log("Desconectado desde el browser")
    lblOnline.style.display = 'none'
    lblOffline.style.display = ''
})

//El cliente espera o escucha por el evento 'enviar-mensaje' que disparará el servidor
socket.on('enviar-mensaje', msg =>{
    console.log("From server", msg)
})

btnEnviar.addEventListener('click', ()=>{
    const mensaje = txtMensaje.value
    console.log("Yo: ", mensaje)

    //El cliente emite un evento llamado 'enviar-mensaje' hacia el servidor
    //El tercer argumento es un callback de retroalimentacion y solo se le mostrará al cliente que haya hecho la emision
    socket.emit('enviar-mensaje', {date: new Date(), mensaje}, (id)=>{
        console.log("Confirmacion del mernsaje: ", id)
    })
})