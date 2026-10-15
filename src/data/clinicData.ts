import { Treatment, Specialist, Testimonial } from '../types';

export const CLINIC_INFO = {
  name: 'Pro Dentes Odontologia',
  legalName: 'Pro Dentes Clínica Odontológica Especializada',
  foundedYear: 2009,
  address: {
    street: 'Avenida Caminho do Mar, 2030',
    neighborhood: 'Rudge Ramos',
    city: 'São Bernardo do Campo',
    state: 'SP',
    zip: '09609-000',
    full: 'Av. Caminho do Mar, 2030 – Rudge Ramos, São Bernardo do Campo – SP',
  },
  phones: {
    display: '(11) 4368-2030',
    clean: '+551143682030',
    whatsapp: '5511998872030',
    whatsappDisplay: '(11) 99887-2030',
  },
  email: 'contato@prodentesodontologia.com.br',
  hours: {
    weekdays: 'Segunda a Sexta: 08h00 às 19h00',
    saturday: 'Sábado: 08h00 às 13h00',
    sunday: 'Domingo: Fechado',
  },
  maps: {
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.5583733568814!2d-46.5741630248888!3d-23.655822978734267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4327a3c33abf%3A0x6b403d6d538f5f40!2sAv.%20Caminho%20do%20Mar%2C%202030%20-%20Rudge%20Ramos%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009609-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr',
    link: 'https://maps.google.com/?q=Av.+Caminho+do+Mar,+2030+-+Rudge+Ramos,+S%C3%A3o+Bernardo+do+Campo+-+SP',
  },
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
  },
  images: {
    logo: 'https://i.postimg.cc/Jz6dKBQT/Emblema-Luxuoso-de-Odontologia-Dra-Pontes.png',
    hero: 'https://i.postimg.cc/85sp9DRQ/5188.jpg',
  },
};

export const TREATMENTS: Treatment[] = [
  {
    id: 'implantodontia',
    title: 'Implantodontia',
    tag: 'Especialidade de Destaque',
    shortDescription:
      'Substituição definitiva e segura de dentes ausentes com raízes de titânio de alta biocompatibilidade e próteses perfeitas.',
    fullDescription:
      'A Implantodontia na Pro Dentes é conduzida sob a liderança do Dr. Carlos Eduardo C. Vilela, unindo tomografia 3D, cirurgias guiadas sem cortes traumáticos e componentes de alta performance. Recupere com total segurança a sua capacidade mastigatória, a firmeza dos dentes e a autoconfiança no sorriso.',
    iconName: 'ShieldCheck',
    benefits: [
      'Planejamento digital tridimensional para máxima precisão cirúrgica',
      'Opções de carga imediata quando há indicação clínica favorável',
      'Sensação e estética 100% idênticas aos dentes naturais',
      'Preservação da estrutura óssea facial e do contorno dos lábios',
    ],
    duration: 'Avaliação personalizada e planejamento digital sob medida',
    recommendedFor: 'Pacientes com perda de um, múltiplos ou todos os dentes que buscam fixação definitiva e conforto.',
  },
  {
    id: 'enxerto-osseo',
    title: 'Enxerto Ósseo',
    tag: 'Casos Complexos',
    shortDescription:
      'Reconstrução óssea precisa para pacientes que sofreram perda de volume maxilar e necessitam de base firme para implantes.',
    fullDescription:
      'Criada para solucionar casos anatômicos desafiadores, nossa equipe domina as mais modernas técnicas de enxertia óssea, levantamento de seio maxilar e regeneração tecidual guiada com biomateriais nobres. Isso permite que mesmo pacientes que ouviram "não" em outros lugares conquistem seus implantes.',
    iconName: 'Bone',
    benefits: [
      'Uso exclusivo de biomateriais sintéticos e liofilizados padrão ouro internacional',
      'Recuperação da espessura e altura alveolar com previsibilidade biológica',
      'Técnicas minimamente invasivas com suporte pós-operatório acolhedor',
      'Viabilização segura de implantes mesmo em casos de perda óssea avançada',
    ],
    duration: 'Procedimento cirúrgico programado com acompanhamento radiográfico periódico',
    recommendedFor: 'Pessoas com atrofia óssea decorrente de extrações antigas, próteses móveis ou traumas.',
  },
  {
    id: 'periodontia',
    title: 'Periodontia',
    tag: 'Saúde & Base',
    shortDescription:
      'Tratamento minucioso dos tecidos gengivais e de sustentação para prevenir perdas dentárias e harmonizar o contorno do sorriso.',
    fullDescription:
      'A periodontia cuida da fundação do sorriso. Realizamos diagnóstico precoce com sondagem computadorizada, descontaminação profunda por ultrassom piezoelétrico e plásticas gengivais (gengivoplastia) para correção de sorriso gengival e retrações.',
    iconName: 'HeartPulse',
    benefits: [
      'Eliminação de sangramentos, mobilidade dental e mau hálito persistente',
      'Cirurgias estéticas gengivais para um alinhamento harmonioso dos dentes',
      'Prevenção de complicações cardiovasculares associadas a focos bacterianos orais',
      'Equipamentos ultrassônicos suaves que preservam a integridade radicular',
    ],
    duration: 'Consultas de raspagem/descontaminação ou sessões cirúrgicas estéticas de 45 a 60 min',
    recommendedFor: 'Indivíduos com gengivas inflamadas, retração gengival ou que desejam remodelar o contorno rosa do sorriso.',
  },
  {
    id: 'lentes-de-contato',
    title: 'Lentes de Contato Dental / Estética',
    tag: 'Alta Estética',
    shortDescription:
      'Lâminas cerâmicas ultra finas para transformar cor, forma, alinhamento e proporção dental com máxima elegância e naturalidade.',
    fullDescription:
      'As lentes cerâmicas em dissilicato de lítio (E-Max) ou porcelana feldspática reproduzem a translucidez, o brilho e os microdetalhes de dentes jovens e saudáveis. Todo o design é planejado digitalmente, permitindo um "test-drive" do sorriso (mock-up) antes de qualquer etapa definitiva.',
    iconName: 'Sparkles',
    benefits: [
      'Transformação surpreendente com desgaste mínimo ou nulo do esmalte original',
      'Material resistente que não mancha com café, vinho ou alimentos pigmentados',
      'Simulação estética prévia aprovada pelo paciente antes da cimentação',
      'Acabamento artesanal refinado com anatomia personalizada para seu rosto',
    ],
    duration: 'Geralmente de 2 a 4 consultas entre escaneamento, prova e entrega final',
    recommendedFor: 'Quem busca dentes simétricos, fechamento de espaços (diastemas) e rejuvenescimento do sorriso.',
  },
  {
    id: 'clareamento-dental',
    title: 'Odontologia Estética – Clareamento Dental',
    tag: 'Brilho Natural',
    shortDescription:
      'Protocolos modernos de clareamento em consultório e supervisionado, proporcionando luminosidade sem agressão ao esmalte.',
    fullDescription:
      'Combinamos tecnologia de luz ativadora com géis de ponta enriquecidos com agentes dessensibilizantes de nitrato de potássio e flúor. O resultado é um clareamento homogêneo, rápido e totalmente confortável para o paciente.',
    iconName: 'SunMedium',
    benefits: [
      'Elevação de vários tons com luminosidade vibrante e sem aspecto artificial',
      'Protocolos anti-sensibilidade desenvolvidos para pacientes sensíveis',
      'Combinação de sessão clínica de alto impacto com moldeiras personalizadas',
      'Supervisão contínua do dentista para segurança biológica de toda a mucosa',
    ],
    duration: '1 a 3 sessões de consultório ou 2 a 3 semanas de uso noturno/diurno com moldeira',
    recommendedFor: 'Dentes amarelados por hábitos alimentares, idade, tabagismo ou pigmentações intrínsecas.',
  },
  {
    id: 'endodontia',
    title: 'Endodontia',
    tag: 'Tratamento de Canal',
    shortDescription:
      'Tratamento de canal moderno, automatizado e indolor, focado no alívio imediato do desconforto e preservação biológica.',
    fullDescription:
      'Sob a condução da Dra. Camila Dias Moreschi, nossa endodontia utiliza sistemas rotatórios de níquel-titânio, localizadores apicais eletrônicos e irrigação ultrassônica passiva. O procedimento é rápido, preciso e elimina o mito de que canal é sinônimo de dor.',
    iconName: 'Zap',
    benefits: [
      'Execução em sessão única na grande maioria dos casos clínicos',
      'Anestesia de alta eficácia para conforto absoluto durante todo o procedimento',
      'Localização apical milimétrica por sensores digitais sem superexposição radiológica',
      'Salva dentes que antes seriam condenados à extração',
    ],
    duration: 'Sessão única média de 60 a 90 minutos para a maior parte dos dentes',
    recommendedFor: 'Pacientes com dor de dente aguda, cáries profundas, traumas ou necessidade protética.',
  },
  {
    id: 'reabilitacao-oral',
    title: 'Reabilitação Oral',
    tag: 'Casos Complexos',
    shortDescription:
      'Reconstrução completa da oclusão, dimensão vertical e harmonia facial para casos de desgastes severos, bruxismo e colapsos de mordida.',
    fullDescription:
      'A grande vocação da Pró Dentes desde 2009. Unimos próteses fixas, próteses sobre implantes, placas estabilizadoras de bruxismo e ajustes de oclusão para devolver equilíbrio mecânico à musculatura facial e à articulação têmporo-mandibular (ATM).',
    iconName: 'Cpu',
    benefits: [
      'Alívio de dores orofaciais crônicas, estalos articulares e tensão de bruxismo',
      'Devolução da jovialidade da face através do restabelecimento do terço inferior',
      'Reconquista plena da mastigação de qualquer tipo de alimento com firmeza',
      'Integração multidisciplinar de especialistas trabalhando em um mesmo plano',
    ],
    duration: 'Planejamento em etapas personalizadas conforme a complexidade do caso',
    recommendedFor: 'Pacientes com dentes desgastados, mordida profunda/cruzada, múltiplos dentes perdidos ou queixas de ATM.',
  },
  {
    id: 'ortodontia',
    title: 'Ortodontia',
    tag: 'Alinhamento & Função',
    shortDescription:
      'Correção de posicionamento dentário e bases ósseas com aparelhos autoligados de baixa fricção e modernos alinhadores invisíveis.',
    fullDescription:
      'A Dra. Andréa Cristina Lopes planeja o alinhamento com escaneamento digital 3D. Os pacientes podem optar pela discrição total dos alinhadores transparentes removíveis ou pela velocidade superior e menor necessidade de manutenções dos aparelhos autoligados cerâmicos.',
    iconName: 'Smile',
    benefits: [
      'Alinhadores transparentes praticamente imperceptíveis no convívio social',
      'Planejamento digital com prévia 3D de cada movimento dentário até o sorriso final',
      'Aparelhos autoligados sem as antigas borrachinhas, facilitando a higiene diária',
      'Melhora expressiva na respiração, dicção e distribuição equilibrada de cargas na mastigação',
    ],
    duration: 'Tratamentos a partir de 6 a 18 meses com acompanhamentos digitais periódicos',
    recommendedFor: 'Crianças, jovens e adultos com apinhamento dentário, dentes espaçados, mordida aberta ou cruzada.',
  },
];

export const SPECIALISTS: Specialist[] = [
  {
    id: 'carlos-vilela',
    name: 'Dr. Carlos Eduardo Carvalho Vilela',
    cro: 'CRO-SP 62085',
    role: 'Fundador & Responsável Técnico',
    specialty: 'Implantodontista & Reabilitação Oral',
    image: 'https://i.postimg.cc/85sp9DRQ/5188.jpg', // Homem central na foto da equipe
    isDirector: true,
    bio: 'Idealizador e fundador da Pró Dentes Odontologia em 2009. Possui mais de 25 anos de experiência clínica e acadêmica em odontologia de alta complexidade. Especialista em implantodontia avançada, cirurgias de enxerto ósseo e reabilitações orais funcionais e estéticas.',
    qualifications: [
      'Especialista em Implantodontia',
      'Expert em Cirurgias Guiadas por Computador',
      'Reabilitações Oclusais e Enxertos Ósseos',
      'Membro ativo de associações odontológicas de ponta',
    ],
  },
  {
    id: 'bruna-santos',
    name: 'Dra. Bruna Andrade Santos',
    cro: 'CRO-SP 118635',
    role: 'Corpo Clínico Especializado',
    specialty: 'Clínico Geral & Odontologia Integrada',
    image: 'https://i.postimg.cc/Vk1bTr57/unnamed-(1).jpg',
    bio: 'Com atendimento acolhedor e olhar clínico detalhista, Dra. Bruna é responsável pelo diagnóstico preventivo, restaurações estéticas de alta durabilidade, profilaxias avançadas e condicionamento de saúde bucal integral.',
    qualifications: [
      'Clínica Geral & Dentística Restauradora',
      'Prevenção e Terapia Periodontal Básica',
      'Atendimento Humanizado com Foco no Bem-Estar',
      'Planejamento e Acompanhamento Preventivo',
    ],
  },
  {
    id: 'andrea-lopes',
    name: 'Dra. Andréa Cristina Lopes',
    cro: 'CRO-SP 79044',
    role: 'Corpo Clínico Especializado',
    specialty: 'Ortodontista & Ortopedia Facial',
    image: 'https://i.postimg.cc/JzmBgDGw/unnamed-(2).jpg',
    bio: 'Especialista em ortodontia com vasta bagagem na condução de casos ortodônticos preventivos, interceptativos e corretivos. Certificada em sistemas de alinhadores invisíveis e aparelhos autoligados de alta eficiência.',
    qualifications: [
      'Especialista em Ortodontia e Ortopedia Facial',
      'Credenciada em Alinhadores Invisíveis Transparentes',
      'Aparelhos Autoligados Estéticos e Metálicos',
      'Tratamento Ortodôntico para Crianças, Jovens e Adultos',
    ],
  },
  {
    id: 'camila-moreschi',
    name: 'Dra. Camila Dias Moreschi',
    cro: 'CRO-SP 94538',
    role: 'Corpo Clínico Especializado',
    specialty: 'Endodontista',
    image: 'https://i.postimg.cc/qv0CYhz0/unnamed.png',
    bio: 'Referência no diagnóstico e tratamento de canal através de sistemas mecanizados e controle de dor. Atua com precisão micrométrica para salvar dentes comprometidos em protocolos confortáveis e ágeis.',
    qualifications: [
      'Especialista em Endodontia Mecanizada',
      'Uso de Localizadores Apicais Eletrônicos',
      'Retratamentos de Alta Complexidade',
      'Protocolos Livres de Dor em Sessão Única',
    ],
  },
  {
    id: 'leticia-zoccolo',
    name: 'Dra. Letícia Romano Zoccolo',
    cro: 'CRO-SP 163603',
    role: 'Corpo Clínico Especializado',
    specialty: 'Clínico Geral & Estética Dental',
    image: 'https://i.postimg.cc/sgyZ8Q1q/unnamed-(5).jpg',
    bio: 'Dedicada ao cuidado holístico do paciente, aliando ciência estética contemporânea, clareamentos dentais supervisionados e condutas restauradoras conservadoras para a saúde e beleza dos dentes.',
    qualifications: [
      'Clínica Geral & Odontologia Conservadora',
      'Clareamento Dental e Estética do Sorriso',
      'Controle de Biossegurança e Saúde Gengival',
      'Cuidado Dedicado para Pacientes com Ansiedade',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'dep-1',
    name: 'Marcelo Augusto Silveira',
    role: 'Empresário em SBC',
    rating: 5,
    treatment: 'Implantes & Reabilitação Oral',
    comment:
      'Fiz o tratamento de implantes e enxerto com o Dr. Carlos Eduardo. Eu tinha receio e adiei por anos. A segurança, clareza e estrutura da Pro Dentes me deixaram 100% tranquilo. Hoje como qualquer coisa e sorrio sem timidez. É uma clínica impecável em São Bernardo!',
    date: 'Há 1 mês',
  },
  {
    id: 'dep-2',
    name: 'Renata Guimarães de Paula',
    role: 'Arquiteta',
    rating: 5,
    treatment: 'Lentes de Contato & Clareamento',
    comment:
      'Equipe incrível! Fiz minhas lentes de contato e o resultado ficou extremamente natural, sofisticado e sem exageros. O atendimento desde a recepção até os dentistas é atencioso e pontual. Vale cada investimento pela qualidade!',
    date: 'Há 2 semanas',
  },
  {
    id: 'dep-3',
    name: 'Gustavo Mendonça Fontes',
    role: 'Engenheiro de Produção',
    rating: 5,
    treatment: 'Ortodontia com Alinhador Invisível',
    comment:
      'Coloquei os alinhadores com a Dra. Andréa. O escaneamento 3D foi rápido, sem moldeira com massinha, e eu pude ver a previsão de todo o movimento. Em menos de 10 meses meus dentes ficaram alinhados perfeitamente!',
    date: 'Há 3 semanas',
  },
];

export const CLINIC_PILLARS = [
  {
    title: 'Pioneirismo & Tradição',
    description: 'Mais de 15 anos transformando sorrisos com credibilidade consolidada no Rudge Ramos, São Bernardo.',
    stat: 'Desde 2009',
  },
  {
    title: 'Casos Complexos Resolvidos',
    description: 'Foco técnico em reabilitações orais, enxertos ósseos e correções de oclusão de alta exigência.',
    stat: '+10.000',
    statSub: 'pacientes atendidos',
  },
  {
    title: 'Tecnologia 3D Avançada',
    description: 'Tomografia digital, escaneamento intraoral e planejamento cirúrgico guiado milimetricamente.',
    stat: '100% Digital',
  },
  {
    title: 'Corpo Clínico Integrado',
    description: 'Equipe multidisciplinar em constante atualização científica atuando em consenso no seu caso.',
    stat: '5 Especialistas',
  },
];
