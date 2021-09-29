import { ReactNode } from 'react';

import IconLink, { IconLinkProps } from '../IconLink';

import { Container } from './styles';

interface ContentTitleProps {
  children: ReactNode;
  link?: IconLinkProps;
}

function ContentTitle({ children, link }: ContentTitleProps) {
  return (
    <Container withLink={!!link}>
      {children}
      <IconLink text={link.text} type={link.type} href={link.href} />
    </Container>
  );
}

export default ContentTitle;
