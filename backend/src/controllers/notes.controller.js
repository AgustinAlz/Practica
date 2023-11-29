// creo objeto controller
const notesController = {};

// Importo el modelo de datos
const Note = require('../models/Note');

//tengo que ponerle try catch a los await de base de datos

// Creo funcion Get de notes
notesController.getNotes = async (req, res) => {
    //Busco notas
    const notes = await Note.find();
    //devulevo notas en un json
    res.json(notes);
}

// Creo funcion Create de notes
notesController.createNote = async (req, res) => {
    //obtengo del body del request los datos
    const { title, content, date, author } = req.body
    //Genero objeto con los datos del req.body
    const newNote = new Note({
        title: title,
        content: content,
        date: date,
        author: author
    });
    //Guardo en base de datos la nueva nota
    await newNote.save();
    //mensaje de respuesta
    res.json({message: `Nota ${newNote._id} ha sido creqda`});
};

// Creo funcion Get de una note
notesController.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
};

// Creo funcion Update de notes
notesController.updateNote = async (req, res) => {
        const { title, content, date, author } = req.body
        
    await Note.findByIdAndUpdate(req.params.id, {
        title,
        content,
        date,
        author
    });
    res.json({message: `Nota ${req.params.id} ha sido actualizada`})
};

// Creo funcion delete notes
notesController.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: `Nota ${req.params.id} ha sido eliminada`})
};

// Exporto el modulo
module.exports = notesController;