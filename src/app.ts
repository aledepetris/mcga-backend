import express, { Express } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';
import router from './routes/router'

config();
const URL_DB: string = process.env.MONGO_URL || '';
const PORT: number = parseInt(process.env.PORT || '3000');
const app: Express = express();

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(router);

mongoose.connect(URL_DB).then(() => {
  console.log('🟢 Base de datos conectada.');
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}).catch((err: any) => {
  console.log('🔴 Hubo un error al intentar conectarse a la base de datos.');
  console.log(err);
});

export default app;