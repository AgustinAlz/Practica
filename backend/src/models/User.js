//Requiero de la herramienta mongoose el schema y model
const { Schema, model } = require('mongoose');

//creo el schema que es lo que se va guadan en la base datos con el nombre y tipo de dato y caracteristics.
 const userSchema = new Schema({
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
module.exports = model('User', userSchema);