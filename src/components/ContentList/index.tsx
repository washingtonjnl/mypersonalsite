import { ReactNode } from 'react';

import ContentItemData from '../../content/ContentItemDTO';
import ContentListItem from './ContentListItem';

import { Container } from './styles';

interface ContentListProps {
  type: 'professional' | 'academic';
  children: ReactNode;
  content: ContentItemData[];
}

function ContentList({ type, children, content }: ContentListProps) {
  return (
    <Container>
      <h1>{children}</h1>
      {content.map((item, key) => (
        <ContentListItem
          key={key}
          period={item.period}
          title={type === 'professional' ? item.institution : item.context}
          caption={type === 'professional' ? item.context : item.institution}
          description={item.description}
          link={item.link}
        />
      ))}
    </Container>
  );
}

export default ContentList;
