import styled from 'styled-components';

export const Container = styled.main`
  max-width: 90rem;
  margin: 0rem auto;

  padding: 3rem 7.625rem 3.5rem 7.625rem;

  display: flex;
  justify-content: space-between;
`;

export const Profile = styled.aside`
  display: flex;
  flex-direction: column;

  > div {
    position: fixed;
    display: grid;
    gap: 1rem;
  }
`;

export const Content = styled.main`
  padding-top: 6.125rem;
  max-width: 56rem;
  display: grid;
  gap: 2rem;
`;
