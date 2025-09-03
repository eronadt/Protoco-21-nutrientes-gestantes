import React, { useState } from 'react';
import { motion } from 'framer-motion';

// TODO: Substituir pela URL real do checkout
const CHECKOUT_URL = "https://seu-checkout-aqui.com/pgb";

const ProtocoloGestanteBlindada: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const onCheckout = () => {
    window.location.href = CHECKOUT_URL;
  };

  const scrollToBeneficios = () => {
    document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Icons SVG
  const WalletIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zm14 3H2v5a2 2 0 002 2h12a2 2 0 002-2V7zM5 9a1 1 0 011-1h1a1 1 0 110 2H6a1 1 0 01-1-1zm5 0a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
  );

  const CheckIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );

  const ClockIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
    </svg>
  );

  const ShieldIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );

  const HeartIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    </svg>
  );

  const ListIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
  );

  const StarIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  const ChevronDownIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  const beneficios = [
    {
      icon: <ListIcon />,
      title: "Cardápios semanais por fase",
      description: "Planejamento alimentar completo para cada trimestre da gestação"
    },
    {
      icon: <WalletIcon />,
      title: "Lista de compras econômica",
      description: "Compre apenas o necessário com foco em custo-benefício"
    },
    {
      icon: <ClockIcon />,
      title: "Receitas express em 10 minutos",
      description: "Pratos nutritivos para rotina corrida sem complicação"
    },
    {
      icon: <ShieldIcon />,
      title: "Substituições inteligentes",
      description: "Troque ingredientes caros por opções acessíveis e nutritivas"
    },
    {
      icon: <HeartIcon />,
      title: "Suplementação essencial",
      description: "Guia objetivo sem exageros nem gastos desnecessários"
    },
    {
      icon: <CheckIcon />,
      title: "Checklist do bebê nutrido",
      description: "Acompanhamento simples para garantir desenvolvimento saudável"
    }
  ];

  const substituicoes = [
    { caro: "Salmão", acessivel: "Sardinha", nutriente: "Ômega-3, Cálcio" },
    { caro: "Quinoa", acessivel: "Arroz + Feijão", nutriente: "Aminoácidos + Ferro" },
    { caro: "Amêndoas", acessivel: "Amendoim", nutriente: "Gorduras boas, Proteína" },
    { caro: "Blueberry", acessivel: "Mamão/Abacaxi/Estação", nutriente: "Vitaminas + Fibras" }
  ];

  const depoimentos = [
    {
      nome: "Aline, 32",
      texto: "Eu achava que cuidar da alimentação na gravidez ia me falir. As trocas econômicas foram um divisor de águas. Tenho energia e sei que meu bebê está recebendo o melhor."
    },
    {
      nome: "Mariana, 27",
      texto: "Parecia impossível montar cardápio com os preços atuais. O protocolo me deu lista clara e receitas de 10 minutos. Economizei e fiquei tranquila."
    },
    {
      nome: "Luana, 30",
      texto: "O checklist semanal tirou minha ansiedade. Parei de comprar suplemento à toa e foquei no essencial."
    }
  ];

  const faqs = [
    {
      pergunta: "E se eu não tiver dinheiro para alimentos caros?",
      resposta: "Justamente por isso criamos o protocolo: substituições econômicas com o mesmo impacto nutricional."
    },
    {
      pergunta: "Preciso comprar suplementos caros?",
      resposta: "Não. Foco em alimentação inteligente e suplementação essencial, quando indicada."
    },
    {
      pergunta: "Tenho pouco tempo para cozinhar. Funciona?",
      resposta: "Sim. Receitas express em 10 minutos e cardápios para rotina corrida."
    },
    {
      pergunta: "Em quanto tempo tenho acesso?",
      resposta: "Imediatamente após a confirmação do pagamento, por e-mail."
    },
    {
      pergunta: "E se eu não gostar?",
      resposta: "Garantia de 7 dias. Risco zero."
    }
  ];

  return (
    <>
      {/* SEO Metadados (comentado para referência) */}
      {/*
        <title>Protocolo Gestante Blindada – Nutrição acessível para seu bebê</title>
        <meta name="description" content="Transforme cada refeição em um escudo de proteção para o seu bebê – com cardápios econômicos, substituições inteligentes e acesso imediato." />
        <meta property="og:title" content="Protocolo Gestante Blindada – Nutrição acessível para seu bebê" />
        <meta property="og:description" content="Transforme cada refeição em um escudo de proteção para o seu bebê – com cardápios econômicos, substituições inteligentes e acesso imediato." />
        <meta property="og:type" content="product" />
        JSON-LD:
        {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Protocolo Gestante Blindada",
          "description": "Programa completo com cardápios econômicos, substituições inteligentes e passo a passo simples para gestantes",
          "offers": {
            "@type": "Offer",
            "price": "97",
            "priceCurrency": "BRL"
          }
        }
      */}

      <div className="min-h-screen bg-white">
        {/* Barra de Alerta Econômica */}
        <div className="bg-emerald-600 text-white py-3 px-4 text-center text-sm md:text-base">
          <div className="flex items-center justify-center gap-2 max-w-6xl mx-auto">
            <WalletIcon />
            <span className="font-medium">
              Preços altos no mercado? O protocolo traz substituições econômicas para nutrir seu bebê sem estourar o orçamento.
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="px-4 py-12 md:py-20 max-w-6xl mx-auto text-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 text-teal-700 text-sm font-medium mb-6">
                <ShieldIcon />
                Protocolo Gestante Blindada
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transforme cada refeição em um{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  escudo de proteção
                </span>{' '}
                para o seu bebê
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Programa completo com cardápios econômicos, substituições inteligentes e passo a passo simples — 
                <strong className="text-emerald-600"> mesmo com os preços lá em cima.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.button
                  onClick={onCheckout}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-label="Entrar no Protocolo Gestante Blindada"
                >
                  Entrar no Protocolo Agora
                </motion.button>
                
                <button
                  onClick={scrollToBeneficios}
                  className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-emerald-50 transition-all duration-300"
                  aria-label="Ver como funciona"
                >
                  Ver como funciona
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-6 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckIcon />
                  </div>
                  <span>Acesso imediato</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                    <ShieldIcon />
                  </div>
                  <span>Garantia 7 dias</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                    <WalletIcon />
                  </div>
                  <span>Economia planejada</span>
                </div>
              </div>
            </motion.div>

            {/* Imagem Hero */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1556652/pexels-photo-1556652.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Gestante feliz preparando refeição saudável"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seção Benefícios */}
        <section id="beneficios" className="py-16 md:py-24 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                O que você ganha ao entrar no protocolo
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tranquilidade para a mãe, desenvolvimento saudável para o bebê e um mercado que cabe no bolso.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {beneficios.map((beneficio, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                    {beneficio.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {beneficio.title}
                  </h3>
                  <p className="text-gray-600">
                    {beneficio.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção Economia / Substituições */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Blindagem econômica na prática
                </h2>
                <p className="text-xl text-gray-600">
                  Prateleira cara? Aqui vai a troca inteligente para manter a nutrição do seu bebê em alta e o orçamento em ordem.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Mulher grávida fazendo compras no supermercado"
                  className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-emerald-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-emerald-900">Alimento Caro</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-emerald-900">Substituição Acessível</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-emerald-900">Nutriente-Chave</th>
                    </tr>
                  </thead>
                  <tbody>
                    {substituicoes.map((item, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 text-gray-900 font-medium">{item.caro}</td>
                        <td className="px-6 py-4 text-emerald-600 font-medium">{item.acessivel}</td>
                        <td className="px-6 py-4 text-gray-600">{item.nutriente}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <p className="text-sm text-gray-500">
                  *A lista completa vem dentro do protocolo, com opções por região e estação.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-16 md:py-24 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Histórias reais de tranquilidade
              </h2>
              <p className="text-xl text-gray-600">
                Depoimentos de gestantes que blindaram a nutrição e o orçamento.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {depoimentos.map((depoimento, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white p-6 rounded-2xl shadow-lg relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-emerald-50 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4 mx-auto border-4 border-emerald-100">
                      <img 
                        src={`https://images.pexels.com/photos/${index === 0 ? '1556652' : index === 1 ? '4099354' : '3768730'}/pexels-photo-${index === 0 ? '1556652' : index === 1 ? '4099354' : '3768730'}.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop`}
                        alt={`Foto de ${depoimento.nome}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{depoimento.texto}"
                  </blockquote>
                  <cite className="text-emerald-600 font-semibold not-italic">
                    {depoimento.nome}
                  </cite>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Oferta / Pricing */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* O que você recebe */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  O que você recebe
                </h2>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Cardápios por trimestre e semana",
                    "Lista de compras econômica (com alternativas)",
                    "Receitas express em 10 minutos",
                    "Guia de suplementação essencial (sem exageros)",
                    "Checklist do bebê nutrido (acompanhamento simples)",
                    "Bônus: Substituições baratas x alimentos da moda",
                    "Bônus: Supermercado Inteligente (evite armadilhas)"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckIcon />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                  <p className="text-emerald-800 font-medium">
                    💡 <strong>Nota econômica:</strong> Desenhado para o cenário atual do país — 
                    foco no essencial, sem superfoods caros, com substituições regionais.
                  </p>
                </div>
              </div>

              {/* Card de Preço */}
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3768730/pexels-photo-3768730.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Gestante sorrindo com alimentação saudável"
                    className="w-full h-full object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-gray-800/95"></div>
                </div>
                <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 text-white p-8 rounded-2xl shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Por menos do que uma ida ao mercado…
                  </h3>
                  <p className="text-gray-300">
                    Tenha acesso completo ao protocolo que vai blindar a nutrição do seu bebê sem quebrar o orçamento.
                  </p>
                </div>

                <motion.button
                  onClick={onCheckout}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-4"
                  aria-label="Garantir acesso ao Protocolo Gestante Blindada"
                >
                  Garantir Acesso Agora
                </motion.button>

                <p className="text-center text-sm text-gray-400">
                  Pagamento seguro. Acesso imediato por e-mail.
                </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Perguntas frequentes
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    aria-expanded={openFaq === index}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.pergunta}
                    </h3>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDownIcon />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === index ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p className="text-gray-600">{faq.resposta}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <img 
                  src="https://images.pexels.com/photos/1556652/pexels-photo-1556652.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                  alt="Gestante feliz com alimentação saudável"
                  className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-white/20 shadow-lg"
                />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Cuide do seu bebê desde a barriga — sem estourar o orçamento
              </h2>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Entre agora no Protocolo Gestante Blindada e tenha cardápios, listas e substituições prontas para usar.
              </p>
              <motion.button
                onClick={onCheckout}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-10 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Entrar no Protocolo Gestante Blindada"
              >
                Entrar Agora
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Rodapé */}
        <footer className="py-12 px-4 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold mb-4">
                <ShieldIcon />
                Protocolo Gestante Blindada
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Este material tem caráter informativo e não substitui acompanhamento profissional individualizado. 
              Em caso de condições específicas, consulte seu médico/nutricionista.
            </p>
          </div>
        </footer>

        {/* CTA Fixa Mobile */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg md:hidden z-50">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-900 text-sm">Protocolo Gestante Blindada</p>
              <p className="text-xs text-gray-600">Acesso imediato • Garantia 7 dias</p>
            </div>
            <motion.button
              onClick={onCheckout}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
              aria-label="Entrar no Protocolo Gestante Blindada"
            >
              Entrar
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProtocoloGestanteBlindada;