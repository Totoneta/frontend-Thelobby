import { INICIO_EXITOSO, INICIO_FALLIDO, CERRAR_SESION } from "./actions";

interface AuthState {
  token: string | null;
  autenticado: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  autenticado: false,
  error: null,
};

export const AuthReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    case INICIO_EXITOSO:
      return {
        ...state,
        token: action.payload,
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
