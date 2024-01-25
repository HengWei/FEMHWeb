import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NavBar() {
  return (
      <Navbar bg="primary" data-bs-theme="dark" expand="lg" >
          <Container>
              <Navbar.Brand href="/">亞東醫院過敏免疫風濕科</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link href="/#/Member">成員介紹</Nav.Link>
                      <Nav.Link href="/#/symptom">常見症狀</Nav.Link>
                      <Nav.Link href="/#/disease">常見疾病</Nav.Link>
                      <Nav.Link href="/#/medication">常見藥物</Nav.Link>
                      <Nav.Link href="/#/lab">常見檢驗</Nav.Link> 
                  </Nav>
                  <Form className="d-flex">
                      <Form.Control
                          type="search"
                          placeholder="搜尋"
                          className="me-2"
                          aria-label="Search"
                      />
                      <Button>Search</Button>
                  </Form>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  );
}

export default NavBar;