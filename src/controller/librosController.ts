import { Request, Response } from 'express';
import LibroModel from '../models/libroModel';
import { Libro } from '../interfaces/libro';

export const crearLibro = (req: Request, res: Response) => {

    const libro: Libro = req.body;
    if (!libro.titulo || !libro.autor || !libro.isbn || !libro.genero || !libro.editorial || !libro.numPaginas ) {
        return res.status(400).json({ 
            errorCode: 'camposRequeridos',
            mensaje: 'Error al crear un nuevo libro: todos los campos son requeridos' 
        });
    }

    const nuevoLibro = new LibroModel(libro);

    nuevoLibro
    .save()
    .then(() => {
      res.status(201).json({
        mensaje: 'Producto creado',
        data: nuevoLibro,
      });
    })
    .catch((error) => {
      res.status(400).json({
        mensaje: error,
      });
    })
}


