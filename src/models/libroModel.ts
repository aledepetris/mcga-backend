import mongoose, { Schema } from 'mongoose';
import { Libro } from '../interfaces/libro';

const libroSchema = new Schema<Libro>({
  titulo: { type: String, required: true, unique: false, null: false},
  autor: { type: String, required: true, unique: false, null: false},
  isbn: { type: String, required: true, unique: true, null: false},
  genero: { type: String, required: true, unique: false, null: false},
  fechaPublicacion: { type: Date, required: true, unique: false, null: false},
  editorial: { type: String, required: true, unique: false, null: false},
  numPaginas: { type: Number, required: true, unique: false, null: false},
});

const LibroModel = mongoose.model<Libro>('Libro', libroSchema);
export default LibroModel;