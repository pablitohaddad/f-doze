import React from 'react';
import { NavLink } from 'react-router-dom';

const MENU_ITEMS = [
  { label: 'Início', to: '/' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Ranking', to: '/ranking' },
  { label: 'Estudos', to: '/estudos' },
  { label: 'Jogar', to: '/jogar' }
];

export default function SiteMenu() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-white bg-gray-900 font-mono">
      <div className="relative mx-auto flex max-w-[1440px] items-center justify-center p-4">
        <NavLink to="/" className="absolute left-4 flex-shrink-0 text-xl font-bold tracking-tighter text-white">
          F<span className="text-blue-400">DOZE</span>
        </NavLink>

        <nav aria-label="Navegação principal" className="scrollbar-hide mx-16 flex items-center justify-center gap-2 overflow-x-auto px-1">
          {MENU_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="flex h-8 items-center whitespace-nowrap border border-white bg-gray-800 px-3 text-[10px] font-bold uppercase text-white shadow-[2px_2px_0_0_white] transition-all hover:translate-x-px hover:translate-y-px hover:shadow-none"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
