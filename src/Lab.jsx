﻿/* eslint-disable react/jsx-key */
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './lab.json';

function Lab() {

    //加載症狀JSON   
    let itemAccordion = data.data.map(item => 
        <Accordion.Item key={item.id} eventKey={item.id}>
            <Accordion.Header>{item.title}</Accordion.Header>
            <Accordion.Body>
                {item.context}
            </Accordion.Body>
        </Accordion.Item>
    );

    return (
        <Container style={{ minHeight: 750 }} className="mt-4 mb-5" >
            <Row>
                <Col>
                    <h2>常見檢驗</h2>
                </Col>
            </Row>
            <Row className="mt-3">
                <Accordion defaultActiveKey="0" >
                    {itemAccordion}
                </Accordion>
            </Row>
        </Container>
    )
}
export default Lab
