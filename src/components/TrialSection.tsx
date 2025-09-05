import { Button } from "@/components/ui/button";

const TrialSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Aproveite o Teste Grátis por 14 Dias e revolucione sua empresa!
          </h2>
          
          <p className="text-xl text-primary-foreground mb-8">
            Experimente nossa plataforma e transforme seu atendimento.
          </p>

          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold"
          >
            Quero fazer o teste grátis!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrialSection;