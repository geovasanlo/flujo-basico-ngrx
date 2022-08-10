import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from '../../estado/usuario.model';
import { loadUsuarios } from '../../estado/usuarios.actions';
import { State, usuariosFeature } from '../../estado/usuarios.reducer';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios$ = this.store.select<ReadonlyArray<Usuario>>(usuariosFeature.selectUsuarios);

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.store.dispatch(loadUsuarios({usuarios: [
      {nombre: 'Eduardo', fechaNacimiento: new Date('11/22/1996'), genero: 'H'},
      {nombre: 'Juan', fechaNacimiento: new Date('05/05/1996'), genero: 'H'},
      {nombre: 'Pedro', fechaNacimiento: new Date('04/04/1996'), genero: 'H'},
    ]}));
  }

}
