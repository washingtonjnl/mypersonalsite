import { ReactNode } from 'react';

import { Container } from './styles';

interface MoreInfoProps {
  children: ReactNode;
}

function MoreInfo({ children }: MoreInfoProps) {
  return (
    <Container>
      <h1>MoreInfo</h1>
      {children}
    </Container>
  );
};

export default MoreInfo;
