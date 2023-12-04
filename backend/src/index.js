require('dotenv').config();
const app = require('./app');
const PORT = require('./config.js');
require('./database');

async function main() {
 try {
    await app.listen(PORT,'0.0.0.0');
    console.log(`Listening on port http://localhost:${PORT}`);
  } catch (error) {
    console.error(error);
  }
}

main();