import { createAction, props } from '@ngrx/store';
import { Usuario } from './usuario.model';

export const loadUsuarios = createAction(
  '[Usuarios] Load Usuarios',
  props<{ usuarios: ReadonlyArray<Usuario> }>()
);
