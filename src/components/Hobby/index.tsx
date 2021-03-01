import React, { ReactNode } from 'react'

import { Container } from './styles'

interface HobbyProps {
  title: string
  image: ReactNode
  children?: ReactNode
}

const Hobby: React.FC<HobbyProps> = ({ title, image }) => {
  return (
    <Container>
      {image}
      <p>{title}</p>
    </Container>
  )
}

export default Hobby
