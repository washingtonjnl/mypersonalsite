import { useMemo } from 'react';

import IconLink, { IconLinkProps } from '../../IconLink';

import { Container } from './styles';

interface PeriodProps {
  in: string;
  out: string;
}

export interface ContentListItemProps {
  period: PeriodProps;
  title: string;
  caption: string;
  description: string;
  link?: IconLinkProps;
}

function ContentListItem({
  period,
  title,
  caption,
  description,
  link
}: ContentListItemProps) {
  const periodString = useMemo(() => {
    return period.in === period.out
      ? period.in
      : `${period.in} - ${period.out}`;
  }, [period]);

  return (
    <Container withLink={!!link}>
      <small>{periodString}</small>
      <h1>{title}</h1>
      <h2>{caption}</h2>
      {description.split('\n').map(lineBlock => (
        <p>{lineBlock}</p>
      ))}
      {link && <IconLink text={link.text} type={link.type} href={link.href} />}
    </Container>
  );
}

export default ContentListItem;
