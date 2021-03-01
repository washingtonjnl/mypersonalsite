import styled from 'styled-components'

export const Container = styled.h1`
  font-family: ${props => props.theme.fonts.serif}, serif;
  color: ${props => props.theme.colors.title};
  font-weight: 700;
  font-size: 48px;
  line-height: 130%;
  font-style: italic;

  margin-bottom: 36px;

  span {
    font-family: ${props => props.theme.fonts.sansSerif}, sans-serif;
  }

  @media (max-width: 600px) {
    font-size: 32px;
    text-align: center;
  }
`
