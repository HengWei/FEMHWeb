
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

    const [itemListId, setItemListId] = useState();

    const [offTitle, setOffTitle] = useState();

    const [offItem, setOffItem] = useState(["1","2","3"]);

    //const [itemData, setItemData] = useState(data.data);

    const handleClose = () => setShow(false);    


    function renderList()
    {
        console.log(itemListId);


        const filteredData = data.data.find((item) => { return item.id === itemListId; });

        console.log(filteredData);

        let itemList = [];


        filteredData.childs.map((item) => {
            itemList.push(
                <ListGroup.Item action href={item.url}>
                    {item.title}
                </ListGroup.Item>
            );
        });

        return (
            <>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{filteredData.parent}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup >
                        {itemList}
                    </ListGroup>
                </Offcanvas.Body>
            </>

        );
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
                        <Button variant="primary" onClick={() => {
                            setItemListId(item.id);                          
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