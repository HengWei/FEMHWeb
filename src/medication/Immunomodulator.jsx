import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import data from '../Medication.json';


function Immunomodulator() {
    return (
        <Container style={{ minHeight: 800, paddingTop: 20 }}>
            <Row>
                <h1>免疫調節劑</h1>               
            </Row>
            <Row>
                {
                    data.data.find(x => x.id === 3).child.map((item, i) =>
                        <Col style={{ paddingTop: 18 }} xs={12} md={3} key={i}>
                            <Card>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.context}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>)
                }
            </Row>
        </Container>
    );
}

export default Immunomodulator;