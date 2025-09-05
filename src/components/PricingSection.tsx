import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Plano Start",
      price: "R$ 347",
      period: "/mês",
      users: "3 usuários",
      isPopular: false,
      gradient: "from-yellow-400 to-orange-400"
    },
    {
      name: "Plano Pro", 
      price: "R$ 487",
      period: "/mês",
      users: "5 usuários",
      isPopular: false,
      gradient: "from-yellow-400 to-orange-400"
    },
    {
      name: "Plano Business",
      price: "R$ 787", 
      period: "/mês",
      users: "10 usuários",
      isPopular: true,
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Plano Enterprise",
      price: "R$ 1.197",
      period: "/mês", 
      users: "20 usuários",
      isPopular: false,
      gradient: "from-yellow-400 to-orange-400"
    }
  ];

  const features = [
    "Central de Atendimento",
    "CRM", 
    "Disparo de Mensagem",
    "Distribuição automática de atendimento",
    "Carteiras de Cliente"
  ];

  const automationFeatures = [
    "Sequências",
    "Chatbot de Atendimento", 
    "Chatbot de Automação"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-yellow-100 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              {plan.isPopular && (
                <div className="absolute -top-3 -right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  Mais Escolhido
                </div>
              )}
              
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden h-full">
                {/* Header */}
                <div className={`bg-gradient-to-r ${plan.gradient} p-6 text-white`}>
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-lg opacity-90">{plan.period}</span>
                  </div>
                  <p className="text-lg opacity-90">{plan.users}</p>
                </div>

                {/* Features */}
                <div className="p-6 space-y-4">
                  {features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-800">{feature}</span>
                    </div>
                  ))}

                  {/* Automation Section */}
                  <div className="bg-yellow-400 rounded-2xl p-4 my-6">
                    <h4 className="font-bold text-gray-800 text-center">Automação</h4>
                  </div>

                  {automationFeatures.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-800">{feature}</span>
                    </div>
                  ))}

                  <div className="pt-6">
                    <Button 
                      variant="link" 
                      className="text-red-500 hover:text-red-600 p-0 h-auto font-semibold"
                    >
                      Ver detalhes
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;