// creo objeto controller
const notesController = {};

// Importo el modelo de datos
const Note = require('../models/Note');

// Creo funcion Get de notes
const getNotes = async (req, res) => {
    try {
        //Busco notas
        const notes = await Note.find();
        //devulevo notas en un json
        res.json(notes);
    } catch (error) {
        res.status(500).json({ 'message': error.message });
    }
}

// Creo funcion Create de notes
const createNote = async (req, res) => {
    try {
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
        res.json({ message: `Nota ${newNote._id} ha sido creqda` });
    } catch (error) {
        res.status(500).json({ 'message': error.message });
    }
};

// Creo funcion Get de una note
const getNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            res.status(404).json({ 'message': 'Nota no econtrada.' });
        }
        res.json(note);
    } catch (error) {
        res.status(500).json({ 'message': error.message });
    }
};

// Creo funcion Update de notes
const updateNote = async (req, res) => {
    try {
        const { title, content, date, author } = req.body
        await Note.findByIdAndUpdate(req.params.id, {
            title,
            content,
            date,
            author
        });
        res.json({ message: `Nota ${req.params.id} ha sido actualizada` });
    } catch (error) {
        res.status(500).json({ 'message': error.message });
    }
};

// Creo funcion delete notes
const deleteNote = async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.params.id);
        res.json({ message: `Nota ${req.params.id} ha sido eliminada` })
    } catch (error) {
        res.status(500).json({ 'message': error.message });
    }
};

// Exporto el modulo
module.exports = {
    getNotes,
    getNote,
    createNote,
    updateNote,
    deleteNote
}