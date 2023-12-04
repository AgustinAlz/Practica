const express = require('express'); 
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const usersRoutes = require('./routes/users.js');
const notesRoutes = require('./routes/notes.js');
require('dotenv').config();

const app = express();
app.set('port', process.env.PORT || PORT)
app.use(cors(corsOptions));
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