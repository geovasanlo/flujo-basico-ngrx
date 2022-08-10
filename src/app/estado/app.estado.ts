import { Libro } from "../lista-libros/modelos/libros.model";

export interface EstadoApp {
  libros: ReadonlyArray<Libro>;
  coleccion: ReadonlyArray<string>;
}