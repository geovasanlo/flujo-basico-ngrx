import { createReducer, on } from '@ngrx/store';
import { Libro } from 'src/app/lista-libros/modelos/libros.model';
import { almacenarListaLibros } from 'src/app/estado/actions/libros.actions';


export const estadoInicial: ReadonlyArray<Libro> = [];

export const librosReducer = createReducer(
    estadoInicial,
    on(almacenarListaLibros, (estado, { libros }) => estado.concat(libros))
);