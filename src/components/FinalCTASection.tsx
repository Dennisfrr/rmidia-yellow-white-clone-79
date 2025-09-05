import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Send } from "lucide-react";
import crmInterface from "@/assets/image1.png";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-primary">CRM via WhatsApp</span>
            <br />
            <span className="text-foreground">para as conversas e o negócio andarem juntos</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            <strong>Conecte</strong> suas equipes com clientes e leads através de uma{" "}
            <strong>plataforma integrada ao WhatsApp</strong>, Instagram Direct e Facebook Messenger
          </p>

          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-accent px-8 py-4 rounded-full mb-12"
          >
            Quero conhecer o Rmidia
          </Button>

          {/* Social Media Icons */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="flex items-center space-x-2">
              <Instagram className="w-8 h-8 text-pink-500" />
              <Instagram className="w-8 h-8 text-pink-500" />
            </div>
            
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-8 h-8 text-green-500" />
              <MessageCircle className="w-8 h-8 text-green-500" />
            </div>
            
            <div className="flex items-center space-x-2">
              <Send className="w-8 h-8 text-blue-500" />
              <Send className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          <div className="text-center">
            <img 
              src={crmInterface} 
              alt="CRM via WhatsApp Mobile"
              className="rounded-lg shadow-lg mx-auto max-w-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;