import express, { Express, Response } from 'express';
const app: Express = express();
const port = 3000;

app.use(express.json());

// Rutas de la app:
app.get('/', (req, res: Response) => {
    res.status(200).send({
      message: 'Server is up ✅'
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

export default app;