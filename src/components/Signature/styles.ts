import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin: 2rem 0rem;

  color: ${({ theme }) => theme.colors.main.dark};

  svg {
    margin-right: 1rem;
  }

  path {
    fill: ${({ theme }) => theme.colors.main.dark};
  }

  strong {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1.1rem;
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.main.default};
  }
`;
