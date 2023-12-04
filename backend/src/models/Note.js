//Requiero de la herramienta mongoose el schema y model
const mongoose = require('mongoose');

//creo el schema que es lo que se va guadan en la base datos con el nombre y tipo de dato y caracteristics.
 const noteSchema = new mongoose.Schema({
    title: String,
    content: {
        type: String,
        require: true
    },
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
},{
    timestamp: true
});

//Exporto el modelo para utilizarlo en otros archivos
module.exports = mongoose.model('Note', noteSchema);