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
            Tenho 20 anos e atualmente moro no Rio de Janeiro. Sou amante de
            tecnologia, inovação e gosto de estar sempre por dentro do que
            acontece nessas áreas. Adoro resolver problemas de forma prática e
            criativa, por isso, me encontrei quando o design cruzou minha vida.
            Para mim, um bom design existe para conectar pessoas e transmitir
            ideias de forma simples, funcional e – principalmente – acessível
            para todos.
          </p>
          <p>
            Já passei pelas mais diversas áreas dentro do design, desde
            impressos, produtos, mídias digitais e até criação de marcas
            (quando, pela primeira vez, tornei mais sólidos meus fundamentos
            teóricos e melhorei a integração do lado estratégico de negócios ao
            meu trabalho). Nos ultimos anos, atuo com{' '}
            <strong>
              design de produtos digitais orientados à experiência do usuário.
            </strong>
          </p>
        </ContentTitle>
        <ResponsiveImage
          desktopSrc="history-one-g.png"
          mobileSrc="history-one-p.png"
          alt="Design para web e interfaces aplicadas"
        />
        <Paragraph>
          Ainda quando criança, comecei a gostar de trabalhar para ajudar outras
          pessoas e, com o tempo, o empreendedorismo me ensinou a fazer
          negócios, ser mais criativo e me envolver bastante com tecnologia e
          ferramentas que otimizam e aumentam minha efetividade.
        </Paragraph>
        <Paragraph>
          Nos últimos tempos, quando comecei a atuar na elaboração de produtos
          digitais, desenvolvi cada vez mais minhas{' '}
          <strong>
            metodologias de pesquisa, análise de métricas e mapeamento de
            oportunidades nas jornadas de produto,
          </strong>{' '}
          articulando sempre com outras equipes atuando com metodologias ágeis.
        </Paragraph>
        <Paragraph>
          Ao trabalhar implementando os elementos fundamentais do design em
          interfaces que colaboram para uma melhor usabilidade e, a partir
          disso, facilitar boas experiências, melhorei minha capacidade de
          abstração e{' '}
          <strong>
            empatia para observar as necessidades do usuário com testes e
            entrevistas quantitativas e qualitativos, além de outras
            metodologias de pesquisa comportamentais e atitudinais.
          </strong>
        </Paragraph>
        <ResponsiveImage
          desktopSrc="history-two-g.png"
          mobileSrc="history-two-p.png"
          alt="Artefatos de pesquisa e mapeamento de experiências dos usuários"
        />
        <Paragraph>
          Por acreditar que uma comunicação clara e integrada é essencial para o
          sucesso de uma equipe, sempre busco entender as demandas de cada par
          responsavel dentro dos projetos para ajudar a estruturar processos,
          documentações e feedbacks que sejam realmente impactantes e relevantes
          na medida certa para a evolução do ecossistema de produto.
        </Paragraph>
        <Paragraph>
          Foi por conta da minha curiosidade e proatividade que me envolvi de
          maneira muito próxima com times de desenvolvimento e isso me ajudou
          bastante a{' '}
          <strong>
            entender a viabilidade técnica das soluções que construíamos.
          </strong>{' '}
          Versionamento, abstração, divisão de responsabilidades e documentação
          para descentralização do conhecimento foram só algumas das coisas que
          me engrandeceram quando me aproximei e comecei a me interessar pelas
          trilhas do desenvolvimento de software.
        </Paragraph>
        <Paragraph>
          Como sempre gostei de aproveitar da tecnologia para otimizar minha
          vida, aprender programação e{' '}
          <strong>
            levar os conhecimentos de arquitetura e desenvolvimento de sistemas
            para dentro do design
          </strong>{' '}
          melhorou muito a minha produtividade. Seja criando pequenos sistemas
          para tratar dados de pesquisas, otimizar processos repetitivos ou até
          na criação de{' '}
          <strong>
            <i>design systems </i>
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
