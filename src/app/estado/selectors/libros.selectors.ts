import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Libro } from 'src/app/lista-libros/modelos/libros.model';

export const selectLibros = createFeatureSelector<ReadonlyArray<Libro>>('libros');

export const selectColeccionEstado = createFeatureSelector<ReadonlyArray<string>>('coleccion');

export const selectColeccionLibros = createSelector(
    selectLibros,
    selectColeccionEstado,
    (libros, coleccion) => {
        return coleccion.map((id) => libros.find((libro) => libro.id === id));
    }
);