const Footer = () => {
    return (
    <footer className="bg-light text-center py-3 mt-5">
        <p className="mb-0">&copy; 2025 Tu Empresa. Todos los derechos reservados.</p>
        <div>
        <a href="/terms" className="mx-2">Términos</a> |
        <a href="/privacy" className="mx-2">Privacidad</a> |
        <a href="/contact" className="mx-2">Contacto</a>
        </div>
    </footer>
    );
};

export default Footer;
