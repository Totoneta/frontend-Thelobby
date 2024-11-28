import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { InicioExitoso, InicioFallido } from '../../../redux/actions';
import { AppDispatch } from '../../../redux/store';
import { useNavigate } from 'react-router-dom';
import './formularioiniciarsesion.css'

export const FormularioIniciarSesion: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const data = { username, password };

        try {
            const response = await fetch('http://localhost:8000/sesion/iniciarsesion/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                dispatch(InicioExitoso(result.access));
                localStorage.setItem('token', result.access);
                navigate('/perfil');
            } else {
                dispatch(InicioFallido(result.error));
            }
        } catch (error) {
            alert('Error al iniciar sesión. Intente nuevamente más tarde.')
            dispatch(InicioFallido(`Hubo un error en el servidor: ${error}`));
        }
    };

    return (
        <form name='formularioiniciarsesion' onSubmit={handleLogin} className='formularioiniciarcontainer'>
            <div className='formularioiniciarusername'>
                <label htmlFor='usernameinput' >Usuario</label>
                <input
                    id='usernameinput'
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className='formularioiniciarpassword'>
                <label htmlFor='passwordinput' >Contraseña</label>
                <input
                    id='passwordinput'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Ingresar</button>
        </form>
    );
};

