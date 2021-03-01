import styled from 'styled-components'

export const Container = styled.main`
  min-height: 100vh;
  padding: 0 30px;

  @media (max-width: 600px) {
    padding: 0 20px;
  }
`

export const Heading = styled.div`
  text-align: center;
  padding: 100px 0 60px 0;

  h1 {
    margin-bottom: 20px;
  }

  h2 {
    font-weight: 500;
  }

  @media (max-width: 600px) {
    padding: 40px 0;

    h2 {
      font-size: 18px;
    }
  }
`
