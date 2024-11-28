import { useNavigate } from "react-router-dom";

export const INICIO_EXITOSO = "LOGIN_SUCCESS";
export const INICIO_FALLIDO = "LOGIN_FAILURE";
export const CERRAR_SESION = "LOGOUT";

export const InicioExitoso = (token: string) => ({
  type: INICIO_EXITOSO,
  payload: token,
});

export const InicioFallido = (error: string) => ({
  type: INICIO_FALLIDO,
  payload: error,
});

export const CerrarSesion = () => {
  localStorage.removeItem("token");
  return {
    type: CERRAR_SESION,
  };
};
