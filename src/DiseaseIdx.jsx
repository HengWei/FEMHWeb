import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
//import data from 'json/disease.json'

function DiseaseIdx() {
    return (
        <>
            <Container>
                <Row>
                    <Col style={{ paddingTop: 18 }} xs={12} md={4}>
                        <Card >
                            <Card.Img variant="top" src="./public/images/member/001.jpg" />
                            <Card.Body>
                                <Card.Title>Title</Card.Title>
                                <Card.Text>
                                    <Button variant="primary">前往頁面</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>                    
                </Row>                
            </Container>
        </>
    );
}


export default DiseaseIdx;