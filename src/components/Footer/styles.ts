import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.footer`
  small {
    font-size: 1rem;
    line-height: 1.5rem;

    color: ${({ theme }) => theme.colors.main.light};
  }

  a {
    color: inherit;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => shade(0.3, theme.colors.main.light)};
    }
  }

  @media (max-width: 1024px) {
    text-align: center;
  }
`;
