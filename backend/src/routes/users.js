//De express configuro el router y lo exporto
const { Router } = require('express');
const router = Router();

//Traigo las funciones del controllador
const { getUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/users.controller');

//Defino los routers y su respuesta
router.route('')
    .get(getUsers)
    .post(createUser);

router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;