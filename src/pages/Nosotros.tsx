
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import UnderConstruction from "@/components/UnderConstruction";

const Nosotros = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <UnderConstruction 
        title="Sobre Nosotros" 
        description="Pronto conocerás más sobre nuestro equipo y nuestra historia."
      />
      <Footer />
    </div>
  );
};

export default Nosotros;
