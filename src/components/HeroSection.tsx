import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Send } from "lucide-react";
import crmInterface from "@/assets/crm-interface.png";
const HeroSection = () => {
  return <section className="bg-gradient-to-br from-white to-yellow-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Hero Content */}
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-primary">CRM via WhatsApp</span>
            <br />
            <span className="text-foreground">Para as conversas e o negócio andarem juntos</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            <strong>Conecte</strong> suas equipes com clientes e leads através de uma{" "}
            <strong>plataforma integrada ao WhatsApp</strong>, Instagram Direct e Facebook Messenger
          </p>

          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-accent px-8 py-6 text-lg rounded-full mb-16">
            Assistir demonstração
          </Button>

          {/* Social Media Icons */}
          <div className="flex justify-center items-center space-x-8 mb-16">
            <div className="flex items-center space-x-2">
              <Instagram className="w-8 h-8 text-pink-500" />
              
            </div>
            
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-8 h-8 text-green-500" />
              
            </div>
            
            <div className="flex items-center space-x-2">
              <Send className="w-8 h-8 text-blue-500" />
              
            </div>
          </div>

          {/* CRM Interface Image */}
          <div className="relative">
            <img src={crmInterface} alt="Interface do Rmidia CRM" className="rounded-lg shadow-2xl mx-auto max-w-4xl w-full" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;