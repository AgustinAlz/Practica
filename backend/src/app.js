//Importo el framework express
const express = require('express'); 

// Pongo como requerido cors que me permite intercambiar datos con el FE
const cors = require('cors');

//Incializo el servidor y devuelve en una variable que denomino app (aplicacion)
const app = express(); 

//settings
//seccion configurar el servidores

//Defino el puerto como constante para no tener que cambiarlo en todos lados
const PORT = 4000;
// Defino el puerto de la aplicación, si existe en la variable de entorno la uso, sino el puerto definido en localmente
app.set('port', process.env.PORT || PORT);

//middlewares
// funciones que se ejecuten antes de las rutas

//Defino que utiliso cors
app.use(cors());
//configure que intercambie mediante json
app.use(express.json());

//routes
//rutas

//Ruta API Get /users/
app.use('/api/users', require('./routes/users'))
//Ruta API Get /notes/
app.use('/api/notes', require('./routes/notes'))

// exporto el modulo app porque lo incializo en el archivo index.js
module.exports = app;