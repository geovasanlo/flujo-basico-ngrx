import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LibrosService } from 'src/app/lista-libros/servicios/libros.service';
import { almacenarListaLibros } from '../actions/libros.actions';

@Injectable()
export class LibrosEffects {

    constructor(
        private actions$: Actions,
        private librosService: LibrosService
    ) { }

    loadLibros$ = createEffect(() => this.actions$.pipe(
        ofType('[Lista Libros] Obtener Libros Desde API'),
        mergeMap(
            (props: { indiceLibro: number, cantidadPagina: number }) =>
                this.librosService.obtenerLibros(
                    props.cantidadPagina,
                    props.indiceLibro
                ).pipe(
                    map(libros => (almacenarListaLibros({ libros }))),
                    catchError(() => EMPTY)
                )
        )
    )
    );

}