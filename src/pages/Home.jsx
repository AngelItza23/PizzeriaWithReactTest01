import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
    // Simulación de autenticación
    const isAuthenticated = localStorage.getItem('auth') === 'true';
    if (!isAuthenticated) {
        navigate('/');
    }
    }, []);

    return (
    <div className="container text-center mt-5">
        <h1 className="text-primary">Bienvenido al Home 🚀</h1>
        <p className="lead">Solo los usuarios autenticados pueden ver esto.</p>
        <button
            className="btn btn-danger"
            onClick={() => {
                localStorage.removeItem('auth');
                navigate('/');}}>
            Cerrar Sesión
        </button>
    </div>
    );
}

export default Home;

