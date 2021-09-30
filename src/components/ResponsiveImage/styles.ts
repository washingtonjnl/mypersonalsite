import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  margin: 2.5rem 0rem;

  transition: all 0.2s;

  @media (max-width: 1024px) {
    margin: 2rem 0rem;
  }

  @media (max-width: 812px) {
    margin: 1rem 0rem;
  }

  @media (max-width: 414px) {
    margin: 0.5rem 0rem;
  }
`;
