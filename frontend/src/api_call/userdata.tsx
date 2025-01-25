import { useEffect } from "react";
import axios from "axios";

/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./../redux/store";
import { setUsuario } from "./../redux/actions";
import { UsuarioData } from "../redux/reducers";


const USERDATA_APIURL = `http://127.0.0.1:8000/api/perfil/`;


export default function CallUserData() {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);
  const usuario = useSelector((state: RootState) => state.auth.usuario);

  useEffect(() => {
    if (usuario) return;

    const fetchUserData = async () => {
      try {
        const response = await axios.get(USERDATA_APIURL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        const usuarioinfo: UsuarioData = response.data;
        
        dispatch(setUsuario(usuarioinfo));
      } catch (error) {
        console.error("Error al obtener los datos del perfil", error);
      }
    };
    console.log(usuario);
    
    if (token) {
      fetchUserData();
    }
  }, [token, dispatch, usuario]);

  return null;
}
