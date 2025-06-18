
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import UnderConstruction from "@/components/UnderConstruction";

const Login = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <UnderConstruction 
        title="Área de Acceso" 
        description="Estamos desarrollando un sistema de acceso seguro para nuestros clientes."
      />
      <Footer />
    </div>
  );
};

export default Login;
