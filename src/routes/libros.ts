import { Router } from "express";
import { crearLibro, obtenerLibros } from '../controller/librosController';
const router = Router();

router.get('', obtenerLibros);
router.get('/:id');
router.post('', crearLibro);
router.put('/:id');
router.delete('/:id');

module.exports = router;