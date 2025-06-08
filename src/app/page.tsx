"use client";

import Image from "next/image";
import { useState } from "react";
import { FaRegClock, FaBirthdayCake, FaTractor, FaHardHat, FaHeartbeat, FaBandAid, FaStethoscope, FaHandHoldingUsd } from "react-icons/fa";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-white">
      {/* Topo com background e menu */}
      <header
          className="relative w-full min-h-[350px] h-[500px] sm:h-[620px] lg:h-[750px] flex flex-col justify-between bg-cover bg-center lg:bg-[center_top_-60px]"
          style={{ backgroundImage: `url(/siteadv3/idosoBg.png)` }}
      >
        <nav className="flex justify-between items-center px-4 sm:px-8 py-4 sm:py-6 bg-black/40 backdrop-blur-sm relative z-10">
          <div className="flex items-center gap-2">
            {/* Sem logo */}
            <span className="text-xl font-bold bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 bg-clip-text text-transparent drop-shadow">Advocacia Previdenciária</span>
          </div>
          {/* Desktop menu */}
          <ul className="hidden sm:flex gap-4 sm:gap-8 text-white font-medium text-base sm:text-lg">
            <li><a href="#servicos" className="hover:underline">Serviços</a></li>
            <li><a href="#depoimentos" className="hover:underline">Depoimentos</a></li>
            <li><a href="#contato" className="hover:underline">Contato</a></li>
          </ul>
          {/* Mobile menu button */}
          <button
            className="sm:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-white border border-white/30 bg-black/30"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
          {/* Mobile menu dropdown */}
          {menuOpen && (
            <div className="absolute top-full right-4 mt-2 w-48 bg-white rounded shadow-lg flex flex-col py-2 animate-fade-in z-20">
              <a href="#servicos" className="px-6 py-3 text-gray-800 hover:bg-blue-100 border-b border-gray-100" onClick={() => setMenuOpen(false)}>Serviços</a>
              <a href="#depoimentos" className="px-6 py-3 text-gray-800 hover:bg-blue-100 border-b border-gray-100" onClick={() => setMenuOpen(false)}>Depoimentos</a>
              <a href="#contato" className="px-6 py-3 text-gray-800 hover:bg-blue-100" onClick={() => setMenuOpen(false)}>Contato</a>
            </div>
          )}
        </nav>
        <div className="flex flex-col items-center justify-center text-center text-white px-2 sm:px-4 py-8 sm:py-12 mt-24">
          <h1 className="text-2xl sm:text-5xl font-bold mb-4 drop-shadow">Seu Direito, Nossa Missão</h1>
          <p className="text-base sm:text-2xl max-w-2xl drop-shadow">Especialistas em aposentadorias, benefícios e defesa dos seus direitos.</p>
          <a href="#contato" className="mt-8 inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-900 transition">Fale com a Advogada</a>
        </div>
      </header>

      {/* Seção Nossos Serviços */}
      <section id="servicos" className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-800">Áreas de Atuação</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6 border border-gray-200 min-h-[420px] w-full max-w-[420px] mx-auto md:max-w-none">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Aposentadorias</h3>
            <div className="flex items-center gap-2 mb-2"><FaRegClock className="text-blue-700 text-xl" /><h4 className="font-semibold text-gray-700">Aposentadoria por tempo de contribuição</h4></div>
            <p className="text-gray-700 text-sm">Se você dedicou anos ao trabalho e busca garantir seu direito à aposentadoria, conte com minha experiência para analisar seu caso e orientar sobre a melhor estratégia para antecipar sua aposentadoria, sempre respeitando as regras vigentes.</p>
            <div className="flex items-center gap-2 mb-2"><FaBirthdayCake className="text-blue-700 text-xl" /><h4 className="font-semibold text-gray-700">Aposentadoria por Idade</h4></div>
            <p className="text-gray-700 text-sm">Aposentar-se com tranquilidade é um direito de todos. Auxilio meus clientes a entenderem os requisitos e a conquistarem a aposentadoria por idade, proporcionando segurança e estabilidade para o futuro.</p>
            <div className="flex items-center gap-2 mb-2"><FaTractor className="text-blue-700 text-xl" /><h4 className="font-semibold text-gray-700">Aposentadoria Rural</h4></div>
            <p className="text-gray-700 text-sm">Atendo trabalhadores rurais, agricultores familiares e pescadores artesanais, reconhecendo o valor de sua dedicação ao campo. Meu objetivo é garantir que todos os direitos previdenciários sejam respeitados.</p>
            <div className="flex items-center gap-2 mb-2"><FaHardHat className="text-blue-700 text-xl" /><h4 className="font-semibold text-gray-700">Aposentadoria Especial</h4></div>
            <p className="text-gray-700 text-sm">Profissionais expostos a condições insalubres ou perigosas têm direito à aposentadoria especial. Realizo a análise detalhada do seu histórico profissional para garantir o acesso a esse benefício diferenciado.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6 border border-gray-200 min-h-[420px] w-full max-w-[420px] mx-auto md:max-w-none">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Benefícios por Incapacidade</h3>
            <div className="flex items-center gap-2 mb-2"><FaHeartbeat className="text-blue-700 text-xl" /><h4 className="font-semibold text-gray-700">Auxílio-Doença</h4></div>
            <p className="text-gray-700 text-sm">Se você precisa se afastar do trabalho por motivo de saúde, ofereço suporte completo para solicitar o Auxílio-Doença, garantindo seus direitos e a proteção necessária neste momento delicado.</p>
            <div className="flex items-center gap-2 mb-2"><FaBandAid className="text-blue-700 text-xl" /><h4 className="font-semibold text-gray-700">Auxílio-Acidente</h4></div>
            <p className="text-gray-700 text-sm">Após um acidente que reduziu sua capacidade laboral, é fundamental buscar o Auxílio-Acidente. Atuo para que você receba o benefício e os valores retroativos a que tem direito.</p>
            <div className="flex items-center gap-2 mb-2"><FaStethoscope className="text-blue-700 text-xl" /><h4 className="font-semibold text-gray-700">Orientação para Perícia Médica</h4></div>
            <p className="text-gray-700 text-sm">A perícia médica do INSS pode ser um desafio. Com orientação especializada, aumento suas chances de aprovação e acompanho cada etapa do processo.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6 border border-gray-200 min-h-[420px] w-full max-w-[420px] mx-auto md:max-w-none">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">BPC/LOAS</h3>
            <div className="flex items-center gap-2 mb-2"><FaHandHoldingUsd className="text-blue-700 text-xl" /><h4 className="font-semibold text-gray-700">Benefício de Prestação Continuada</h4></div>
            <p className="text-gray-700 text-sm">O BPC/LOAS é um direito de pessoas idosas e pessoas com deficiência em situação de vulnerabilidade. Auxilio na análise dos requisitos e no processo para garantir esse benefício essencial.</p>
            <p className="text-gray-700 text-sm mt-2">Conte com minha atuação para enfrentar os desafios do INSS e conquistar a proteção social que você merece.</p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-12">
          <a href="#contato" className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-800 transition">Fale com a Advogada</a>
          <span className="block mt-2 text-gray-600">Atendimento online e presencial</span>
        </div>
      </section>

      {/* Seção Quem Sou Eu */}
      <section className=" px-4 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8" id="quem-sou-eu">
        <img src="/siteadv3/fotoAdvogada.jpg" alt="Foto da Advogada" width={320} height={320} className="rounded-lg shadow-lg object-cover w-[320px] h-[320px] object-top" />
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">Quem sou eu</h2>
          <p className="text-gray-700 text-lg">Sou advogada especialista em Direito Previdenciário, apaixonada por promover justiça social e garantir a dignidade de meus clientes. Com sólida experiência na área, dedico-me à defesa dos direitos de aposentados, pensionistas, trabalhadores urbanos e rurais. Meu compromisso é oferecer atendimento humanizado, orientação clara e soluções jurídicas eficazes, tanto em processos administrativos quanto judiciais. Estou pronta para lutar pelo seu direito à segurança e proteção social.</p>
        </div>
      </section>

      {/* Seção Depoimentos */}
      <section id="depoimentos" className="py-16 px-4 bg-gray-50 border-t border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-700">Depoimentos</h2>
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-6 rounded shadow">
            <div className="flex flex-col items-center">
              <img src="/siteadv3/google.svg" alt="Google" width={32} height={32} className="mb-1" />
              <div className="flex items-center gap-1 text-yellow-400 text-xl">★★★★★</div>
            </div>
            <div>
              <div className="font-semibold text-gray-700">Ana Paula Gomes Martins <span className="text-xs text-gray-500">2025-01-28</span></div>
              <p className="text-gray-700">Fui muito bem atendida, com atenção, agilidade e profissionalismo. Resolvi meu problema à distância, com total confiança no trabalho da Dra. Recomendo a todos que buscam uma advogada previdenciária comprometida!</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-6 rounded shadow">
            <div className="flex flex-col items-center">
              <img src="/siteadv3/google.svg" alt="Google" width={32} height={32} className="mb-1" />
              <div className="flex items-center gap-1 text-yellow-400 text-xl">★★★★★</div>
            </div>
            <div>
              <div className="font-semibold text-gray-700">Tania Silva <span className="text-xs text-gray-500">2025-01-24</span></div>
              <p className="text-gray-700">Profissional honesta, clara nas explicações e muito atenciosa. Recomendo o trabalho da Dra. para quem busca orientação previdenciária.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-6 rounded shadow">
            <div className="flex flex-col items-center">
              <img src="/siteadv3/google.svg" alt="Google" width={32} height={32} className="mb-1" />
              <div className="flex items-center gap-1 text-yellow-400 text-xl">★★★★★</div>
            </div>
            <div>
              <div className="font-semibold text-gray-700">Ezeli Martins de Lima <span className="text-xs text-gray-500">2025-01-23</span></div>
              <p className="text-gray-700">A Dra. foi muito atenciosa e eficiente. Só tenho a agradecer pelo excelente atendimento!</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-6 rounded shadow">
            <div className="flex flex-col items-center">
              <img src="/siteadv3/google.svg" alt="Google" width={32} height={32} className="mb-1" />
              <div className="flex items-center gap-1 text-yellow-400 text-xl">★★★★★</div>
            </div>
            <div>
              <div className="font-semibold text-gray-700">Leonardo Emmanuel Zanona Francisco <span className="text-xs text-gray-500">2025-01-22</span></div>
              <p className="text-gray-700">A Dra. sempre respondeu rápido, com educação e clareza. Esclareceu todas as minhas dúvidas sobre o INSS. Recomendo!</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-6 rounded shadow">
            <div className="flex flex-col items-center">
              <img src="/siteadv3/google.svg" alt="Google" width={32} height={32} className="mb-1" />
              <div className="flex items-center gap-1 text-yellow-400 text-xl">★★★★★</div>
            </div>
            <div>
              <div className="font-semibold text-gray-700">Daniel Souza Pereira <span className="text-xs text-gray-500">2025-01-16</span></div>
              <p className="text-gray-700">Atendimento excelente, todas as dúvidas esclarecidas com paciência e profissionalismo. Super recomendo a Dra.!</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-6 rounded shadow">
            <div className="flex flex-col items-center">
              <img src="/siteadv3/google.svg" alt="Google" width={32} height={32} className="mb-1" />
              <div className="flex items-center gap-1 text-yellow-400 text-xl">★★★★★</div>
            </div>
            <div>
              <div className="font-semibold text-gray-700">Rosi Da Luz <span className="text-xs text-gray-500">2024-12-18</span></div>
              <p className="text-gray-700">Profissional competente e dedicada. Obrigada Dra. por toda a atenção e pelo resultado alcançado!</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-6 rounded shadow">
            <div className="flex flex-col items-center">
              <img src="/siteadv3/google.svg" alt="Google" width={32} height={32} className="mb-1" />
              <div className="flex items-center gap-1 text-yellow-400 text-xl">★★★★★</div>
            </div>
            <div>
              <div className="font-semibold text-gray-700">Aderail Simioni <span className="text-xs text-gray-500">2024-12-09</span></div>
              <p className="text-gray-700">Profissional de confiança, sempre atenciosa e prestando informações claras sobre o andamento do processo. Recomendo!</p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center" id="contato">
          <a href="#contato" className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-800 transition">Fale com a Advogada</a>
          <span className="block mt-2 text-gray-600">Atendimento online e presencial</span>
        </div>
      </section>

      {/* Botão WhatsApp fixo */}
      <a
        href="https://wa.me/SEUNUMEROAQUI"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 rounded-full shadow-lg p-3 flex items-center justify-center"
        style={{ width: 56, height: 56 }}
        aria-label="Fale no WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 24 24">
          <path d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.22-1.63A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.77 0-3.5-.46-5.02-1.33l-.36-.21-3.69.97.99-3.59-.23-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
        </svg>
      </a>

      {/* Rodapé */}
      <footer className="w-full bg-gray-100 text-gray-600 text-xs text-center py-6 px-4 mt-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          Este site não é um produto Meta Platforms, Inc., Google LLC, tampouco oferece serviços públicos oficiais. Somos um escritório de advocacia, que oferece serviços jurídicos, privativos de advogados, de acordo com a legislação vigente e o Código de Ética e Disciplina da OAB do Brasil.<br className="hidden sm:block" />
          <span className="block mt-2">Desenvolvido por Kraftbrains Sistemas</span>
        </div>
      </footer>
    </div>
  );
}
