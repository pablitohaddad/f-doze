import React from 'react';
import { NavLink } from 'react-router-dom';

const highlights = [
  { number: '01', title: 'DevTools real', description: 'Inspecione, depure e entenda o browser.', color: 'bg-blue-400' },
  { number: '02', title: 'Ranking global', description: 'Seu tempo entra em disputa com outros jogadores.', color: 'bg-pink-400' },
  { number: '03', title: 'Estudos guiados', description: 'Cada fase aponta para conceitos de console, rede, storage e elementos.', color: 'bg-green-400' }
];

export default function HomePage() {
  return (
    <div className="space-y-14">
      <section className="grid items-center gap-12 bg-gray-900 p-6 text-white shadow-[10px_10px_0_0_#60A5FA] md:grid-cols-[1.15fr_.85fr] md:p-12">
        <div>
          <p className="mb-3 text-lg font-bold uppercase tracking-widest text-blue-400">// jogo de f12 :p</p>
          <h1 className="mb-6 text-5xl font-black uppercase leading-[.95] tracking-tighter md:text-7xl">APRENDA<br />DEVTOOLS<br /><span className="text-blue-400">JOGANDO_</span></h1>
          <p className="max-w-2xl border-l-4 border-white pl-4 text-base leading-relaxed text-gray-300 md:text-lg">O F-DOZE transforma o navegador em uma jornada prática com desafios gamificados.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <NavLink to="/jogar" className="border-2 border-black bg-blue-400 px-5 py-3 font-black uppercase text-black shadow-[4px_4px_0_0_white] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">Começar desafio _</NavLink>
            <NavLink to="/estudos" className="border-2 border-white bg-white px-5 py-3 font-black uppercase text-black shadow-[4px_4px_0_0_#60A5FA] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">Ver estudos</NavLink>
          </div>
        </div>
        <div className="border-4 border-white bg-white p-5 text-black shadow-[8px_8px_0_0_#60A5FA]">
          <p className="mb-5 border-b-4 border-black pb-3 text-xl font-black uppercase">./fluxo_do_projeto</p>
          <ol className="space-y-4 font-bold">
            <li><span className="mr-3 bg-yellow-400 px-2 py-1">01</span>Inicie o desafio e acompanhe seu tempo.</li>
            <li><span className="mr-3 bg-pink-400 px-2 py-1">02</span>Resolva pistas escondidas no navegador.</li>
            <li><span className="mr-3 bg-green-400 px-2 py-1">03</span>Veja se você entrou para o Top10</li>
          </ol>
        </div>
      </section>
      <section>
        <h2 className="mb-10 inline-block -rotate-1 border-4 border-black bg-[#FFEB3B] px-6 py-2 text-3xl font-black uppercase shadow-[6px_6px_0_0_#000] md:text-5xl">POR_QUE_JOGAR?</h2>
        <div className="grid gap-7 lg:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="border-4 border-black bg-white p-6 shadow-[8px_8px_0_0_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <span className={`mb-5 inline-block border-2 border-black px-3 py-1 text-xl font-black ${item.color}`}>{item.number}</span>
              <h3 className="text-2xl font-black uppercase tracking-tighter">{item.title}</h3>
              <p className="mt-3 font-medium leading-relaxed text-gray-700">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
