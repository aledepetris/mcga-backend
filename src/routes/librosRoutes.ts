import { Router } from 'express';
import { crearLibro, obtenerLibros, obtenerLibrPorId, eliminarLibro } from '../controller/librosController';
const router = Router();

router.get('', obtenerLibros);
router.get('/:id', obtenerLibrPorId);
router.post('', crearLibro);
router.put('/:id');
router.delete('/:id', eliminarLibro);

module.exports = router;