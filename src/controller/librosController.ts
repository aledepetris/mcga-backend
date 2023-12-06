import { Request, Response } from 'express';
import LibroModel from '../models/libroModel';
import { Libro } from '../interfaces/libro';

export const obtenerLibros = (req: Request, res: Response) => {

  LibroModel.find()
    .then((libros) => {
      res.json(libros);
    });
}

export const obtenerLibrPorId = (req: Request, res: Response) => {
  
  LibroModel.findById(req.params.id)
    .then((libro) => {
      if (!libro) {
        return res.status(404).json({ 
          errorCode: 'libroNoEncontrado',
          mensaje: 'No se encontró el libro con el id proporcionado.' 
        })
      }
      res.json(libro);
    });
}

export const crearLibro = (req: Request, res: Response) => {

    const libro: Libro = req.body;
    if (!libro.titulo || !libro.autor || !libro.isbn || !libro.genero || !libro.editorial || !libro.numPaginas ) {
        return res.status(400).json({ 
            errorCode: 'camposRequeridos',
            mensaje: 'Error al crear un nuevo libro, todos los campos son requeridos' 
        });
    }

    const nuevoLibro = new LibroModel(libro);

    nuevoLibro.save()
      .then(() => {
        res.status(201).json(nuevoLibro);
      })
      .catch((error) => {
        res.status(500).json({
          errorCode: 'errorGenerico',
          mensaje: error,
        });
      })
}

export const eliminarLibro = (req: Request, res: Response) => {
  
  LibroModel.findByIdAndDelete(req.params.id)
    .then((libro) => {
      if (!libro) {
        return res.status(404).json({ 
          errorCode: 'libroNoEncontrado',
          mensaje: 'No se encontró el libro con el id proporcionado.' 
        });
      }
      res.status(204).end();
    })
    .catch((error) => {
      res.status(500).json({
        errorCode: 'errorGenerico',
        mensaje: error,
      });
    });
}


