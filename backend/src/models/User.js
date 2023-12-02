//Requiero de la herramienta mongoose el schema y model
//const { Schema, model } = require('mongoose');
//import mongoose from "mongoose";
const mongoose = require('mongoose');

//creo el schema que es lo que se va guadan en la base datos con el nombre y tipo de dato y caracteristics.
 const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        trim: true,
        unique: true
    }
},{
    timestamp: true
});

//Exporto el modelo para utilizarlo en otros archivos
//module.exports = model('User', userSchema);
//export default mongoose.model("User", userSchema);
module.exports = mongoose.model('User', userSchema);