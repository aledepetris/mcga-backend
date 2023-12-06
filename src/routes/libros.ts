import { Router } from "express";
import { crearLibro } from '../controller/librosController';
const router = Router();

router.get('');
router.get('/:id');
router.post('', crearLibro);
router.put('/:id');
router.delete('/:id');

module.exports = router;