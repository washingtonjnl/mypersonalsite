import styled from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme.colors.light};
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 25px;
  padding-top: 40px;

  display: flex;
  flex-direction: column;
  place-items: center;

  svg {
    margin-bottom: 25px;
  }

  p {
    color: ${props => props.theme.colors.title};
    font-weight: 500;
    font-size: 18px;
    text-align: center;
  }
`
