/* eslint-disable react/jsx-key */
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './Symptom.json';

function Symptom()
{
    //加載症狀JSON
    let itemAccordion = data.data.map(item =>         
            <Accordion.Item eventKey={item.id}>
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>
                    {item.context}
                </Accordion.Body>
            </Accordion.Item>        
    );

    return (
        <Container style={{ minHeight: 800 }} className="mt-4 mb-5" >
            <Row>
                <Col>
                    <h2>常見症狀</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    過敏免疫風濕疾病的表現千變萬化，常常牽涉到許多器官系統的表現， 但是萬變不離其宗，本科最重要的疾病是針對一些全身性系統性的免疫疾病如類風濕性關節炎、全身性紅斑狼瘡等。事實上，許多疾病都有免疫系統失調的參與，例如自體免疫甲狀腺疾病，但是此類單一器官系統的疾病仍由當科處理為原則(例如甲狀腺疾病的治療仍以內分泌科為主)。如有下列症狀 伴隨全身性的表現，除了到原來疾病相關器官(例如眼科，耳鼻喉科，牙科，皮膚科，神經科，骨科，復健科等等)的門診就診以外，如果有太多的症狀，也可到過敏免疫風濕科諮詢，我們相信透過各科之間的合作，病人可以得到最好的照顧。
                </Col>
            </Row>
            <Row className="mt-3">
                <Accordion defaultActiveKey="-1">
                    {itemAccordion}
                </Accordion>
            </Row>
        </Container>
    )
}
export default Symptom
