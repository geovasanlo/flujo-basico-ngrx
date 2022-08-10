import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Libro } from '../../modelos/libros.model';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {

  @Input() libros: ReadonlyArray<Libro> | null = [];
  @Output() agregar = new EventEmitter<string>();
  @Output() mas = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
