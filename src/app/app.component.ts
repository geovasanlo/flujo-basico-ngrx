import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { agregarLibro, almacenarListaLibros, obtenerListaLibros, removerLibro } from './estado/actions/libros.actions';
import { selectColeccionLibros, selectLibros } from './estado/selectors/libros.selectors';
import { Libro } from './lista-libros/modelos/libros.model';
import { LibrosService } from './lista-libros/servicios/libros.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngrx-prueba';
  libros$ = this.store.select<ReadonlyArray<Libro>>(selectLibros);
  coleccionLibros$ = this.store.select<ReadonlyArray<Libro | undefined>>(selectColeccionLibros);
  private indiceLibro = 0;
  private cantidadPagina = 5;

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.store.dispatch(obtenerListaLibros({
      indiceLibro: this.indiceLibro,
      cantidadPagina: this.cantidadPagina
    }));
  }

  enAgregar(idLibro: string) {
    this.store.dispatch(agregarLibro({ idLibro }));
  }

  enRemover(idLibro: string) {
    this.store.dispatch(removerLibro({ idLibro }));
  }

  cargarMas() {
    this.indiceLibro = this.indiceLibro + this.cantidadPagina;
    this.store.dispatch(obtenerListaLibros({
      indiceLibro: this.indiceLibro,
      cantidadPagina: this.cantidadPagina
    }));
  }

}
