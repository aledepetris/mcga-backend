import { Router } from 'express';
const router = Router();

router.use('/libro', require('./librosRoutes'));

router.get('', (req, res) => {
  res.send('Servidor corriendo');
})

export default router;
