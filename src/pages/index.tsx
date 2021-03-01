import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { FiExternalLink, FiInbox } from 'react-icons/fi'
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

import {
  Container,
  Hero,
  HeroText,
  SocialCard,
  Abilities,
  Charts,
  Experiences,
  ExperiencesGrid,
  Experience,
  MyHobbies,
  Hobbies,
  Contact
} from '../styles/pages/Home'

import avatar from '../assets/avatar.jpg'
import Programming from '../assets/programming.svg'
import Music from '../assets/music.svg'
import Art from '../assets/art.svg'
import Marketing from '../assets/marketing.svg'

import Section from '../components/Section'
import Title from '../components/Title'
import RoundChart from '../components/RoundChart'
import Hobby from '../components/Hobby'
import Footer from '../components/Footer'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Washington Junior | Um pouco sobre mim</title>
      </Head>

      <Container>
        <Section>
          <Hero>
            <HeroText>
              <Title>
                vamos criar um <span>produto</span> juntos?
              </Title>
              <p>
                Sempre fui apaixonado por criação. Quando pequeno era
                extremamente curioso, desmontava e montava qualquer coisa que
                via pela frente. Mais adiante, descobri o Design e me encontrei:
                consegui
                <b> juntar empreendedorismo, criatividade e inovação </b>
                em uma só profissão.
              </p>
              <p>
                Adoro me envolver com as pessoas e sempre fui muito
                extrovertido, por isso, um bom design para mim é o que consegue
                <b> integrar o lado humano</b>, sem deixar de lado os
                fundamentos e as metodologias pragmáticas.
              </p>
              {/* <Link href="projects">
                <a>
                  <FiExternalLink /> Conheça mais do meu trabalho
                </a>
              </Link> */}
            </HeroText>
            <SocialCard>
              <img src={avatar} alt="Avatar do Washington Junior" />
              <strong>Washington Junior</strong>
              <p>UX/UI Designer</p>
            </SocialCard>
          </Hero>
        </Section>

        <Section>
          <Abilities>
            <Title>
              onde eu me <span>destaco?</span>
            </Title>
            <Charts>
              <RoundChart title="Design de Interfaces" percent={70} />
              <RoundChart title="Jornadas de Usuário" percent={70} />
              <RoundChart title="Identidades Visuais" percent={70} />
              <RoundChart title="Metodologias Ágeis" percent={70} />
            </Charts>
          </Abilities>
        </Section>

        <Section>
          <Experiences>
            <Title>
              minhas últimas <span>experiências</span>
            </Title>
            <ExperiencesGrid>
              <Experience>
                <span>2019 - 2021</span>
                <strong>Liber Educação</strong>
                <label>UI Designer</label>
                <p>
                  Fui responsável pela criação e manutenção do Guia de Estilos e
                  interfaces dos aplicativos para clientes e Tutores. Além
                  disso, era encarregado de desenvolver e atualizar o website
                  comercial e todas as landing pages para campanhas de
                  marketing.
                </p>
                <p>
                  Também arquitetei e construí pequenos sistemas, APIs e
                  microsserviços para processos internos de automação e
                  gerenciamento, utilizando Node.js e React.
                </p>
              </Experience>
              <Experience>
                <span>2019 - Hoje</span>
                <strong>Universidade Federal do Rio de Janeiro</strong>
                <label>Comunicação Social - Publicidade e Propaganda</label>
                <p>
                  Atualmente, estou no quarto período de Publicidade e
                  Propaganda, na Escola de Comunicação da UFRJ. Participo de um
                  projeto de extensão, o Ecofoto, ajudando a adaptar um projeto
                  de exposições fotográficas para o contexto de pandemia de
                  coronavírus.
                </p>
                <p>
                  Para ajudar nessa transição, analisamos as dores e
                  dificuldades dos usuários para desenvolver uma plataforma
                  completa de exposições fotográficas virtuais.
                </p>
              </Experience>
            </ExperiencesGrid>
          </Experiences>
        </Section>

        <Section>
          <MyHobbies>
            <Title>
              minhas outras <span>paixões</span>
            </Title>
            <Hobbies>
              <Hobby title="Programação" image={<Programming />} />
              <Hobby title="Música" image={<Music />} />
              <Hobby title="Artes Visuais" image={<Art />} />
              <Hobby title="Marketing" image={<Marketing />} />
            </Hobbies>
          </MyHobbies>
        </Section>

        <Section>
          <Contact>
            <div>
              <h1>
                Quer me chamar para <span>conversar?</span>
              </h1>
            </div>
            <div>
              <strong>clique para acessar os contatos</strong>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/washington-junior-b2865b1b9/"
                    target="_blank"
                  >
                    <FaLinkedinIn /> veja meu LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:washingtonjrt@gmail.com">
                    <FiInbox /> me envie um email
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=5521990106262&text=Ol%C3%A1!%20Encontrei%20seu%20numero%20no%20seu%20site,%20podemos%20conversar?"
                    target="_blank"
                  >
                    <FaWhatsapp /> mande uma mensagem!
                  </a>
                </li>
              </ul>
            </div>
          </Contact>
        </Section>

        <Section>
          <Footer />
        </Section>
      </Container>
    </>
  )
}

export default Home
