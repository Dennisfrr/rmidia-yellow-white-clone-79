import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import teamWorking from "@/assets/image2.png";
import crmInterface from "@/assets/image4.png";

const ModulesSection = () => {
  const modules = [
    {
      title: "ATENDIMENTO",
      description: "Nosso módulo de Atendimento é sinônimo de simplicidade e estabilidade. Centralize as conversas de WhatsApp, Instagram Direct e Messenger em uma única fila, supervisionando as suas equipes e os atendentes.",
      linkText: "Saber mais sobre Atendimento",
      image: teamWorking
    },
    {
      title: "CRM",
      description: "Integrado de forma impecável ao WhatsApp, o CRM não só otimiza seu funil de vendas, mas também a gestão de tarefas, colocando todas as interações cruciais ao seu alcance. Otimize o tempo de follow-up da sua equipe, acessando as conversas pelo funil.",
      linkText: "Saber mais sobre CRM",
      image: crmInterface
    },
    {
      title: "CHATBOT",
      description: "Com uma configuração descomplicada, você coloca o seu assistente virtual para trabalhar em minutos. Cada resposta fornecida pelo cliente torna-se parte integrante do contato, construindo uma qualificação do lead que acelera o processo de venda.",
      linkText: "Saber mais sobre Chatbot",
      image: teamWorking
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Com Rmidia ao seu lado, tenha mais eficiência, produtividade e sucesso garantido!
          </h2>
        </div>

        <div className="space-y-20">
          {modules.map((module, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className="flex-1">
                <div className="mb-4">
                  <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    {module.title}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {module.title}
                </h3>
                
                <p className="text-lg text-muted-foreground mb-6">
                  {module.description}
                </p>
                
                <Button 
                  variant="link" 
                  className="text-primary hover:text-accent p-0 h-auto font-semibold"
                >
                  {module.linkText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Image */}
              <div className="flex-1">
                <img 
                  src={module.image}
                  alt={module.title}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;