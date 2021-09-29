import ContentItemData from './ContentItemDTO';

const AcademicExperience: ContentItemData[] = [
  {
    period: { in: '2019', out: 'Hoje' },
    institution: 'UFRJ - Universidade Federal do Rio de Janeiro',
    context: 'Comunicação Social - Publicidade e Propaganda',
    description: `Atualmente, estou no quinto período de Publicidade e Propaganda, na Escola de Comunicação da UFRJ.\n
    Participei de um projeto de extensão, o Ecofoto, ajudando a adaptar um evento de exposições fotográficas para o contexto de pandemia de coronavírus com isolamento social.\n
    Para ajudar nessa transição, analisamos as dores e dificuldades dos usuários para desenvolver uma plataforma completa de exposições fotográficas virtuais.`
  },
  {
    period: { in: '2021', out: '2021' },
    institution: 'UX Unicórnio',
    context: 'UX Certificate - Training in UX, UI and Product Design',
    description: `Aprendi e apliquei em projetos completos diversas metodologias de: pesquisa e validação; estratégia de negócio e métricas aplicadas ao UX; mapeamento de experiências; design de interfaces; UX writing, UX em times remotos e ágeis, além de workshops de Design Thinking e Sprint 2.0.`,
    link: {
      type: 'external',
      text: 'Veja o projeto prático completo',
      href: `https://washingtonux.medium.com/bora-l%C3%A1-reaquecendo-o-mercado-de-turismo-durante-e-ap%C3%B3s-a-pandemia-f7df7d5a04db`
    }
  },
  {
    period: { in: '2021', out: '2021' },
    institution: 'Meiuca',
    context: 'UI Certificate - Design System Specialist',
    description: `Estudei técnicas de planejamento, definição e implementação de Design Systems funcionais, adaptativos e escaláveis. Me aprofundei em estruturas de desenvolvimento, manutenção e suporte de um Design System dentro de equipes multidisciplinares de produto, seguindo boas práticas de documentação e Design Ops.`
  },
  {
    period: { in: '2016', out: '2018' },
    institution: 'Zion Escola de Entretenimento',
    context: 'Formação em Design Gráfico e Design Digital',
    description: `Além de me aprofundar nos conceitos centrais da comunicação visual, gestalt, morfologia, composição e outros aspectos básicos e fundamentais do Design, desenvolvi habilidades em diversos softwares para edição de imagens, vídeos e vetores. Seguindo as boas práticas de organização e planejamento de projetos, aprimorei minhas técnicas de design com diversos projetos gráficos de identidade visual e editoração para marcas locais e personalidades públicas.`
  }
];

export default AcademicExperience;
