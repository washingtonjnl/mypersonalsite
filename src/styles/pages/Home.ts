import styled from 'styled-components';

export const Container = styled.main`
  max-width: 90rem;
  margin: 0rem auto;

  padding: 3rem 7.625rem 3.5rem;

  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 3rem 3rem 3.5rem;
  }

  @media (max-width: 812px) {
    padding: 2rem 2rem 2.5rem;
  }

  @media (max-width: 414px) {
    padding: 1.5rem 1.5rem 2rem;
  }
`;

export const Profile = styled.aside`
  display: flex;
  flex-direction: column;
  margin-right: 2.5rem;

  > div {
    position: fixed;
    display: grid;
    gap: 1rem;
  }

  @media (max-width: 1650px) {
    > div {
      position: relative;
      display: grid;
      gap: 1rem;
    }
  }

  @media (max-width: 1024px) {
    margin-right: 0rem;

    > div {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
    }
  }

  @media (max-width: 812px) {
    > div {
      flex-direction: column;
    }
  }
`;

export const Content = styled.main`
  padding-top: 6.125rem;
  flex: 1;
  max-width: 56rem;
  display: grid;
  gap: 2rem;

  @media (max-width: 1024px) {
    padding-top: 2rem;
    max-width: 100%;
  }
`;
