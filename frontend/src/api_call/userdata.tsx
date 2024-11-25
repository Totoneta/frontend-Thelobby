import { useEffect, useState } from "react";

const USERDATA_APIURL = "http://127.0.0.1:8000/api/Usuarios";

interface UsuarioData {
  nombre: string;
  apellido: string;
  fechadenacimiento: string;
  email: string;
}

export default function CallUserData() {

  const [data, setData] = useState<UsuarioData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const calluserdata = async () => {
      try {
        const response = await fetch(USERDATA_APIURL);

        if (!response.ok) {
          throw new Error(`Estado: ${response.status}`)
        }

        const respuesta = await response.json();
        setData(respuesta)

      } catch (error: any) {
        setError(`${error.message}`)
      } finally {
        setLoading(false)
      }
    }

    calluserdata()
  }, [])

}
