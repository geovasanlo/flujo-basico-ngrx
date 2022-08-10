import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Libro } from '../../modelos/libros.model';

@Component({
  selector: 'app-coleccion-libros',
  templateUrl: './coleccion-libros.component.html',
  styleUrls: ['./coleccion-libros.component.css']
})
export class ColeccionLibrosComponent implements OnInit {

  @Input() libros: ReadonlyArray<Libro | undefined> | null = [];
  @Output() remover = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
