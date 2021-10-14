const { Router } = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios');

const router = Router();

/*
    GET: obtener data
    POST: crear nuevos recursos (crea usuario por ejemplo)
    PUT: actualizar data
    DELETE: eliminar data
*/

router.get('/', usuariosGet );

router.put('/:id', usuariosPut); //por ejemplo si quiero que el usuario me especifique un id api/usuario/10

router.post('/', usuariosPost);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);


module.exports = router;



