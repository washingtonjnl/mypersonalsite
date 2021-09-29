import Head from 'next/head';

import MainInfo from '../components/MainInfo';
import MoreInfo from '../components/MoreInfo';
import ContentList from '../components/ContentList';
import ContentTitle from '../components/ContentTitle';
import Footer from '../components/Footer';

import professionalExperienceData from '../content/ProfessionalExperience';
import academicExperienceData from '../content/AcademicExperience';

import { Container, Profile, Content } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Washington Junior | Um pouco sobre mim</title>
      </Head>

      <Container>
        <Profile>
          <div>
            <MainInfo />
            <MoreInfo />
          </div>
        </Profile>
        <Content>
          <ContentTitle
            link={{
              text: 'Conheça mais da minha história',
              type: 'internal',
              href: '/minha-historia'
            }}
          >
            <h1>
              Vamos <span>fazer a diferença</span> usando design?
            </h1>
            <p>
              Apaixonado por soluções inteligentes, gosto e aplicar métodos de
              pesquisa, hipótese e validação para elevar a eficiência nos
              projetos que colaboro. Meu interesse variado por diversas áreas do
              desenvolvimento de um produto me permite ter uma noção macro de
              todo o processo, para que eu consiga articular as estratégias e me
              relacionar com os times de maneira prática e focar na melhor
              relação de custo e impacto das soluções projetadas.
            </p>
          </ContentTitle>
          <ContentList type="professional" content={professionalExperienceData}>
            Minhas últimas <span>experiências</span>
          </ContentList>
          <ContentList type="academic" content={academicExperienceData}>
            Como me <span>qualifiquei</span>
          </ContentList>
          <Footer />
        </Content>
      </Container>
    </>
  );
};

export default Home;
