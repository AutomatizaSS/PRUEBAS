
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">Tu Empresa</h3>
            <p className="text-gray-400">
              Soluciones profesionales de desarrollo web y tecnología para impulsar tu negocio.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-blue-400 transition-colors">Inicio</a></li>
              <li><a href="/nosotros" className="hover:text-blue-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="/servicios" className="hover:text-blue-400 transition-colors">Servicios</a></li>
              <li><a href="/contacto" className="hover:text-blue-400 transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="text-gray-400 space-y-2">
              <p>Email: info@tuempresa.com</p>
              <p>Teléfono: +34 123 456 789</p>
              <p>Dirección: Madrid, España</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
