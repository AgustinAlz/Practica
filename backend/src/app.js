//import express from "express";
//import cors from "cors";
//"type": "module",

//import usersRoutes from "./routes/users.js";
//import notesRoutes from "./routes/notes.js";
//import { FRONTEND_URL } from "./config.js";
//require('dotenv').config();
const express = require('express'); 
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const usersRoutes = require('./routes/users.js');
const notesRoutes = require('./routes/notes.js');

const app = express();

/*app.use(
  cors({
    origin: "http://localhost:3000"
    origin: (origin, callback) => {
      if (!origin || origin === 'null') return callback(null, true);
      if (originsURL.indexOf(origin) === -1) {
          logger.warn('origin ' + origin + ' is not whitelisted')
          return callback(new Error('Not allowed by CORS'), false);
      }
      return callback(null, true);
      }
          //origin: "*",
    //methods: ['GET','POST','DELETE','UPDATE','PUT']
    //origin: FRONTEND_URL,
  })
);*/
const PORT = 4000;

app.set('port', process.env.PORT || PORT)

app.use(cors(corsOptions));
//app.use(cors());
app.use(express.json());

app.use("/api/notes", notesRoutes);
app.use("/api/users", usersRoutes);

/*if (process.env.NODE_ENV === "production") {
  const path = await import("path");
  app.use(express.static("client/dist"));

  app.get("*", (req, res) => {
    console.log(path.resolve("client", "dist", "index.html") );
    res.sendFile(path.resolve("client", "dist", "index.html"));
  });
}*/

//export default app;
module.exports = app;



/*//Importo el framework express
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
module.exports = app;*/