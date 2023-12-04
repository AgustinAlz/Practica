// creo objeto controller
const usersController = {};

// Importo el modelo de datos
const User = require('../models/User');

// Creo funcion Get de notes
const getUsers = async (req, res) => {
    try {
        //Busco usuarios
        const users = await User.find();
        //devulevo notas en un json
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Creo funcion Create de User
const createUser = async (req, res) => {
    //obtengo del body del request los datos
    const { username } = req.body
    //Genero objeto con los datos del req.body
    const newUser = new User({ username });
    try {
        //Guardo en base de datos la nueva nota
        await newUser.save();
        //mensaje de respuesta
        res.status(201).json({ message: `El usuario ${newUser._id} ha sido creado` });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Creo funcion Get de un User
const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' })
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Creo funcion Update de User
const updateUser = async (req, res) => {
    try {
        const { username } = req.body
        await User.findByIdAndUpdate(req.params.id, { username });
        res.json({ message: `El usuario ${req.params.id} ha sido actualizada` })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Creo funcion delete User
const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: `El usuario ${req.params.id} ha sido eliminada` })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Exporto el modulo
module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}