import { SpecialtyItem, ImageAssetInfo, TestimonialItem, QuizQuestion } from '../types';

export const DIRECT_IMAGE_ASSETS: ImageAssetInfo[] = [
  {
    id: 'hero_banner',
    title: 'Ambiente Terapêutico e Acolhedor (Hero)',
    description: 'Sala de recepção e atendimento infantil iluminada com móveis em madeira e sofá aconchegante.',
    url: 'https://images.unsplash.com/photo-1584697964400-2af6a2f6204c?auto=format&fit=crop&w=1920&q=80',
    htmlSnippet: '<img src="https://images.unsplash.com/photo-1584697964400-2af6a2f6204c?auto=format&fit=crop&w=1920&q=80" alt="Centro Terapêutico Integrar" referrerPolicy="no-referrer" />',
    aspectRatio: '16:9'
  },
  {
    id: 'therapist_playing',
    title: 'Terapeuta e Criança em Atividade Lúdica',
    description: 'Especialista em ABA/TDAH interagindo no chão com blocos coloridos e sorrisos.',
    url: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80',
    htmlSnippet: '<img src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80" alt="Terapeuta e criança em sessão" referrerPolicy="no-referrer" />',
    aspectRatio: '4:3'
  },
  {
    id: 'wooden_blocks',
    title: 'Blocos Geométricos Terapêuticos e Giz de Cera',
    description: 'Material pedagógico e estruturado para estímulo cognitivo e motor.',
    url: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80',
    htmlSnippet: '<img src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80" alt="Blocos terapêuticos" referrerPolicy="no-referrer" />',
    aspectRatio: '1:1'
  },
  {
    id: 'mother_hugging_child',
    title: 'Empoderamento Parental e Vínculo Familiar',
    description: 'Mãe abraçando o filho com carinho na poltrona em momento de leitura e afeto.',
    url: 'https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&w=1000&q=80',
    htmlSnippet: '<img src="https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&w=1000&q=80" alt="Mãe e filho em momento de afeto" referrerPolicy="no-referrer" />',
    aspectRatio: '16:9'
  },
  {
    id: 'clinical_lead',
    title: 'Coordenadora Clínica e Prática Baseada em Evidências',
    description: 'Profissional especializada em ambiente clínico aconchegante.',
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
    htmlSnippet: '<img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80" alt="Coordenadora Clínica CTI" referrerPolicy="no-referrer" />',
    aspectRatio: '4:3'
  },
  {
    id: 'happy_kid_headphones',
    title: 'Mascote Terapêutico e Fones de Abafamento',
    description: 'Criança feliz com fones de abafamento sensorial acenando.',
    url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    htmlSnippet: '<img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80" alt="Criança feliz CTI" referrerPolicy="no-referrer" />',
    aspectRatio: '1:1'
  }
];

export const SPECIALTIES: SpecialtyItem[] = [
  {
    id: 'aba',
    title: 'ABA',
    description: 'Intervenção intensiva e individualizada focada em aprendizagem, autonomia e redução de comportamentos de interferência.',
    iconName: 'Brain',
    targetAudience: 'Crianças e adolescentes com Transtorno do Espectro Autista (TEA).',
    benefits: [
      'Desenvolvimento de comunicação funcional e linguagem',
      'Treino de habilidades sociais e regulação emocional',
      'Plano de Ensino Individualizado (PEI) adaptado',
      'Supervisão contínua com participação ativa da família'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'tdah',
    title: 'Suporte Multidisciplinar para TDAH',
    description: 'Estratégias para autorregulação, foco, organização executiva e manejo comportamental em casa e na escola.',
    iconName: 'Zap',
    targetAudience: 'Crianças e jovens com déficit de atenção, hiperatividade e impulsividade.',
    benefits: [
      'Treino de funções executivas e memória de trabalho',
      'Técnicas de organização de tarefas e gerenciamento de tempo',
      'Suporte direto para mediação escolar',
      'Orientação familiar para rotinas funcionais'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'fono',
    title: 'Fonoaudiologia',
    description: 'Aprimoramento da linguagem expressiva, compreensiva, fala, motricidade orofacial e Comunicação Alternativa (CAA).',
    iconName: 'MessageSquare',
    targetAudience: 'Atrasos no desenvolvimento da fala, apraxia, dificuldades de articulação e linguagem.',
    benefits: [
      'Implantação de PECTS e Pranchas de Comunicação Aumentativa',
      'Estímulo à fala natural através do brincar estruturado',
      'Adequação de mastigação, deglutição e respiração',
      'Treino de compreensão de ordens e diálogo'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'to',
    title: 'Terapia Ocupacional',
    description: 'Adequação ao processamento sensorial, autonomia nas atividades de vida diária (AVDs) e coordenação motora.',
    iconName: 'Sparkles',
    targetAudience: 'Seletividade alimentar, hiper/hipossensibilidade sensorial, desafios motores e desregulação.',
    benefits: [
      'Sala de Integração Sensorial totalmente equipada',
      'Estratégias para seletividade e recusa alimentar',
      'Desenvolvimento de autonomia na higiene e vestuário',
      'Coordenação motora fina e escrita'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'psicopedagogia',
    title: 'Psicopedagogia',
    description: 'Diagnóstico e mediação de dificuldades na alfabetização, matemática, raciocínio lógico e apoio escolar.',
    iconName: 'BookOpen',
    targetAudience: 'Desafios de aprendizagem, dislexia, discalculia e adaptação curricular escolar.',
    benefits: [
      'Elaboração de relatórios clínicos para adaptação escolar',
      'Ponte de comunicação entre clínica, escola e família',
      'Estímulo às habilidades pré-acadêmicas',
      'Estratégias lúdicas para leitura e escrita'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'coterapia',
    title: 'Co-Terapeuta Parental',
    description: 'Capacitação prática e contínua dos pais para aplicarem os estímulos terapêuticos na rotina de casa.',
    iconName: 'Users',
    targetAudience: 'Pais e cuidadores de crianças atípicas que buscam resultados reais.',
    benefits: [
      'Encontros presenciais e online de mentoria parental',
      'Planos de ação práticos para momentos difíceis (birras, rotina de sono, banho)',
      'Video-feedback das interações em casa',
      'Comunidade e grupo de apoio acolhedor'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=600&q=80'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    parentName: 'Mariana & Roberto',
    relation: 'Pais do Gabriel, 4 anos (Autismo Nível 1)',
    text: 'A diferença do CTI foi nos ensinar a atuar em casa. Antes nos sentíamos perdidos do lado de fora do consultório. Hoje sabemos exatamente como estimular o Gabriel nas brincadeiras diárias!',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '2',
    parentName: 'Carla Silveira',
    relation: 'Mãe da Beatriz, 7 anos (TDAH)',
    text: 'A equipe técnica é extremamente acolhedora e atualizada com a ciência. A Beatriz evoluiu no foco escolar e nas relações interpessoais de forma surpreendente em apenas 6 meses.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '3',
    parentName: 'Fernando Alencar',
    relation: 'Pai do Theo, 3 anos (Atraso no Desenvolvimento da Fala)',
    text: 'O modelo de Co-Terapeuta mudou nossa família. O Theo começou a usar fala funcional e pranchas de comunicação graças ao alinhamento perfeito entre a clínica e nossa rotina.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Como é o engajamento da criança com brincadeiras e contato visual?',
    options: [
      { label: 'Estabelece bom contato e brinca de forma compartilhada frequentemente', points: 1, category: 'Leve/Típico' },
      { label: 'Ocasionalmente evita contato visual ou prefere brincar sozinha', points: 2, category: 'Atenção Moderada' },
      { label: 'Não faz contato visual e demonstra pouco interesse em interagir', points: 3, category: 'Necessidade Prioritária' }
    ]
  },
  {
    id: 2,
    question: 'Qual é o estado atual do desenvolvimento da linguagem e fala?',
    options: [
      { label: 'Comunica necessidades em frases completas e entende instruções', points: 1, category: 'Acompanhamento' },
      { label: 'Usa poucas palavras isoladas ou tem dificuldade de articular', points: 2, category: 'Suporte Fonoaudiológico' },
      { label: 'Ainda não fala frases ou não usa comunicação funcional', points: 3, category: 'Intervenção Precoce' }
    ]
  },
  {
    id: 3,
    question: 'Como a família lida com mudanças de rotina e momentos de desregulação?',
    options: [
      { label: 'A criança se adapta bem a pequenas mudanças na rotina', points: 1, category: 'Rotina Estável' },
      { label: 'Às vezes chora ou demonstra resistência com novidades', points: 2, category: 'Apoio em Rotina' },
      { label: 'Ocorre forte desregulação/crise e a família se sente sem ferramentas', points: 3, category: 'Método Co-Terapeuta' }
    ]
  }
];
