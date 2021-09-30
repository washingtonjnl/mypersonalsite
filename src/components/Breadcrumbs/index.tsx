import { useMemo } from 'react';
import Link from 'next/link';

import { FaArrowLeft } from 'react-icons/fa';

import { Container } from './styles';

interface BreadcrumbsProps {
  path: string[];
  href: string;
  className?: string;
}

function Breadcrumbs({ path, href, className }: BreadcrumbsProps) {
  const breadcrubsPath = useMemo(() => {
    return path.join(' / ');
  }, path);

  return (
    <Container className={className}>
      <FaArrowLeft size="0.875rem" />
      <Link href={href}>{breadcrubsPath}</Link>
    </Container>
  );
}

export default Breadcrumbs;
