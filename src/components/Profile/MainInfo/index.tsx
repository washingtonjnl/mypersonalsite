import { ReactNode } from 'react';

import { Container } from './styles';

interface MainInfoProps {
  children: ReactNode;
}

function MainInfo({ children }: MainInfoProps) {
  return (
    <Container>
      <h1>MainInfo</h1>
      {children}
    </Container>
  );
};

export default MainInfo;
