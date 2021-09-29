import styled from 'styled-components';

export const Container = styled.div`
  > h1 {
    background: ${({ theme }) => theme.colors.main.dark};
    padding: 0.625rem 1rem 0.75rem 1rem;

    font-size: 1.5rem;
    line-height: 1.95rem;
    font-weight: 700;

    font-family: ${({ theme }) => theme.fonts.serif};
    font-style: italic;

    color: ${({ theme }) => theme.colors.inverse};

    span {
      font-family: ${({ theme }) => theme.fonts.sansSerif};
    }

    margin-bottom: 1.5rem;
  }
`;
