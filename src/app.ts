const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const URL_DB = process.env.MONGO_URL;
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors({ origin: '*'}));


mongoose.connect(URL_DB).then(() => {
  console.log("🟢 Base de datos conectada.");

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  })
}).catch((err: any) => {
  console.log('🔴 Hubo un error al intentar conectarse a la base de datos.');
  console.log(err);
})

module.exports = app;