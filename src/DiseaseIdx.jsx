import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
//import data from 'json/disease.json'

function DiseaseIdx() {
    return (
        <>
            <Container style={{ minHeight: 800, paddingTop: 20 }} >
                <Row>
                    <Col style={{ paddingTop: 18 }} xs={12} md={4}>
                        <Card >
                            <Card.Img variant="top" src="./public/images/member/001.jpg" />
                            <Card.Body>
                                <Card.Title>風濕關節疾病</Card.Title>
                                <Card.Text>
                                    <Button variant="primary">前往頁面</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>      
                    <Col style={{ paddingTop: 18 }} xs={12} md={4}>
                        <Card >
                            <Card.Img variant="top" src="./public/images/member/001.jpg" />
                            <Card.Body>
                                <Card.Title>全身性免疫疾病</Card.Title>
                                <Card.Text>
                                    <Button variant="primary">前往頁面</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>     
                    <Col style={{ paddingTop: 18 }} xs={12} md={4}>
                        <Card >
                            <Card.Img variant="top" src="./public/images/member/001.jpg" />
                            <Card.Body>
                                <Card.Title>血管炎</Card.Title>
                                <Card.Text>
                                    <Button variant="primary">前往頁面</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>     
                </Row>      
                <Row>
                    <Col style={{ paddingTop: 18 }} xs={12} md={4}>
                        <Card >
                            <Card.Img variant="top" src="./public/images/member/001.jpg" />
                            <Card.Body>
                                <Card.Title>一些可能與免疫風濕疾病相關的症候群</Card.Title>
                                <Card.Text>
                                    <Button variant="primary">前往頁面</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ paddingTop: 18 }} xs={12} md={4}>
                        <Card >
                            <Card.Img variant="top" src="./public/images/member/001.jpg" />
                            <Card.Body>
                                <Card.Title>過敏疾病</Card.Title>
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