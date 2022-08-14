import { createAction, props } from '@ngrx/store';
import { Libro } from 'src/app/lista-libros/modelos/libros.model';

export const agregarLibro = createAction(
    '[Coleccion Libros] Agregar Libro',
    props<{ idLibro: string }>()
);

export const removerLibro = createAction(
    '[Coleccion Libros] Remover Libro',
    props<{ idLibro: string }>()
);

export const obtenerListaLibros = createAction(
    '[Lista Libros] Obtener Libros Desde API',
    props<{ indiceLibro: number, cantidadPagina: number }>()
);

export const almacenarListaLibros = createAction(
    '[Lista Libros] Almacenar Libros Store',
    props<{ libros: ReadonlyArray<Libro> }>()
);