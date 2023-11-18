//De express configuro el router y lo exporto
const { Router } = require('express');
const router = Router();

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