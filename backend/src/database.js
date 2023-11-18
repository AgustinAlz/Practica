// importo libreria mongoose
const mongoose = require ('mongoose');

//defino la URL de la base de datos (en localhost puede conectarla y se crea sola)
//const URI = 'mongodb://127.0.0.1/merstack'
//Traigo la url de la base datos como variable de entorno
//const URI = process.env.MONGODB_URI; 
// si no existe la base de variable de entorno uso el localhost
const URI = process.env.MONGODB_URI 
    ? process.env.MONGODB_URI 
    :'mongodb://127.0.0.1/merstack'


//conecto la base de datos
mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true
});

//Defino en constante la coneccion de mongoose
const db = mongoose.connection;

//Si hay error, lo informo.
db.on('error',console.error.bind(console,'Error al conectar con la BD'));
//Si conecto, lo informo.
db.once('open', () => {
    console.log('DB is connected');
});