import { ReactNode } from 'react';

import { Container } from './styles';

interface ContentTitleProps {
  children: ReactNode;
}

function ContentTitle({ children }: ContentTitleProps) {
  return (
    <Container>
      <h1>ContentTitle</h1>
      {children}
    </Container>
  );
};

export default ContentTitle;
