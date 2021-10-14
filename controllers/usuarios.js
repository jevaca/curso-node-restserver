const { response, request } = require('express'); //es redundante pero sirve para que vs studio code sepa el tipo del ebjeto response

const usuariosGet = (req = request, res = response) => {
    
    const { nombre, edad, apikey = 'no apikey'} = req.query; //para obetener los query params (los atributos de la url) por ejemplo api/usuarios?nombre=jonathan&edad=26&dni=38792947

    res.json({
        msg: 'get API - controlador',
        nombre, 
        edad,
        apikey
    }); //para retornar un objeto json

};

const usuariosPost = (req, res) => {
    
    const {nombre, edad} = req.body; //obtenemos el body de la request. Desestructuro el body con los parametros que necesito para asi ignorar cualquier otra cosa que el usuario me enviwe
    


    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    }); //para retornar un objeto json
};

const usuariosPut = (req, res) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    }); //para retornar un objeto json
};

const usuariosPatch = (req, res) => {
    
    res.json({
        msg: 'patch API - controlador'
    }); //para retornar un objeto json
};

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    }); //para retornar un objeto json
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}