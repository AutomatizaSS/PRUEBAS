
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import UnderConstruction from "@/components/UnderConstruction";

const Servicios = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <UnderConstruction 
        title="Nuestros Servicios" 
        description="Estamos preparando una lista completa de nuestros servicios profesionales."
      />
      <Footer />
    </div>
  );
};

export default Servicios;
