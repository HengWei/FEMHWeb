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

    const [offTitle, setOffTitle] = useState();

    const [offItem, setOffItem] = useState([]); 

    const handleClose = () => setShow(false);    

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
                        <Button variant="primary" onClick={() => {                                                    
                            setOffTitle(item.parent);
                            setOffItem(item.childs);                            
                            setShow(true);
                        }}>詳細</Button>
                    </Card.Body>
                </Card>
            </Col>
        );
    });

    return (
        <>
            <Container style={{ minHeight: 800, paddingTop: 20 }} >
                <Row>
                    {itemCard}
                </Row>
            </Container>

            <Offcanvas show={show} onHide={handleClose}>                
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{offTitle}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup>
                        {offItem.map((item, i) =>
                            <ListGroup.Item action href={item.url} key={i}>
                                {item.title}
                            </ListGroup.Item>)
                        } 
                    </ListGroup>                             
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}




export default DiseaseIdx;