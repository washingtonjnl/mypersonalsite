import { FaBook, FaCheck, FaCode, FaMusic, FaPaintBrush } from 'react-icons/fa';
import InfoContainer, {
  ProjectInfoData,
  TopicsInfoData
} from './InfoContainer';

import { Container } from './styles';

const projects: ProjectInfoData[] = [
  {
    title: 'Bora lá',
    description: 'Planejamento de Viagens',
    link: {
      type: 'external',
      href: `https://washingtonux.medium.com/bora-l%C3%A1-reaquecendo-o-mercado-de-turismo-durante-e-ap%C3%B3s-a-pandemia-f7df7d5a04db`
    }
  }
];
const highlights: TopicsInfoData[] = [
  { icon: <FaCheck size="0.75rem" />, text: 'Mapeamento de jornadas' },
  { icon: <FaCheck size="0.75rem" />, text: 'Testes de usabilidade' },
  { icon: <FaCheck size="0.75rem" />, text: 'Métricas de experiência' },
  { icon: <FaCheck size="0.75rem" />, text: 'Design System' }
];
const passions: TopicsInfoData[] = [
  { icon: <FaCode size="0.75rem" />, text: 'Programação' },
  { icon: <FaMusic size="0.75rem" />, text: 'Música' },
  { icon: <FaPaintBrush size="0.75rem" />, text: 'Artes visuais' },
  { icon: <FaBook size="0.75rem" />, text: 'Poesia e literatura' }
];

function MoreInfo() {
  return (
    <Container>
      <InfoContainer
        type="projects"
        title="Meu último projeto"
        projects={projects}
      />

      <InfoContainer
        type="topics"
        title="Onde me destaco"
        topics={highlights}
      />

      <InfoContainer
        type="topics"
        title="Minhas outras paixões"
        topics={passions}
      />
    </Container>
  );
}

export default MoreInfo;
