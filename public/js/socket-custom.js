var socket = io();
socket.on('connect', function () {    //conecion con el servidror
    console.log("conectado al servidor")
})

//escuchar .on()
socket.on('disconnect', function () {
    console.log('perdimos conexion con el servidor')
})

//enviar informacion emit()
socket.emit('eviarMensaje', {
    usuario: 'jose',
    msg: "hola mundo"
}, function (resp) {
    console.log("respuesta server", resp)
});


//escuchar informacion
socket.on('eviarMensaje', function (mensaje) {
    console.log("servidor", mensaje)
})