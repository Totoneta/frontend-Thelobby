import {
  INICIO_EXITOSO,
  INICIO_FALLIDO,
  CERRAR_SESION,
  SET_USUARIO,
} from "./actions";

/* Info de user */
export interface UsuarioData {
  username: string;
  nombre: string;
  nacionalidad: string;
}

/* Auth */
interface AuthState {
  token: string | null;
  autenticado: boolean;
  error: string | null;
  usuario: UsuarioData | null;
}
const initialState: AuthState = {
  token: null,
  autenticado: false,
  error: null,
  usuario: null,
};

export const AuthReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    case INICIO_EXITOSO:
    return {
        ...state,
        token: action.payload.token,
        autenticado: true,
        usuario: action.payload.usuario,
        error: null,
      };
    case INICIO_FALLIDO:
      return {
        ...state,
        token: null,
        autenticado: false,
        error: action.payload,
        usuario: null,
      };
    case CERRAR_SESION:
      return {
        ...state,
        token: null,
        autenticado: false,
        error: null,
        usuario: null,
      };
      case SET_USUARIO:
        return {
          ...state,
          usuario: action.payload,
        };
    default:
      return state;
  }
};
