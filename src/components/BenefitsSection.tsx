import { Button } from "@/components/ui/button";
import { Target, Bot, TrendingUp, BarChart3 } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Target,
      title: "Centralize o atendimento",
      description: "Tenha visibilidade de toda a sua operação, supervisione seus atendentes e equipes, integrando os seus canais de comunicação."
    },
    {
      icon: Bot,
      title: "Automatize na medida certa",
      description: "Garanta respostas 24 horas por dia, 7 dias por semana. Crie fluxos de respostas automáticas, ofereça informações relevantes antes de um atendimento humano."
    },
    {
      icon: TrendingUp,
      title: "Acompanhe cada etapa",
      description: "Saiba em qual etapa da jornada o seu cliente ou lead está, resolva problemas de forma ágil, crie Kanbans e funis conforme a sua necessidade, sempre atrelado às conversas"
    },
    {
      icon: BarChart3,
      title: "Mensure a sua operação",
      description: "Tenha todas as métricas necessárias para gerir a sua operação, saiba a performance de times, departamentos e atendentes. Além de garantir rastreabilidade das suas conversões"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Transforme o WhatsApp da sua empresa em uma ferramenta poderosa
          </h2>
          <p className="text-xl text-muted-foreground">
            Garanta rápida resposta dos seus leads, filtrando por ordem de entrada e segmentando por vendedor. 
            Utilize nossa solução de campanhas para enviar mensagens em massa, enviando promoções e novos produtos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-accent px-8 py-4 rounded-full"
            onClick={() => window.open('https://wa.me/+5583986245525', '_blank')}
          >
            Falar com um especialista!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;