import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
      <Navbar bg="primary" data-bs-theme="dark" expand="lg" >
          <Container>
              <Navbar.Brand href="/">亞東醫院過敏免疫風濕科</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link href="/#/Member">成員介紹</Nav.Link>
                      <Nav.Link href="#link">常見症狀</Nav.Link>
                      <Nav.Link href="#link1">常見疾病</Nav.Link>
                      <Nav.Link href="#link2">常見藥物</Nav.Link>
                      <Nav.Link href="#link3">常見檢驗</Nav.Link>
                      <Nav.Link href="#link4">病友會花絮</Nav.Link>
                      <Nav.Link href="#link5">院方Q&A</Nav.Link>
                      <Nav.Link href="#link6">醫病共享決策</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  );
}

export default NavBar;