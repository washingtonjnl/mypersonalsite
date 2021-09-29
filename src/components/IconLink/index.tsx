import Link from 'next/link';
import { FaLink } from 'react-icons/fa';

import { Container } from './styles';

export interface IconLinkProps {
  text: string;
  type: 'internal' | 'external';
  href: string;
}

function IconLink({ text, type, href }: IconLinkProps) {
  switch (type) {
    case 'internal':
      return (
        <Container>
          <FaLink size="1rem" />
          <Link href={href}>{text}</Link>
        </Container>
      );
    case 'external':
      return (
        <Container>
          <FaLink size="1rem" />
          <a href={href} target="_blank">
            {text}
          </a>
        </Container>
      );
  }
}

export default IconLink;
