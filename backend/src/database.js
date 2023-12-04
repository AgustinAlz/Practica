// importo libreria mongoose
const mongoose = require('mongoose');

//defino la URL de la base de datos (en localhost puede conectarla y se crea sola)
const URI = require('./config/databaseConnection')

  //conecto la base de datos
  mongoose.connect(URI)

  //Defino en constante la coneccion de mongoose
  const db = mongoose.connection;

  //Si hay error, lo informo.
  db.on('error', console.error.bind(console, 'Error al conectar con la BD'));
  //Si conecto, lo informo.
  db.once('open', () => {
    console.log('DB is connected');
  });
