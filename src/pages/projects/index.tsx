import React from 'react'
import Head from 'next/head'

import Section from '../../components/Section'

import { Container, Heading } from '../../styles/pages/Projects'
import Title from '../../components/Title'

const Projects: React.FC = () => {
  return (
    <>
      <Head>
        <title>Washington Junior | Conheça meu trabalho</title>
      </Head>

      <Container>
        <Section>
          <Heading>
            <Title>
              Estes são meus <span>últimos projetos</span>
            </Title>
            <h2>
              Clique nos projetos abaixo e entenda como foi o meu processo de
              criação!
            </h2>
          </Heading>
        </Section>
      </Container>
    </>
  )
}

export default Projects
