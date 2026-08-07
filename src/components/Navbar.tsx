import React, { useState } from 'react';
import { Menu, X, Calendar, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenAgendamento: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAgendamento,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Missão', href: '#missao' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Nosso Espaço', href: '#espaco' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#fbf8ff]/90 backdrop-blur-md border-b border-[#e4e1eb] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center group py-1">
          <img
            src="assets\Images\LOGO CTI AZUL.png"
            alt="Centro Terapêutico Integrar Logo AZUL"
            className="h-10 sm:h-20 w-auto object-contain group-hover:scale-105 transition-transform"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-[#1b1b22] hover:text-[#000061] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#000061] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={onOpenAgendamento}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-extrabold tracking-wider text-[#000061] uppercase bg-white border-2 border-[#000061] rounded-full hover:bg-[#000061] hover:text-white transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Agendar Consulta</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#000061] hover:bg-[#efecf6] rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-[#e4e1eb] px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-bold text-[#1b1b22] hover:bg-[#f5f2fc] hover:text-[#000061]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-[#e4e1eb] space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAgendamento();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-extrabold uppercase text-white bg-[#000061] rounded-full shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Consulta</span>
            </button>

            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase text-[#006782] bg-[#8edcfd]/30 rounded-full"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp CTI</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
