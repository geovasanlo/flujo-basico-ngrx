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

export const cargarListaLibros = createAction(
    '[Lista Libros] Cargar Libros Desde API',
    props<{ libros: ReadonlyArray<Libro> }>()
);