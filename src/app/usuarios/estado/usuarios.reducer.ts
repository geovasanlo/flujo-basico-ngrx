import { createFeature, createReducer, on } from '@ngrx/store';
import { Usuario } from './usuario.model';
import * as UsuariosActions from './usuarios.actions';

export const usuariosFeatureKey = 'usuarios';

export interface State {
  usuarios: ReadonlyArray<Usuario>
}

export const initialState: State = {
  usuarios: []
};

export const usuariosFeature = createFeature({
  name: 'usuarios',
  reducer: createReducer(
    initialState,
    on(
      UsuariosActions.loadUsuarios,
      (estado, { usuarios }) =>
        ({ usuarios: estado.usuarios.concat(usuarios)})
    )
  )
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectUsuariosState, // feature selector
  selectUsuarios, // selector for `Usuarios` property
} = usuariosFeature;