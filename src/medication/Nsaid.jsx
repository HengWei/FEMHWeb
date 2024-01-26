import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function Nsaid() {




    return (
        <Container style={{ minHeight: 800, paddingTop: 20 }}>
            <Row>
                <Col style={{ paddingTop: 18 }} xs={12} md={3}>
                    <Card>
                        <Card.Img variant="top" src="./public/images/medication/acemet.jpg" />
                        <Card.Body>
                            <Card.Title>Acemet</Card.Title>
                            <Card.Text>                              
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col style={{ paddingTop: 18 }} xs={12} md={3}>
                    <Card>
                        <Card.Img variant="top" src="./public/images/medication/cataflam.jpg" />
                        <Card.Body>
                            <Card.Title>Cataflam</Card.Title>
                            <Card.Text>
                              
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>  
                <Col style={{ paddingTop: 18 }} xs={12} md={3}>
                    <Card>
                        <Card.Img variant="top" src="./public/images/medication/cataflam.jpg" />
                        <Card.Body>
                            <Card.Title>Cataflam</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>       
                <Col style={{ paddingTop: 18 }} xs={12} md={3}>
                    <Card>
                        <Card.Img variant="top" src="./public/images/medication/cataflam.jpg" />
                        <Card.Body>
                            <Card.Title>Cataflam</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>  
                <Col style={{ paddingTop: 18 }} xs={12} md={3}>
                    <Card>
                        <Card.Img variant="top" src="./public/images/medication/cataflam.jpg" />
                        <Card.Body>
                            <Card.Title>Cataflam</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>      
            </Row>          
        </Container>
    );
}

export default Nsaid;