import styled, { css } from 'styled-components';

interface ContainerProps {
  withLink: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding-left: 1rem;
  border-left: 0.125rem solid ${({ theme }) => theme.colors.main.dark};

  @media (max-width: 320px) {
    border: none;
    padding-left: 0;
  }

  & + & {
    margin-top: 2rem;
  }

  small {
    font-size: 0.875rem;
    line-height: 1.3125rem;
    color: ${({ theme }) => theme.colors.main.light};

    margin-bottom: 0.25rem;
  }

  h1 {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-weight: 700;

    font-size: 1.5rem;
    line-height: 2.0431rem;
    color: ${({ theme }) => theme.colors.main.dark};

    margin-bottom: 0.25rem;
  }

  h2 {
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.6875rem;
    color: ${({ theme }) => theme.colors.main.default};

    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.colors.main.default};

    & + p {
      margin-top: 0.5rem;
    }

    ${({ withLink }) =>
      withLink &&
      css`
        margin-bottom: 1rem;
      `}
  }
`;
