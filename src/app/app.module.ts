import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { coleccionReducer } from './estado/reducers/coleccion.reducers';
import { librosReducer } from './estado/reducers/libros.reducer';
import { ListaLibrosComponent } from './lista-libros/componentes/lista-libros/lista-libros.component';
import { ColeccionLibrosComponent } from './lista-libros/componentes/coleccion-libros/coleccion-libros.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    ListaLibrosComponent,
    ColeccionLibrosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      libros: librosReducer,
      coleccion: coleccionReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
      autoPause: true,
    }),
    UsuariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
