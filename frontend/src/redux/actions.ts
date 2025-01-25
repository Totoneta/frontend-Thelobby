export const INICIO_EXITOSO = "LOGIN_SUCCESS";
export const INICIO_FALLIDO = "LOGIN_FAILURE";
export const CERRAR_SESION = "LOGOUT";
export const SET_USUARIO = "SET_USUARIO";

export const InicioExitoso = (token: string, usuario: string[]) => ({
  type: INICIO_EXITOSO,
  payload: { token, usuario },
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

export const setUsuario = (usuario: any) => ({
  type: SET_USUARIO,
  payload: usuario,
});
