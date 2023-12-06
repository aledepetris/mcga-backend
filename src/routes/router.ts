import { Router } from 'express';
const router = Router();

router.use('/libro', require('./librosRoutes.ts'));

router.get('', (req, res) => {
  res.send('Servidor corriendo');
})

export default router;
