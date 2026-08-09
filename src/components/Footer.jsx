import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t-4 border-white bg-gray-900 px-4 py-8 font-mono text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-xl font-black tracking-tighter">F<span className="text-blue-400">DOZE</span></div>
        <div className="flex gap-4">
          <NavLink to="/jogar" className="border-2 border-white bg-white px-3 py-1 text-xs font-black text-black transition-colors hover:bg-blue-400 hover:text-white">JOGAR</NavLink>
          <a href="https://github.com/pablitohaddad/f-doze" target="_blank" rel="noreferrer" className="border-2 border-white bg-white px-3 py-1 text-xs font-black text-black transition-colors hover:bg-gray-300">GITHUB</a>
          <NavLink to="/estudos" className="border-2 border-white bg-white px-3 py-1 text-xs font-black text-black transition-colors hover:bg-[#FFEB3B]">ESTUDOS</NavLink>
        </div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">© {new Date().getFullYear()} — Feito por Pablo Haddad</div>
      </div>
    </footer>
  );
}
