import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 1024px) {
    flex-direction: row;
    flex: 1;
  }

  @media (max-width: 736px) {
    width: calc(300vw - 8rem);
  }

  @media (max-width: 414px) {
    width: calc(300vw - 5rem);
  }
`;

export const ScrollContent = styled.div`
  width: 100%;

  @media (max-width: 736px) {
    width: 100vw;
    overflow-x: auto;
    margin-left: -2rem;
    padding: 0rem 2rem;
  }

  @media (max-width: 414px) {
    margin-left: -1.5rem;
    padding: 0rem 1.5rem;
  }
`;
