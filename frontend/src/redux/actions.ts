import { UsuarioData } from "./reducers";

//Autenticación de usuario
export const INICIO_EXITOSO = "LOGIN_SUCCESS";
export const INICIO_FALLIDO = "LOGIN_FAILURE";
export const CERRAR_SESION = "LOGOUT";

export const InicioExitoso = (token: string) => ({
  type: INICIO_EXITOSO,
  payload: {token},
});

export const InicioFallido = (error: string) => ({
  type: INICIO_FALLIDO,
  payload: error,
});

export const CerrarSesion = () => {
  return {
    type: CERRAR_SESION,
  };
};


// ---------------------------------------------------------------

//Informacion del usuario autenticado 
export const SET_USUARIO = "SET_USUARIO";
export const INFORMACION_RECIBIDA_EXITOSAMENTE = "INFORMACION_RECIBIDA_EXITOSAMENTE";

export const InformacionRecibidaExitosamente = (usuario: UsuarioData) => {
  return {
    type: INFORMACION_RECIBIDA_EXITOSAMENTE,
    payload: usuario,
  };
};

export const setUsuario = (usuario: any) => ({
  type: SET_USUARIO,
  payload: usuario,
});
