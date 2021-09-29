import styled from 'styled-components';
import { saturate } from 'polished';

export const Container = styled.div`
  display: flex;
  width: max-content;
  align-items: center;

  color: ${({ theme }) => theme.colors.main.dark};
  transition: all 0.2s;

  svg {
    margin-right: 0.5rem;
  }

  a {
    color: inherit;
    text-decoration: none;

    font-size: 1rem;
    font-weight: 400;
  }

  &:hover {
    color: ${({ theme }) => saturate(0.5, theme.colors.main.light)};
    transform: scale(1.05);
  }
`;
