import { Button } from "@/components/ui/button";
import crmInterface from "@/assets/image4.png";

const IntegrationsSection = () => {
  return (
    <section className="py-20 bg-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Integre o Rmidia ao seu negócio
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Utilize a nossa <strong>API e Webhooks</strong> para{" "}
            <strong>conectar com as suas plataformas</strong>. Possibilitando conexão 
            com Hubspot, RD Station, Pipedrive entre outras
          </p>

          <Button 
            variant="outline"
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-full mb-12"
          >
            Documentação de API
          </Button>

          <div className="relative">
            <img 
              src={crmInterface} 
              alt="Integre o Rmidia ao seu negócio"
              className="rounded-lg shadow-xl mx-auto max-w-3xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;