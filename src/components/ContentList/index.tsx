import { ReactNode } from 'react';

import { Container } from './styles';

interface ContentListProps {
  children: ReactNode;
}

function ContentList({ children }: ContentListProps) {
  return (
    <Container>
      <h1>ContentList</h1>
      {children}
    </Container>
  );
};

export default ContentList;
