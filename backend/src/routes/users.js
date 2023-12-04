//De express configuro el router y lo exporto
const { Router } = require('express');
const router = Router();

//Traigo las funciones del controllador
const usersController = require('../controllers/users.controller');

//Defino los routers y su respuesta
router.route('/')
    .get(usersController.getUsers)
    .post(usersController.createUser);

router.route('/:id')
    .get(usersController.getUser)
    .put(usersController.updateUser)
    .delete(usersController.deleteUser)

module.exports = router;