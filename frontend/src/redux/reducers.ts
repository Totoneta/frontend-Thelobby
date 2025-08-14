/* Autenticación de usuario */
import { INICIO_EXITOSO, INICIO_FALLIDO, CERRAR_SESION } from "./actions";

interface AuthState {
  token: string | null;
  autenticado: boolean;
  error: string | null;
}
const initialStateAuth: AuthState = {
  token: null,
  autenticado: false,
  error: null,
};

export const AuthReducer = (
  state = initialStateAuth,
  action: any
): AuthState => {
  switch (action.type) {
    case INICIO_EXITOSO:
      return {
        ...state,
        token: action.payload.token,
        autenticado: true,
        error: null,
      };
    case INICIO_FALLIDO:
      return {
        ...state,
        token: null,
        autenticado: false,
        error: action.payload,
      };
    case CERRAR_SESION:
      return {
        ...state,
        token: null,
        autenticado: false,
        error: null,
      };
    default:
      return state;
  }
};

// ---------------------------------------------------------------

import { INFORMACION_RECIBIDA_EXITOSAMENTE, SET_USUARIO } from "./actions";

export interface UsuarioData {
  id: number | null;
  username: string | null;
  nombre: string | null;
  nacionalidad: string | null;
  juegoprimero: string | null;
  juegoprimeronivel: string | null;
}

const initialStateUser: UsuarioData = {
  id: null,
  username: null,
  nombre: null,
  nacionalidad: null,
  juegoprimero: null,
  juegoprimeronivel: null,
};

export const InfoUserReducer = (
  state = initialStateUser,
  action: any
): UsuarioData => {
  switch (action.type) {
    case INFORMACION_RECIBIDA_EXITOSAMENTE:
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        nacionalidad: action.payload.nacionalidad,
        nombre: action.payload.nombre,
        juegoprimero: action.payload.juegoprimero,
        juegoprimeronivel: action.payload.juegoprimeronivel,
      };
    case SET_USUARIO:
      return {
        ...state,
        username: action.payload.username,
        nacionalidad: action.payload.nacionalidad,
        nombre: action.payload.nombre,
        juegoprimero: action.payload.juegoprimero,
        juegoprimeronivel: action.payload.juegoprimeronivel,
      };
    case CERRAR_SESION:
      return {
        ...state,
        id: null,
        username: null,
        nacionalidad: null,
        nombre: null,
        juegoprimero: null,
        juegoprimeronivel: null,
      };
    default:
      return state;
  }
};
