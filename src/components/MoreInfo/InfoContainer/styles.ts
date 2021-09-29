import styled from 'styled-components';
import { saturate } from 'polished';

export const Container = styled.div`
  border: 0.0625rem solid ${({ theme }) => theme.colors.main.dark};
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const Title = styled.h3`
  background: ${({ theme }) => theme.colors.main.dark};
  padding: 0.625rem 1rem 0.625rem 1rem;

  font-size: 0.875rem;
  line-height: 1.1375rem;
  font-weight: 700;

  font-family: ${({ theme }) => theme.fonts.serif};
  font-style: italic;

  color: ${({ theme }) => theme.colors.inverse};
`;

export const ProjectsContent = styled.div`
  padding: 1rem;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: ${({ theme }) => theme.colors.main.dark};
    text-decoration: none;

    transition: all 0.2s;

    & + a {
      margin-top: 1rem;
    }

    &:hover {
      color: ${({ theme }) => saturate(0.5, theme.colors.main.light)};
      transform: translateX(0.25rem);

      p,
      label {
        color: inherit;
      }
    }
  }

  p {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 0.975rem;
    color: ${({ theme }) => theme.colors.main.default};
    margin-bottom: -0.125rem;
  }

  label {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 0.8125rem;
    color: ${({ theme }) => theme.colors.main.light};
  }
`;

export const TopicsContent = styled.div`
  padding: 1rem;

  p {
    display: flex;
    align-items: center;

    font-weight: 400;
    font-size: 0.8125rem;
    line-height: 0.975rem;
    color: ${({ theme }) => theme.colors.main.default};

    & + p {
      margin-top: 1rem;
    }
  }

  svg {
    margin-right: 0.5rem;
  }
`;
