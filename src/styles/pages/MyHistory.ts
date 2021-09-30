import styled from 'styled-components';

import Breadcrumbs from '../../components/Breadcrumbs';

export const Container = styled.div`
  max-width: 90rem;
  margin: 0rem auto;

  padding: 3rem 7.625rem 3.5rem;

  @media (max-width: 1024px) {
    padding: 3rem 3rem 3.5rem;
  }

  @media (max-width: 812px) {
    padding: 2rem 2rem 2.5rem;
  }

  @media (max-width: 414px) {
    padding: 1.5rem 1.5rem 2rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1rem;

  strong {
    font-weight: 600;
  }

  & + & {
    margin-top: 1rem;
  }
`;

export const StyledBreadcrumbs = styled(Breadcrumbs)`
  margin-bottom: 4.625rem;

  @media (max-width: 1024px) {
    margin-bottom: 3.5rem;
  }

  @media (max-width: 812px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 414px) {
    margin-bottom: 2rem;
  }
`;
