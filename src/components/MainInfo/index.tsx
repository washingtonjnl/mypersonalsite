import { FaGithub, FaInbox, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

import { Container, Content, SocialList } from './styles';

function MainInfo() {
  return (
    <Container>
      <img src="me.jpeg" alt="Washington Junior" />
      <Content>
        <h1>Washington Junior</h1>
        <h2>Product Designer</h2>
        <hr />
        <p>20 anos</p>
        <p>oi@washingtonjunior.com</p>
        <p>(21) 99010-6262</p>
        <SocialList>
          <a
            href="https://www.linkedin.com/in/washington-junior-b2865b1b9/"
            target="_blank"
          >
            <FaLinkedinIn size="1rem" />
          </a>
          <a href="https://github.com/washingtonjnl" target="_blank">
            <FaGithub size="1rem" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5521990106262&text=Ol%C3%A1!%20Encontrei%20este%20numero%20no%20seu%20site,%20podemos%20conversar?"
            target="_blank"
          >
            <FaWhatsapp size="1rem" />
          </a>
          <a href="mailto:oi@washingtonjunior.com" target="_blank">
            <FaInbox size="1rem" />
          </a>
        </SocialList>
      </Content>
    </Container>
  );
}

export default MainInfo;
