import { createReducer, on } from '@ngrx/store';
import { removerLibro, agregarLibro } from 'src/app/estado/actions/libros.actions';

export const estadoInicial: ReadonlyArray<string> = [];

export const coleccionReducer = createReducer(
    estadoInicial,
    on(
        removerLibro,
        (estado, { idLibro }) => estado.filter((id) => id !== idLibro)
    ),
    on(
        agregarLibro,
        (estado, { idLibro }) => {
            if (estado.indexOf(idLibro) > -1) return estado;
            return [...estado, idLibro];
        }
    )
);