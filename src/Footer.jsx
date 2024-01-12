import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Footers from 'react-bootstrap/Footer';

function Footer() {

    const today = new Date();
    const todayYear = today.getFullYear();

  return (   
      <Footers bg="dark" data-bs-theme="dark" expand="lg" fixed="bottom">
          <Container>
              <Navbar.Brand href="#">© {todayYear} 亞東醫院過敏免疫風濕科</Navbar.Brand>
          </Container>
      </Footers>
  );
}

export default Footer;