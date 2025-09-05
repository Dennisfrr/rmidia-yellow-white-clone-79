import { Button } from "@/components/ui/button";
import teamWorking from "@/assets/image2.png";

const WhatsAppApiSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Tenha todas as vantagens da API Oficial do WhatsApp
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <img 
                src={teamWorking} 
                alt="API Oficial WhatsApp Rmidia"
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            <div className="flex-1">
              <p className="text-xl text-muted-foreground mb-8">
                Maior segurança e confiabilidade para seu negócio. Evite bloqueio permanente 
                do seu número e utilize a API Oficial para profissionalizar o seu atendimento.
              </p>
              
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-accent px-8 py-4 rounded-full"
              >
                Quero saber mais!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppApiSection;