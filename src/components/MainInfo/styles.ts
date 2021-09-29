import styled from 'styled-components';
import { saturate } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 9.75rem;

    border: 0.125rem solid ${({ theme }) => theme.colors.main.dark};
    border-radius: 4.875rem;

    align-self: center;
    z-index: 0;
    margin-bottom: -3rem;
  }
`;

export const Content = styled.div`
  border: 0.0625rem solid ${({ theme }) => theme.colors.main.dark};
  border-top: 3.5rem solid ${({ theme }) => theme.colors.main.dark};
  border-radius: 0.5rem;

  padding: 1rem;

  h1 {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-weight: 700;

    font-size: 1.125rem;
    line-height: 1.4625rem;
    color: ${({ theme }) => theme.colors.main.dark};

    margin-bottom: 0.25rem;
  }

  h2 {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.1375rem;
    color: ${({ theme }) => theme.colors.main.default};
  }

  hr {
    margin: 1rem 0rem;
    background: ${({ theme }) => theme.colors.main.light};
    border: 0rem;
    height: 0.0625rem;
  }

  p {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 0.975rem;
    color: ${({ theme }) => theme.colors.main.default};

    &:nth-of-type(2) {
      margin: 0.5rem 0rem 0.75rem 0rem;
    }
  }
`;

export const SocialList = styled.div`
  margin-top: 1rem;

  a {
    color: ${({ theme }) => theme.colors.main.dark};
    text-decoration: none;
  }

  a + a {
    margin-left: 1rem;
  }

  a:hover {
    color: ${({ theme }) => saturate(0.5, theme.colors.main.light)};
    svg {
      transform: scale(1.2);
    }
  }

  svg {
    color: inherit;
    transition: all 0.2s;
  }
`;
