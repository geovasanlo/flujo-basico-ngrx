import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Libro } from '../modelos/libros.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  constructor(private http: HttpClient) { }

  obtenerLibros(cantidadPagina: number, indiceLibro = 0): Observable<Array<Libro>> {
    return this.http
      .get<any>(
        `https://www.googleapis.com/books/v1/volumes?maxResults=${cantidadPagina}&orderBy=relevance&q=oaxaca&startIndex=${indiceLibro}`
      )
      .pipe(
        map((books) =>
          books.items.map((book: any) => ({
            id: book.id,
            volumeInfo: {
              titulo: book.volumeInfo.title,
              autores: book.volumeInfo.authors
            }
          })) || []
        )
      );
  }
}
