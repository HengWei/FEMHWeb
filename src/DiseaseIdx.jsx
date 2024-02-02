import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import data from './Disease.json';

function DiseaseIdx() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);  

    function handleShow(id)
    {
        //let offItem = [];

        //console.log(id);

       

        //data.data.map((item) => {
        //    itemCard.push(
        //        <Col style={{ paddingTop: 15 }} xs={12} md={4}>
        //            <Card >
        //                <Card.Body>
        //                    <Card.Title>{item.parent}</Card.Title>
        //                    <Card.Subtitle className="mb-2 text-muted">{item.sub}</Card.Subtitle>
        //                    <Card.Text>
        //                    </Card.Text>
        //                    <Button variant="primary" onClick={handleShow}>詳細</Button>
        //                </Card.Body>
        //            </Card>
        //        </Col>
        //    );
        //});

        setShow(true);

        //return offItem;
    }

    let itemCard = [];

    data.data.map((item) => {
        itemCard.push(
            <Col style={{ paddingTop: 15 }} xs={12} md={4}>
                <Card >
                    <Card.Body>
                        <Card.Title>{item.parent}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{item.sub}</Card.Subtitle>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary" onClick={handleShow}>詳細</Button>
                    </Card.Body>
                </Card>
            </Col>
        );
    });

    //let newData = data.filter((item) => { return item.id.include(1) });

    //console.log(newData);


    return (
        <>
            <Container style={{ minHeight: 800, paddingTop: 20 }} >
                <Row>
                    {itemCard}
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