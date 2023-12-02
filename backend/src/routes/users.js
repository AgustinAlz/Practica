/*
import { Router } from "express";
import { getUsers, createUser, getUser, updateUser, deleteUser } from  "../controllers/Users.controller.js"

const router = Router();
router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;*/



//De express configuro el router y lo exporto
//const { Router } = require('express');
//const router = Router();

const { Router } = require('express');
const router = Router();

//Traigo las funciones del controllador
//const { getUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/users.controller');
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