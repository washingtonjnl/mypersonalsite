import styled from 'styled-components'

import bubbles from '../../assets/bubbles.png'

export const Container = styled.main`
  padding: 0 30px;

  @media (max-width: 600px) {
    padding: 0 20px;
  }
`

export const Hero = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  padding: 100px 0 60px 0;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    gap: 0px;
    padding: 30px 0;
    padding-bottom: 10px;
  }
`

export const HeroText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    font-family: ${props => props.theme.fonts.sansSerif}, sans-serif;
    font-size: 18px;
    line-height: 180%;

    & + p {
      margin-top: 20px;
      margin-bottom: 16px;
    }
  }

  a {
    display: flex;
    place-items: center;

    color: ${props => props.theme.colors.primary};
    font-weight: 500;
    font-size: 16px;
    padding: 16px 0;
    text-decoration: none;

    svg {
      font-size: 22px;
      margin-top: -1px;
      margin-right: 12px;
    }
  }

  @media (max-width: 600px) {
    p {
      font-size: 16px;
      text-align: center;
    }

    a {
      align-self: center;
    }
  }
`

export const SocialCard = styled.div`
  background: ${props => props.theme.colors.light};
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.05);
  border-radius: 20px;

  display: flex;
  flex-direction: column;

  place-items: center;
  place-content: center;
  padding: 62px;

  text-align: center;

  img {
    border-radius: 50%;
    margin-bottom: 36px;
    width: 210px;
  }

  strong {
    font-family: ${props => props.theme.fonts.serif}, serif;
    color: ${props => props.theme.colors.title};
    font-size: 28px;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 16px;
  }

  p {
    font-family: ${props => props.theme.fonts.sansSerif}, sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 130%;
  }

  @media (max-width: 600px) {
    padding: 40px 25px;
    margin-bottom: 40px;
  }
`

export const Abilities = styled.div`
  padding: 40px 0;

  h1 {
    font-size: 40px;
    text-align: center;
    margin-bottom: 80px;
  }

  @media (max-width: 600px) {
    padding: 30px 15px;

    h1 {
      font-size: 32px;
      margin-bottom: 40px;
    }
  }
`

export const Charts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 65px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 30px;
  }
`

export const Experiences = styled.div`
  padding: 40px 0;

  h1 {
    font-size: 40px;
    text-align: center;
    margin-bottom: 80px;
  }

  @media (max-width: 600px) {
    padding: 30px 15px;

    h1 {
      font-size: 32px;
      margin-bottom: 40px;
    }
  }
`

export const ExperiencesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 66px;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 0px;
  }
`

export const Experience = styled.div`
  background: ${props => props.theme.colors.light};
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 30px;

  display: flex;
  flex-direction: column;

  span {
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.fonts.sansSerif}, sans-serif;
  }

  strong {
    color: ${props => props.theme.colors.title};
    font-family: ${props => props.theme.fonts.serif}, serif;
    font-size: 24px;
    font-weight: 700;
    margin: 5px 0;
  }

  label {
    color: ${props => props.theme.colors.title};
    font-family: ${props => props.theme.fonts.sansSerif}, sans-serif;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  p {
    line-height: 160%;

    & + p {
      margin-top: 15px;
    }
  }

  @media (max-width: 600px) {
    & + & {
      margin-top: 40px;
    }
  }
`

export const MyHobbies = styled.div`
  padding: 40px 0;

  h1 {
    font-size: 40px;
    text-align: center;
    margin-bottom: 80px;
  }

  @media (max-width: 600px) {
    padding: 30px 15px;

    h1 {
      font-size: 32px;
      margin-bottom: 40px;
    }
  }
`

export const Hobbies = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 65px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 30px;
  }
`

export const Contact = styled.div`
  color: ${props => props.theme.colors.light};
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
  border-radius: 25px;

  background-image: url(${bubbles});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  padding: 80px 90px;
  margin: 60px 0 10px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    max-width: 50%;
  }

  h1 {
    font-family: ${props => props.theme.fonts.sansSerif}, serif;
    font-weight: 500;
    font-size: 48px;
    line-height: 130%;

    span {
      font-family: ${props => props.theme.fonts.serif}, sans-serif;
      font-style: italic;
      font-weight: 700;
    }
  }

  strong {
    font-size: 20px;
    font-weight: 500;
    font-style: italic;
  }

  ul {
    margin-top: 20px;
    list-style: none;
  }

  li {
    &:nth-child(even) {
      margin: 10px 0;
    }
  }

  a {
    text-decoration: none;
    color: inherit;

    display: flex;
    place-items: center;
    font-size: 20px;

    transition: 0.2s;

    svg {
      margin-right: 14px;
    }

    &:hover {
      transform: translateY(-5px);
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 30px;
    margin: 30px 0 10px 0;

    div {
      max-width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h1 {
      font-size: 32px;
      text-align: center;
    }

    strong {
      text-align: center;
      font-size: 18px;

      margin-top: 35px;
      margin-bottom: 10px;
    }

    ul {
      margin-top: 0;
    }

    li {
      display: flex;
      place-content: center;

      &:nth-child(even) {
        margin: 0;
      }
    }

    a {
      font-size: 18px;
      padding: 8px 0;

      svg {
        margin-right: 10px;
      }
    }
  }
`
