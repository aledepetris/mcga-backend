import { Router } from 'express';
import { crearLibro, obtenerLibros, obtenerLibrPorId } from '../controller/librosController';
const router = Router();

router.get('', obtenerLibros);
router.get('/:id', obtenerLibrPorId);
router.post('', crearLibro);
router.put('/:id');
router.delete('/:id');

module.exports = router;