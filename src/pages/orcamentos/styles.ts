import styled from 'styled-components'
import { transparentize } from 'polished'

export const Container = styled.section`
  border-top: 10px solid ${props => props.theme.colors.main.dark};
`

export const Main = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding: 35px;

  @media (max-width: 600px) {
    padding: 20px;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > svg {
    path {
      fill: ${props => props.theme.colors.main.dark};
    }
  }

  @media (max-width: 600px) {
    flex-direction: row-reverse;
  }
`

export const Contact = styled.div`
  h1 {
    color: ${props => props.theme.colors.main.dark};
    margin-bottom: 15px;
  }

  p {
    display: flex;
    flex-direction: column;
    line-height: 26px;
    font-size: 14px;
  }

  span {
    display: flex;
    place-items: center;

    svg {
      margin-right: 8px;
      color: ${props => props.theme.colors.main.dark};
    }
  }
`

export const InvoicePresentation = styled.section`
  margin: 65px 0 45px 0;

  h1 {
    color: ${props => props.theme.colors.main.dark};
    font-size: 36px;
    margin-bottom: 14px;

    display: flex;
    align-items: center;
  }

  button {
    margin-left: 14px;
    margin-top: 5px;
    padding: 8px;

    transition: 0.2s;
    border: 0;

    background: none;
    border-radius: 5px;

    color: ${props => props.theme.colors.main.dark};

    &:hover {
      background: ${props => transparentize(0.8, props.theme.colors.main.dark)};
    }
  }

  h2 {
    color: ${props => props.theme.colors.main.default};
    font-size: 18px;
    font-weight: 400;
  }

  @media (max-width: 600px) {
    margin: 30px 0 20px 0;

    h1 {
      font-size: 24px;
      line-height: 1.5em;
    }

    h2 {
      line-height: 1.4em;
    }
  }
`

export const ProjectInfo = styled.section`
  margin: 45px 0;
  display: flex;

  div + div {
    margin-left: 60px;
  }

  strong {
    line-height: 36px;
  }

  @media (max-width: 600px) {
    margin: 20px 0 50px 0;
    flex-direction: column;

    div + div {
      margin: 0;
      margin-top: 10px;
    }
  }
`

export const Separator = styled.div`
  height: 1px;
  background: ${props => props.theme.colors.main.default};
`

export const Services = styled.section`
  margin: 45px 0;

  h3 {
    color: ${props => props.theme.colors.main.dark};
    font-size: 24px;
    margin-bottom: 25px;
    margin-left: 8px;
  }
`

export const ServicesTable = styled.table`
  width: 100%;

  tr:nth-child(even) {
    background: ${props =>
      transparentize(0.95, props.theme.colors.main.default)};
  }

  td {
    padding: 8px;
  }
`

export const Details = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 45px 0;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const Obs = styled.p`
  width: 50%;
  color: ${props => props.theme.colors.main.default};
  line-height: 24px;

  opacity: 0.7;

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 30px;
  }
`

export const Pricing = styled.div`
  width: 25%;
  font-size: 18px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  div:nth-child(even) {
    margin: 12px 0;
  }

  strong {
    color: ${props => props.theme.colors.main.dark};
    font-weight: normal;
  }

  div:last-child {
    margin-top: 30px;
    color: ${props => props.theme.colors.main.dark};

    p {
      font-weight: bold;
      font-size: 22px;
    }
  }

  @media (max-width: 600px) {
    width: 100%;

    div:last-child {
      margin-top: 20px;
    }
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  opacity: 0.4;

  svg {
    margin-bottom: 15px;
    fill: ${props => props.theme.colors.main.default};
  }

  p {
    font-size: 14px;
    color: ${props => props.theme.colors.main.default};
  }
`

export const WarningPage = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  place-content: center;

  text-align: center;

  img {
    height: 300px;
  }

  h1 {
    color: ${props => props.theme.colors.main.dark};
    margin: 20px 0 10px 0;
  }

  p {
    font-size: 18px;
  }
`
