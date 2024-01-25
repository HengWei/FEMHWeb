import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';

function DiseaseIdx() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Container style={{ minHeight: 800, paddingTop: 20 }} >
                <Row>
                    <Col style={{ paddingTop: 18 }} xs={12} md={4}>
                        <Card >
                            <Card.Body>
                                <Card.Title>風濕關節疾病</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">我是描述</Card.Subtitle>
                                <Card.Text>                                    
                                </Card.Text>
                                <Button variant="primary" onClick={handleShow}>詳細</Button>                                
                            </Card.Body>
                        </Card>                        
                    </Col>      
                    <Col style={{ paddingTop: 18 }} xs={12} md={4}>
                        <Card >                            
                            <Card.Body>
                                <Card.Title>全身性免疫疾病</Card.Title>
                                <Card.Text>
                                    <Button variant="primary">詳細</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>     
                    <Col style={{ paddingTop: 18 }} xs={12} md={4}>
                        <Card >
                            
                            <Card.Body>
                                <Card.Title>血管炎</Card.Title>
                                <Card.Text>
                                    <Button variant="primary">詳細</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>     
                </Row>      
                <Row>
                    <Col style={{ paddingTop: 18 }} xs={12} md={4}>
                        <Card >
                            
                            <Card.Body>
                                <Card.Title>一些可能與免疫風濕疾病相關的症候群</Card.Title>
                                <Card.Text>
                                    <Button variant="primary">詳細</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ paddingTop: 18 }} xs={12} md={4}>
                        <Card >
                           
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


            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>風濕關節疾病</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup >
                        <ListGroup.Item action href="/#/member">
                            痛風
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                            Link 2
                        </ListGroup.Item>
                        <ListGroup.Item action >
                            This one is a button
                        </ListGroup.Item>
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}


export default DiseaseIdx;