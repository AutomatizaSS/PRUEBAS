
import { Construction, Wrench, Clock } from "lucide-react";

interface UnderConstructionProps {
  title: string;
  description?: string;
}

const UnderConstruction = ({ title, description }: UnderConstructionProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 dark:from-gray-900 dark:to-orange-900 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="relative mb-8">
          <div className="animate-bounce">
            <Construction className="h-24 w-24 text-orange-500 mx-auto mb-4" />
          </div>
          <div className="absolute -top-2 -right-2 animate-spin">
            <Wrench className="h-8 w-8 text-orange-400" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
          {title}
        </h1>
        
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 shadow-lg animate-scale-in">
          <div className="flex items-center justify-center mb-4">
            <Clock className="h-6 w-6 text-orange-500 mr-2" />
            <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              En Construcción
            </span>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {description || "Estamos trabajando duro para traerte una experiencia increíble. ¡Vuelve pronto!"}
          </p>
          
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </div>
        
        <div className="mt-8">
          <a 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors hover-scale"
          >
            Volver al Inicio
          </a>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
