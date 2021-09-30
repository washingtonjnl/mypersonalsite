import Head from 'next/head';

import ContentTitle from '../../components/ContentTitle';
import ResponsiveImage from '../../components/ResponsiveImage';
import Signature from '../../components/Signature';
import Footer from '../../components/Footer';

import {
  Container,
  Paragraph,
  StyledBreadcrumbs
} from '../../styles/pages/MyHistory';

function MyHistory() {
  return (
    <>
      <Head>
        <title>Washington Junior | Conheça minha história</title>
      </Head>

      <Container>
        <StyledBreadcrumbs path={['Home', 'Minha História']} href="/" />
        <ContentTitle>
          <h1>
            Oi, meu nome é <span>Washington Junior...</span>
          </h1>
          <p>
            Tenho 19 anos e atualmente moro no Rio de Janeiro. Sou amante de
            tecnologia, inovação e sempre gosto de estar por dentro do que
            acontece nessa área. Adoro resolver problemas de forma prática e
            criativa, por isso, me encontrei quando o design cruzou minha vida.
            Para mim, um bom design existe para conectar pessoas e transmitir
            ideias de forma simples, funcional e – principalmente – acessível
            para todos.
          </p>
          <p>
            Já passei pelas mais diversas áreas dentro do design, desde
            impressos, produtos, mídias digitais e até criação de marcas (quando
            tornei mais sólidos meus fundamentos teóricos e melhorei a
            integração do lado estratégico de negócios ao meu trabalho) e nos
            ultimos anos, atuo com design de produtos{' '}
            <strong>digitais orientados ao usuário.</strong>
          </p>
        </ContentTitle>
        <ResponsiveImage
          desktopSrc="history-one-g.png"
          mobileSrc="history-one-p.png"
          alt="Design para web e interfaces aplicadas"
        />
        <Paragraph>
          Ainda quando criança, sempre gostei de trabalhar e o empreendedorismo
          me ensinou a fazer negócios, ser mais criativo e me envolver bastante
          com tecnologia e ferramentas que otimizam e aumentam minha
          produtividade.
        </Paragraph>
        <Paragraph>
          Nos últimos tempos, quando comecei a atuar na elaboração de produtos
          digitais, desenvolvi cada vez mais minhas{' '}
          <strong>
            metodologias de pesquisa, análise e planejamento de negócio
          </strong>{' '}
          articulando sempre com outras equipes seguindo as metodologias ágeis.
        </Paragraph>
        <Paragraph>
          Ao trabalhar implementando os elementos fundamentais do design em
          interfaces que prezem pela boa usabilidade e consigam proporcionar
          boas experiências, melhorei minha capacidade de abstração e{' '}
          <strong>
            empatia para observar as necessidades do usuário com mapeamentos,
            testes e pesquisas quantitativas e qualitativos.
          </strong>
        </Paragraph>
        <ResponsiveImage
          desktopSrc="history-two-g.png"
          mobileSrc="history-two-p.png"
          alt="Artefatos de pesquisa e mapeamento de experiências dos usuários"
        />
        <Paragraph>
          Por acreditar que uma comunicação clara e integrada é essencial para o
          sucesso de uma equipe, sempre busco entender as demandas de cada time
          responsavel dentro dos projetos para criar documentos e feedbacks que
          sejam realmente impactantes para a evolução do ecossistema de produto.
        </Paragraph>
        <Paragraph>
          Foi por conta da minha curiosidade e proatividade que me envolvi de
          maneira muito próxima com times de desenvolvimento e isso me ajudou
          bastante a{' '}
          <strong>entender a viabilidade técnica das soluções.</strong>{' '}
          Versionamento, abstração, divisão de responsabilidades e documentação
          para descentralização do conhecimento foram só algumas das coisas que
          me engrandeceram quando me aproximei e comecei a caminhar pela trilha
          do desenvolvimento de software.
        </Paragraph>
        <Paragraph>
          Como sempre gostei de aproveitar da tecnologia para otimizar minha
          vida, aprender programação e{' '}
          <strong>
            levar os conhecimentos de arquitetura e desenvolvimento de sistemas
            para dentro do design
          </strong>{' '}
          melhorou muito a minha produtividade. Seja criando pequenos sistemas
          para tratar dados, otimizar processos repetitivos ou até na criação de{' '}
          <strong>
            <i>styleguides </i>
            versáteis e robustos.
          </strong>
        </Paragraph>
        <Paragraph>
          Hoje, estou buscando novos desafios na área e quero contribuir com a
          minha eterna alma inovadora para{' '}
          <strong>desenvolver soluções criativas e rentáveis</strong> que de
          fato consigam resolver os problemas dos nossos usuários.
        </Paragraph>

        <Signature />
        <Footer />
      </Container>
    </>
  );
}

export default MyHistory;
