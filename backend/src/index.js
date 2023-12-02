//import app from "./app.js";
//import { PORT } from "./config.js";
//import { connectDB } from "./database.js";

require('dotenv').config();
const app = require('./app');
const PORT = process.env.PORT || '4000';
//const PORT = require('./config.js');
require('./database');


async function main() {
//  try {
//    await connectDB();
    //await app.listen(app.get('port'),'0.0.0.0');
    await app.listen(4000,'0.0.0.0');
    //app.listen(PORT,'0.0.0.0');
    console.log(`Listening on port http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`)
  /*} catch (error) {
    console.log("error");
    console.error(error);
  }*/
}

main();


//importo variables de entorno primero antes de que inicie la aplciación para que esten disponibles
/*require('dotenv').config();

//Importo desde app y lo almacena en una variable app (pasamanos para no tener en el mismo archivo)
const app = require('./app');

// Hace la conexión a la base de datos
require('./database');

//Defino el puerto como constante para no tener que cambiarlo en todos lados
//const PORT = 4000;//No lo uso ya lo obtengo de app.get('port')

// pongo una funcion main async con await
async function main(){
    //Digo que el servidor inicialize en el puerto defindo en la variable PORT
    //await app.listen(PORT);
    await app.listen(app.get('port'));
    //muestro mensaje
    console.log(`Sever en ejecución en el puerto ${app.get('port')}`);
}

//Ejecuta main por defecto
main();
*/