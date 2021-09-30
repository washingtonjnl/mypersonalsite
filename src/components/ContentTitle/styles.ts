import styled, { css } from 'styled-components';

interface ContainerProps {
  withLink: boolean;
}

export const Container = styled.section<ContainerProps>`
  h1 {
    font-size: 2.5rem;
    line-height: 3.25rem;
    font-weight: 700;

    font-family: ${({ theme }) => theme.fonts.serif};

    color: ${({ theme }) => theme.colors.main.dark};

    span {
      font-family: ${({ theme }) => theme.fonts.sansSerif};
    }

    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;

    strong {
      font-weight: 600;
    }

    & + p {
      margin-top: 1rem;
    }

    ${({ withLink }) =>
      withLink &&
      css`
        margin-bottom: 1.5rem;
      `}
  }

  @media (max-width: 736px) {
    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 414px) {
    h1 {
      font-size: 1.7rem;
      line-height: 2.7rem;
    }
  }
`;
