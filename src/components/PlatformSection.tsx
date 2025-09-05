import { Button } from "@/components/ui/button";
import crmInterface from "@/assets/image1.png";

const PlatformSection = () => {
  return (
    <section className="py-20 bg-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            CRM e WhatsApp em uma única plataforma!
          </h2>
          
          <p className="text-lg text-muted-foreground mb-4 italic">
            See where your efforts are paying off and adjust your strategy.
          </p>
          
          <p className="text-xl text-foreground mb-8">
            <strong>Gestão de conversas</strong> e canais de atendimento com{" "}
            <strong>visão de funil</strong> em uma única plataforma? Agora é possível com o{" "}
            <strong>Rmidia CRM</strong>.
          </p>

          <p className="text-lg text-muted-foreground mb-8">
            <strong>Potencialize o seu atendimento</strong> e tenha visibilidade e acompanhamento 
            de todas as etapas do seu processo comercial, de suporte ou de projetos,{" "}
            <strong>desde a primeira conversa.</strong>
          </p>

          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-accent px-8 py-4 rounded-full mb-12"
          >
            Agendar uma demonstração
          </Button>

          <div className="relative">
            <img 
              src={crmInterface} 
              alt="CRM via WhatsApp Rmidia"
              className="rounded-lg shadow-xl mx-auto max-w-3xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;