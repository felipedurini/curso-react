const ordenGenerada = (nombre, direccion, cart, total, mail, telefono) => {
    

    return {
        buyer: {
            nombre: nombre,
            direccion: direccion,
            mail:mail,
            telefono:telefono
        },
        items: cart
        ,
        total: total,
        createdAt: new Date().toLocaleString()
    }
}

export default ordenGenerada;