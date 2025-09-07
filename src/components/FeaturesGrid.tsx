import { 
  Users, 
  MessageSquare, 
  Globe, 
  Send, 
  BarChart3, 
  Bot, 
  PieChart, 
  CreditCard, 
  Smartphone, 
  MousePointer, 
  Settings, 
  Target 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturesGrid = () => {
  const features = [
    {
      icon: Users,
      title: "Múltiplos atendentes e equipes"
    },
    {
      icon: MessageSquare,
      title: "Gestão das conversas"
    },
    {
      icon: Globe,
      title: "Múltiplos canais"
    },
    {
      icon: Send,
      title: "Disparo em massa"
    },
    {
      icon: BarChart3,
      title: "CRM"
    },
    {
      icon: Bot,
      title: "Chatbot"
    },
    {
      icon: PieChart,
      title: "Indicadores"
    },
    {
      icon: CreditCard,
      title: "Pagamentos"
    },
    {
      icon: Smartphone,
      title: "Mobile e Web"
    },
    {
      icon: MousePointer,
      title: "Botão de WhatsApp na Web"
    },
    {
      icon: Settings,
      title: "API de Integração"
    },
    {
      icon: Target,
      title: "Rastreabilidade do lead"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Potencialize a sua gestão com soluções exclusivas do Rmidia
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
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

export default FeaturesGrid;