/*import { Router } from "express";
import { getNotes, createNote, getNote, updateNote, deleteNote } from  "../controllers/notes.controller.js"


const router = Router();
router.get("/", getNotes);
router.post("/", createNote);
router.get("/:id", getNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;*/


//De express configuro el router y lo exporto
const { Router } = require('express');
const router = Router();

//const express = require('express');
//const router = express.Router()M

//Traigolas funciones del controllador
const { getNotes, createNote, getNote, updateNote, deleteNote } = require('../controllers/notes.controller');

//Defino los routers y su respuesta
router.route('')
    .get(getNotes)
    .post(createNote);

router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote);

module.exports = router;