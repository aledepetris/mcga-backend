import { Router } from 'express';
import { crearLibro, obtenerLibros, obtenerLibrPorId, eliminarLibroPorId, actualizarLibroPorId } from '../controller/librosController';
const router = Router();

router.get('', obtenerLibros);
router.get('/:id', obtenerLibrPorId);
router.post('', crearLibro);
router.put('/:id', actualizarLibroPorId);
router.delete('/:id', eliminarLibroPorId);

module.exports = router;