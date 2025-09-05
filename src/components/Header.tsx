import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import rmidiaLogo from "@/assets/rmidia-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={rmidiaLogo} 
              alt="Rmidia CRM" 
              className="h-10 w-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                if (nextElement) {
                  nextElement.style.display = 'block';
                }
              }}
            />
            <div 
              className="text-2xl font-black text-primary hidden"
              style={{ fontFamily: 'Arial, sans-serif' }}
            >
              Rmidia CRM
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button className="bg-primary text-primary-foreground hover:bg-accent">
              Teste Grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2 pt-4">
                <Button className="bg-primary text-primary-foreground hover:bg-accent">
                  Teste Grátis
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;