import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Footer() {

    const today = new Date();
    const todayYear = today.getFullYear();

  return (   
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" fixed="bottom">
          <Container>
              <Navbar.Brand href="#">© {todayYear} 亞東醫院過敏免疫風濕科</Navbar.Brand>
          </Container>
      </Navbar>
  );
}

export default Footer;