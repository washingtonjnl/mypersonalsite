import Logo from '../../assets/logo.svg';

import { Container } from './styles';

function Signature() {
  return (
    <Container>
      <Logo />
      <div>
        <strong>Washington Junior</strong>
        <p>Product Designer</p>
      </div>
    </Container>
  );
}

export default Signature;
