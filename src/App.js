import React, { useState, useEffect } from 'react';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    servico: '',
    mensagem: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slides do carrossel - Imagens industriais/metálicas
  const heroSlides = [
    {
      id: 1,
      title: 'Calhas e Rufos Industriais',
      subtitle: 'Fabricação e instalação com aço galvanizado de alta qualidade',
      image: '/images/Rufos.jpg',
      cta: 'Solicitar Orçamento'
    },
    {
      id: 2,
      title: 'Estruturas Metálicas Sob Medida',
      subtitle: 'Projetos personalizados para indústrias e comércios',
      image: '/images/Estrutura.jpg',
      cta: 'Solicitar Orçamento'
    },
    {
      id: 3,
      title: 'Coifas e Exaustão Industrial',
      subtitle: 'Sistemas de ventilação profissional para sua empresa',
      image: '/images/Coifa.jpg',
      cta: 'Solicitar Orçamento'
    },
    {
      id: 4,
      title: 'Serralheria Artística',
      subtitle: 'Portões, grades e peças decorativas em metal',
      image: '/images/Artisitico.jpg',
      cta: 'Solicitar Orçamento'
    }
  ];

  // Verificar se está em dispositivo móvel
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Carrossel automático
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Navegação do carrossel
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Fechar menu ao clicar em um link
  const handleNavClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Função para enviar formulário de orçamento
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Criar mensagem para WhatsApp - ORÇAMENTO
    const whatsappMessage = `Olá RL Calhas Serralheria! Gostaria de solicitar um orçamento.%0A%0A` +
      `*Nome:* ${formData.nome}%0A` +
      `*E-mail:* ${formData.email}%0A` +
      `*Telefone:* ${formData.telefone}%0A` +
      `*Cidade:* ${formData.cidade || 'Não informada'}%0A` +
      `*Tipo de Serviço:* ${formData.servico}%0A` +
      `*Detalhes:* ${formData.mensagem || 'Sem detalhes adicionais'}`;
    
    // Número da empresa
    const whatsappNumber = '5547997750571';
    
    // Abrir WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    
    // Resetar formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      cidade: '',
      servico: '',
      mensagem: ''
    });
    
    // Mostrar mensagem de sucesso
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  // Função para solicitar orçamento de serviço específico
  const solicitarOrcamentoServico = (nomeServico) => {
    const whatsappMessage = `Olá RL Calhas Serralheria! Gostaria de solicitar um orçamento para o serviço de *${nomeServico}*.%0A%0APoderia me passar mais informações sobre valores, disponibilidade e como funciona a contratação?`;
    
    const whatsappNumber = '5547997750571';
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  // Função para abrir WhatsApp com mensagem do HERO
  const openWhatsAppHero = () => {
    const whatsappMessage = `Olá RL Calhas Serralheria! Vi o site de vocês e gostaria de mais informações sobre os serviços de serralheria e calhas. Podem me ajudar?`;
    
    const whatsappNumber = '5547997750571';
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  // Função para abrir WhatsApp - Serviço Personalizado
  const openWhatsAppPersonalizado = () => {
    const whatsappMessage = `Olá RL Calhas Serralheria! Preciso de um serviço de serralheria que não encontrei listado no site. Gostaria de conversar sobre uma solução personalizada. Podem me atender?`;
    
    const whatsappNumber = '5547997750571';
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  // Função para abrir WhatsApp - Botão Flutuante
  const openWhatsAppFlutuante = () => {
    const whatsappMessage = `Olá RL Calhas Serralheria! Gostaria de solicitar um orçamento para serviços de calhas e serralheria.`;
    
    const whatsappNumber = '5547997750571';
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  // Função para rolar para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    handleNavClick();
  };

  // Função para abrir o Instagram
  const openInstagram = () => {
    window.open('https://www.instagram.com/rlserralheria.oficial?utm_source=qr&igsh=bjUwMHA4cWxjc3dx', '_blank');
  };

  // Serviços da RL Calhas Serralheria
  const services = [
    {
      id: 1,
      name: 'Calhas Industriais',
      description: 'Fabricação e instalação de calhas em aço galvanizado, zinco e alumínio',
      image: '/images/Rufos.jpg'
    },
    {
      id: 2,
      name: 'Rufos e Rufões',
      description: 'Sistemas de rufos para telhados com acabamento perfeito e durabilidade',
      image: '/images/rufoss.jpg'
    },
    {
      id: 3,
      name: 'Coifas Industriais',
      description: 'Coifas em aço inox para restaurantes e indústrias alimentícias',
      image: '/images/Coifa.jpg'
    },
    {
      id: 4,
      name: 'Dutos e Chaminés',
      description: 'Instalação de dutos de ventilação e chaminés industriais',
      image: '/images/Dutos.jfif'
    },
    {
      id: 5,
      name: 'Sistemas de Exaustão',
      description: 'Projeto e instalação de sistemas de exaustão para ambientes industriais',
      image: '/images/Sistema.webp'
    },
    {
      id: 6,
      name: 'Eólicos Industriais',
      description: 'Instalação de exaustores eólicos para ventilação natural',
      image: '/images/exaustor.png'
    },
    {
      id: 7,
      name: 'Telhados Metálicos',
      description: 'Coberturas metálicas industriais e residenciais com garantia',
      image: '/images/telhados.webp'
    },
    {
      id: 8,
      name: 'Estruturas Metálicas',
      description: 'Galpões, mezaninos e estruturas metálicas sob medida',
      image: '/images/Estrutura.jpg'
    },
    {
      id: 9,
      name: 'Serralheria Artística',
      description: 'Portões, grades, corrimãos e peças decorativas em metal',
      image: '/images/Artisitico.jpg'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Carlos Mendes',
      text: 'Contratei a RL para fazer as calhas do meu galpão industrial. Trabalho impecável, material de primeira e equipe muito profissional. Recomendo!',
      rating: 5,
      city: 'Camboriú'
    },
    {
      id: 2,
      name: 'Patrícia Almeida',
      text: 'Precisava de uma estrutura metálica para minha oficina. Fizeram um projeto personalizado, executaram com precisão e dentro do prazo. Excelente serviço!',
      rating: 5,
      city: 'Balneário Camboriú'
    },
    {
      id: 3,
      name: 'Roberto Santos',
      text: 'Instalação do sistema de exaustão do meu restaurante. Trabalho limpo, organizado e com eficiência comprovada. Estou muito satisfeito!',
      rating: 5,
      city: 'Itajaí'
    }
  ];

  const whyChooseUs = [
    {
      id: 1,
      title: '15+ Anos de Experiência',
      description: 'Tradição e expertise no mercado de calhas e serralheria'
    },
    {
      id: 2,
      title: 'Materiais de Qualidade',
      description: 'Trabalhamos apenas com aço galvanizado, inox e alumínio premium'
    },
    {
      id: 3,
      title: 'Projetos Personalizados',
      description: 'Desenvolvemos soluções sob medida para cada necessidade'
    },
    {
      id: 4,
      title: 'Garantia nos Serviços',
      description: 'Todos nossos trabalhos possuem garantia de qualidade e durabilidade'
    },
    {
      id: 5,
      title: 'Equipe Especializada',
      description: 'Profissionais qualificados e com vasta experiência industrial'
    }
  ];

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo-container">
            <div className="logo">
              <img 
                src='/images/Logo.png' 
                alt='Logo RL Calhas Serralheria'
                className="logo-image"
              />
            </div>
          </div>
          
          {/* Botão do menu hamburger (visível apenas no mobile) */}
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); handleNavClick(); }}>Início</a>
            <a href="#servicos" onClick={handleNavClick}>Serviços</a>
            <a href="#sobre" onClick={handleNavClick}>Sobre Nós</a>
            <a href="#avaliacoes" onClick={handleNavClick}>Avaliações</a>
            <a href="#contato" onClick={handleNavClick} className="nav-cta">Solicitar Orçamento</a>
          </nav>
        </div>
      </header>

      {/* Hero Section - Carrossel */}
      <section className="hero-carousel">
        <div className="carousel-container">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="carousel-overlay"></div>
              <div className="container">
                <div className="carousel-content">
                  <h1 className="carousel-title">{slide.title}</h1>
                  <p className="carousel-subtitle">{slide.subtitle}</p>
                  <div className="carousel-buttons">
                    <a href="#contato" className="btn btn-primary" onClick={handleNavClick}>
                      {slide.cta}
                    </a>
                    <button className="btn btn-secondary" onClick={openWhatsAppHero}>
                      💬 WhatsApp Rápido
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Controles do carrossel */}
          <button className="carousel-control prev" onClick={prevSlide} aria-label="Anterior">
            ❮
          </button>
          <button className="carousel-control next" onClick={nextSlide} aria-label="Próximo">
            ❯
          </button>
          
          {/* Indicadores */}
          <div className="carousel-indicators">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="section servicos">
        <div className="container">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">Soluções completas em calhas, serralheria e estruturas metálicas</p>
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.name} />
                  <div className="service-overlay">
                    <button 
                      className="btn-service-quick"
                      onClick={() => solicitarOrcamentoServico(service.name)}
                    >
                      Solicitar Orçamento
                    </button>
                  </div>
                </div>
                <div className="service-info">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Serviço Personalizado */}
          <div className="cta-container">
            <div className="cta-content">
              <h3>Projeto Especial em Mente?</h3>
              <p>Trabalhamos com projetos personalizados de serralheria e estruturas metálicas. Conte-nos sua ideia!</p>
              <button className="btn btn-primary" onClick={openWhatsAppPersonalizado}>
                💬 Falar sobre projeto personalizado
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="section sobre">
        <div className="container">
          <h2 className="section-title">Sobre a RL Calhas Serralheria</h2>
          <div className="sobre-content">
            <div className="sobre-text">
              <p>
                A <strong>RL Calhas Serralheria</strong> é referência em <strong>soluções metálicas industriais e residenciais </strong> 
                em Camboriú e região. Com mais de <strong> mais de 4 anos experiência</strong> no mercado, nossa missão é entregar 
                qualidade, durabilidade e excelência em cada projeto.
              </p>
              <p>
                Especializados em <strong>calhas industriais, estruturas metálicas e serralheria artística</strong>, 
                combinamos técnicas tradicionais com tecnologia moderna para oferecer produtos que unem 
                funcionalidade e estética. Trabalhamos com materiais premium como aço galvanizado, 
                inox e alumínio.
              </p>
              <ul className="features">
                <li>4+ anos de experiência no mercado</li>
                <li>Equipe técnica altamente qualificada</li>
                <li>Atendimento personalizado e consultoria técnica</li>
                <li>Orçamento gratuito e sem compromisso</li>
                <li>Garantia em todos os serviços e instalações</li>
                <li>Tecnologia moderna de fabricação</li>
                <li>Projetos sob medida para cada necessidade</li>
                <li>Atendimento em toda região da Grande Florianópolis</li>
              </ul>
              <div className="sobre-stats">
                <div className="stat-item">
                  <span className="stat-number">4+</span>
                  <span className="stat-label">Anos no Mercado</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">200+</span>
                  <span className="stat-label">Projetos Concluídos</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Satisfação</span>
                </div>
              </div>
            </div>
            <div className="sobre-image">
              <img src="/images/Estrutura.jpg" alt="Fábrica RL Calhas Serralheria" />
            </div>
          </div>
        </div>
      </section>

      {/* Avaliações */}
      <section id="avaliacoes" className="section testimonials">
        <div className="container">
          <h2 className="section-title">Depoimentos de Clientes</h2>
          <p className="section-subtitle">A confiança dos nossos clientes é nosso maior patrimônio</p>
          
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-rating">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="section contato">
        <div className="container">
          <h2 className="section-title">Solicite seu orçamento gratuito</h2>
          <p className="section-subtitle">Preencha o formulário e será direcionado ao WhatsApp - Sem compromisso!</p>
          
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Orçamento Solicitado!</h3>
              <p>Você será redirecionado para o WhatsApp em instantes.</p>
              <p>Caso não tenha sido redirecionado, <a href="https://wa.me/5547997750571" target="_blank" rel="noopener noreferrer">clique aqui</a> para falar conosco.</p>
            </div>
          ) : (
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nome">Nome Completo *</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-mail *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="telefone">Telefone *</label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      placeholder="(47) 99775-0571"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cidade">Cidade *</label>
                    <input
                      type="text"
                      id="cidade"
                      name="cidade"
                      value={formData.cidade}
                      onChange={handleChange}
                      required
                      placeholder="Sua cidade"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="servico">Tipo de Serviço *</label>
                    <select 
                      id="servico" 
                      name="servico" 
                      value={formData.servico}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="Calhas Industriais">Calhas Industriais</option>
                      <option value="Rufos e Rufões">Rufos e Rufões</option>
                      <option value="Coifas Industriais">Coifas Industriais</option>
                      <option value="Dutos e Chaminés">Dutos e Chaminés</option>
                      <option value="Sistemas de Exaustão">Sistemas de Exaustão</option>
                      <option value="Eólicos Industriais">Eólicos Industriais</option>
                      <option value="Telhados Metálicos">Telhados Metálicos</option>
                      <option value="Estruturas Metálicas">Estruturas Metálicas</option>
                      <option value="Serralheria Artística">Serralheria Artística</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="mensagem">Descrição do Projeto</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Descreva seu projeto, medidas necessárias ou qualquer especificação importante..."
                    rows="5"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-submit">
                  <span>💬</span> Solicitar orçamento via WhatsApp
                </button>
                
                <p className="form-note">
                  Ao enviar, você será direcionado automaticamente para o WhatsApp da RL Calhas Serralheria.
                  <br />
                  <strong>Orçamento 100% gratuito e sem compromisso!</strong>
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3>RL Calhas Serralheria</h3>
              <p>Soluções em calhas, estruturas metálicas e serralheria com qualidade e confiança desde 2008.</p>
              <div className="contact-info">
                <p><strong>📱 WhatsApp:</strong> (47) 99775-0571</p>
                <p><strong>📍 Endereço:</strong> R. Coqueiros, 70 - Tabuleiro, Camboriú - SC</p>
                <p><strong>📧 E-mail:</strong> contato@rlserralheria.com</p>
                <p><strong>⏰ Horário:</strong> Seg-Sex: 8h-18h | Sáb: 8h-12h</p>
              </div>
            </div>
            <div className="footer-links">
              <h4>Links Rápidos</h4>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>Início</a>
              <a href="#servicos" onClick={handleNavClick}>Serviços</a>
              <a href="#sobre" onClick={handleNavClick}>Sobre Nós</a>
              <a href="#avaliacoes" onClick={handleNavClick}>Depoimentos</a>
              <a href="#contato" onClick={handleNavClick}>Orçamento</a>
            </div>
            <div className="footer-social">
              <h4>Redes Sociais</h4>
              <p>Siga-nos e acompanhe nossos projetos</p>
              <div className="social-icons">
                <button className="social-btn instagram-btn" onClick={openInstagram}>
                  📸 Instagram
                </button>
                <button className="social-btn whatsapp-btn" onClick={openWhatsAppFlutuante}>
                  💬 WhatsApp
                </button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} RL Calhas Serralheria. Todos os direitos reservados.</p>
            <p>CNPJ: 52.180.272/0001-14 | 📍 Camboriú - Santa Catarina</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;