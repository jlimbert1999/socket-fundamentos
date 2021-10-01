const { io } = require('../server')
io.on('connection', (client) => {   //vemos al usuario conectado
    console.log("usuario conectado")

    client.emit('eviarMensaje', {   //enviar mensaje al cliente
        usuario: 'Administrador',
        mensaje: 'bievenido al chat'

    })
    client.on('disconnect', () => {
        console.log('usuario desconectado')
    })

    //escuchar envios del cliente   //.on para recibir
    client.on('eviarMensaje', (data, callback) => {      //parametor callback para verificar resuslatod es bueno
        console.log(data);
        client.broadcast.emit('eviarMensaje', data)     //broadcast a todos los users
        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'todo sali bien'
        //     })
        // }
        // else {
        //     callback({
        //         resp: 'todo sali mall'
        //     })

        // }
    })
})