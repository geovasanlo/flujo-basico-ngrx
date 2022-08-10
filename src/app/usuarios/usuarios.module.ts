import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { usuariosFeature } from './estado/usuarios.reducer';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';



@NgModule({
  declarations: [
    ListaUsuariosComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(usuariosFeature)
  ],
  exports: [
    ListaUsuariosComponent
  ]
})
export class UsuariosModule { }
