
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import UnderConstruction from "@/components/UnderConstruction";

const Contacto = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <UnderConstruction 
        title="Contacto" 
        description="Muy pronto podrás contactarnos a través de nuestro formulario."
      />
      <Footer />
    </div>
  );
};

export default Contacto;
