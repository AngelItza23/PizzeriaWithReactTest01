import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login() {
    const navigate = useNavigate(); // Para redirigir después de iniciar sesión
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
    e.preventDefault();

    // Simulación de autenticación (reemplazar con API real)
    if (email === 'admin@gmail.com' && password === '123456') {
        Swal.fire({
        title: '¡Bienvenido!',
        text: 'Inicio de sesión exitoso',
        icon: 'success',
        });
        localStorage.setItem('auth', 'true');
      navigate('/home'); // Redirigir a la página principal
    } else {
        Swal.fire({
        title: 'Error',
        text: 'Credenciales incorrectas',
        icon: 'error',
        });
    }
    };

    return (
    <div className="container mt-5 d-flex justify-content-center">
        <div className="card p-4" style={{ width: '400px' }}>
        <h2 className="text-center">Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
            <div className="mb-3">
            <label className="form-label">Correo Electrónico</label>
            <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>
        <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
            <button type="submit" className="btn btn-primary w-100">
                Iniciar Sesión
            </button>
        </form>
        </div>
    </div>
    );
}

export default Login;
