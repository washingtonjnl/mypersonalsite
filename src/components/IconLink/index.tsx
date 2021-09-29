import { ReactNode } from 'react'

import { Container } from './styles'

interface IconLinkProps {
  children: ReactNode
}

function IconLink({ children }: IconLinkProps) {
  return (
    <Container>
      <h1>IconLink</h1>
      {children}
    </Container>
  )
}

export default IconLink
