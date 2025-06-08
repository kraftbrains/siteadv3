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
          className="relative w-full min-h-[350px] h-[500px] sm:h-[620px] lg:h-[750px] flex flex-col justify-between bg-cover bg-center lg:bg-[center_top]"
          style={{ backgroundImage: `url(/siteadv3/idosoBg.png)` }}
      >
        <nav className="flex justify-between items-center px-4 sm:px-8 py-4 sm:py-6 bg-black/40 backdrop-blur-sm relative z-10">
          <div className="flex items-center gap-2">
            {/* Sem logo */}
            <span className="text-white text-xl font-bold">Advocacia</span>
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
        <div className="flex flex-col items-center justify-center text-center text-white px-2 sm:px-4 py-8 sm:py-12">
          <h1 className="text-2xl sm:text-5xl font-bold mb-4 drop-shadow">Seu Direito, Nossa Missão</h1>
          <p className="text-base sm:text-2xl max-w-2xl drop-shadow">Especialistas em aposentadorias, benefícios e defesa dos seus direitos. Atendimento online e presencial com excelência e confiança.</p>
          <a href="#contato" className="mt-8 inline-block bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-200 transition">Fale com o Advogado</a>
        </div>
      </header>

      {/* Seção Nossos Serviços */}
      <section id="servicos" className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-800">Nossos Serviços</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6 border border-gray-200 min-h-[420px] w-full max-w-[420px] mx-auto md:max-w-none">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Aposentadorias</h3>
            <div className="flex items-center gap-2 mb-2"><FaRegClock className="text-blue-700 text-xl" /><h4 className="font-semibold text-gray-700">Aposentadoria por tempo de contribuição</h4></div>
            <p className="text-gray-700 text-sm">Você começou a trabalhar cedo e dedicou anos ao mercado de trabalho? A aposentadoria por tempo de contribuição pode ser o caminho ideal para você! Com regras específicas, essa modalidade permite que você antecipe sua aposentadoria e aproveite mais tempo ao lado da família ou realizando os seus sonhos.</p>
            <div className="flex items-center gap-2 mb-2"><FaBirthdayCake className="text-blue-700 text-xl" /><h4 className="font-semibold text-gray-700">Aposentadoria por Idade</h4></div>
            <p className="text-gray-700 text-sm">Esta é uma das modalidades mais acessíveis de aposentadoria e oferece a você a oportunidade de colher os frutos de anos de trabalho com segurança e estabilidade. Com regras específicas que consideram sua idade e o tempo de contribuição, é possível planejar sua aposentadoria e garantir um futuro mais tranquilo.</p>
            <div className="flex items-center gap-2 mb-2"><FaTractor className="text-blue-700 text-xl" /><h4 className="font-semibold text-gray-700">Aposentadoria Rural</h4></div>
            <p className="text-gray-700 text-sm">Este é um direito de quem trabalhou na roça, seja como agricultor familiar, pescador artesanal, seringueiro ou em outras atividades rurais. Com regras especiais e benefícios únicos, essa modalidade permite que você garanta um futuro tranquilo e seguro, reconhecendo todos os anos de esforço e dedicação ao campo.</p>
            <div className="flex items-center gap-2 mb-2"><FaHardHat className="text-blue-700 text-xl" /><h4 className="font-semibold text-gray-700">Aposentadoria Especial</h4></div>
            <p className="text-gray-700 text-sm">A aposentadoria especial foi criada para proteger quem atua em condições insalubres ou perigosas, permitindo que você se aposente com menos tempo de contribuição e sem precisar cumprir a idade mínima. Seja na indústria, na construção civil, na área da saúde ou em outras profissões de risco, esse é um direito que valoriza sua dedicação e cuida do seu futuro.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6 border border-gray-200 min-h-[420px] w-full max-w-[420px] mx-auto md:max-w-none">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Benefícios por Incapacidade</h3>
            <div className="flex items-center gap-2 mb-2"><FaHeartbeat className="text-blue-700 text-xl" /><h4 className="font-semibold text-gray-700">Auxílio-Doença</h4></div>
            <p className="text-gray-700 text-sm">Precisa se afastar do trabalho para cuidar da sua saúde? Saiba como solicitar o Auxílio-Doença e tenha acesso ao suporte necessário para atravessar esse momento com tranquilidade, sem comprometer sua segurança e bem-estar.</p>
            <div className="flex items-center gap-2 mb-2"><FaBandAid className="text-blue-700 text-xl" /><h4 className="font-semibold text-gray-700">Auxílio-Acidente</h4></div>
            <p className="text-gray-700 text-sm">Sofreu um acidente que afetou sua capacidade de trabalhar? Descubra como solicitar o Auxílio-Acidente e garantir um benefício que traz estabilidade financeira até a aposentadoria, incluindo o direito a valores retroativos. Não deixe de assegurar o futuro que você merece!</p>
            <div className="flex items-center gap-2 mb-2"><FaStethoscope className="text-blue-700 text-xl" /><h4 className="font-semibold text-gray-700">Orientação para Perícia Médica</h4></div>
            <p className="text-gray-700 text-sm">Enfrentando dificuldades na perícia do INSS? Nossa equipe especializada está pronta para te guiar em todas as etapas do processo, aumentando suas chances de aprovação e ajudando você a garantir o que é seu por direito.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6 border border-gray-200 min-h-[420px] w-full max-w-[420px] mx-auto md:max-w-none">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">BPC/LOAS</h3>
            <div className="flex items-center gap-2 mb-2"><FaHandHoldingUsd className="text-blue-700 text-xl" /><h4 className="font-semibold text-gray-700">Benefício de Prestação Continuada</h4></div>
            <p className="text-gray-700 text-sm">O Benefício de Prestação Continuada (BPC/LOAS) é um direito assistencial destinado a pessoas idosas com 65 anos ou mais e pessoas com deficiência em situação de baixa renda. Esse benefício assegura uma renda mensal mínima para atender às necessidades básicas de subsistência, proporcionando mais tranquilidade e qualidade de vida.</p>
            <p className="text-gray-700 text-sm mt-2">Descubra como acessar o BPC/LOAS e conte com o suporte necessário para enfrentar os desafios do dia a dia com mais segurança e dignidade. Nós estamos aqui para ajudar você a entender os requisitos e garantir o que é seu por direito.</p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-12">
          <a href="#contato" className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-800 transition">Fale com o Advogado</a>
          <span className="block mt-2 text-gray-600">Atendimento online e presencial</span>
        </div>
      </section>

      {/* Seção Depoimentos */}
      <section id="depoimentos" className="py-16 px-4 bg-gray-50 border-t border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-700">Depoimentos</h2>
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-6 rounded shadow">
            <div className="flex items-center gap-1 text-yellow-400 text-xl">★★★★★</div>
            <div>
              <div className="font-semibold text-gray-700">Ana Paula Gomes Martins <span className="text-xs text-gray-500">2025-01-28</span></div>
              <p className="text-gray-700">Foi Uma Experiência Muito Boa,Ótimo Atendimento,Sem contar na Agilidade em Resolver o meu Problema!! Imensamente Grata ao Dr Luis Felipe! Sou de Minas Gerais e consegui resolver tudo através do telefone com ele. Gratidão</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-6 rounded shadow">
            <div className="flex items-center gap-1 text-yellow-400 text-xl">★★★★★</div>
            <div>
              <div className="font-semibold text-gray-700">Tania Silva <span className="text-xs text-gray-500">2025-01-24</span></div>
              <p className="text-gray-700">Gostei muito do trabalho dele, sempre honesto, claro nas explicações, muito atencioso.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-6 rounded shadow">
            <div className="flex items-center gap-1 text-yellow-400 text-xl">★★★★★</div>
            <div>
              <div className="font-semibold text-gray-700">Ezeli Martins de Lima <span className="text-xs text-gray-500">2025-01-23</span></div>
              <p className="text-gray-700">Muito bem atendida graças a Deus</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-6 rounded shadow">
            <div className="flex items-center gap-1 text-yellow-400 text-xl">★★★★★</div>
            <div>
              <div className="font-semibold text-gray-700">Leonardo Emmanuel Zanona Francisco <span className="text-xs text-gray-500">2025-01-22</span></div>
              <p className="text-gray-700">Advogado atencioso, responde rápido com educação. Muito informativo e responde todas as dúvidas.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-6 rounded shadow">
            <div className="flex items-center gap-1 text-yellow-400 text-xl">★★★★★</div>
            <div>
              <div className="font-semibold text-gray-700">Daniel Souza pereira <span className="text-xs text-gray-500">2025-01-16</span></div>
              <p className="text-gray-700">Foi ótimo o atendimento dr Luiz Felipe Mariano muito atencioso tirou todas as minhas dúvidas super recomendo</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-6 rounded shadow">
            <div className="flex items-center gap-1 text-yellow-400 text-xl">★★★★★</div>
            <div>
              <div className="font-semibold text-gray-700">Rosi Da luz <span className="text-xs text-gray-500">2024-12-18</span></div>
              <p className="text-gray-700">Recomendo a quem precisar o advogado Luiz Felipe Mariano, muito competente. Obrigada Luiz Felipe por essa conquista.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-6 rounded shadow">
            <div className="flex items-center gap-1 text-yellow-400 text-xl">★★★★★</div>
            <div>
              <div className="font-semibold text-gray-700">ADERAIL SIMIONI <span className="text-xs text-gray-500">2024-12-09</span></div>
              <p className="text-gray-700">É um profissional de confiança, atencioso com os clientes, e sempre dando retorno conforme o andamento de seu trabalho.</p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center" id="contato">
          <a href="#contato" className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-800 transition">Fale com o Advogado</a>
          <span className="block mt-2 text-gray-600">Atendimento online e presencial</span>
        </div>
      </section>
    </div>
  );
}
