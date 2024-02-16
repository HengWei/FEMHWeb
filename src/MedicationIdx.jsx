import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import data from './Medication.json';

function MedicationIdx() {

    let itemCard = [];   

    data.data.map((item) => { 
        itemCard.push(
            <Col style={{ paddingTop: 15 }} xs={12} md={4}>
                <Card>
                    <Card.Body>
                        <Card.Title>{item.parent}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{item.sub}</Card.Subtitle>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary" href={item.url}>詳細</Button>
                    </Card.Body>
                </Card>
            </Col>            
        );
    });


    return (
        <>
            <Container style={{ minHeight: 800, paddingTop: 20 }} >
                <Row>
                    <h3>常見藥物</h3>                   
                </Row>
                <Row className="pt-3">
                    <p>過敏免疫風濕科有許多特殊的用藥是其他科別比較少使用的，為了提高用藥安全，特別利用這個網頁來介紹過敏免疫風濕科的用藥。 我們將藥物分為臨床上使用的類別，以方便檢視，藥品名稱書寫採取學名(商品名)之格式。</p>
                    <p>圖片部分感謝 <a href="http://www.e-pharm.info/">亞東紀念醫院藥劑部</a> 提供</p>
                </Row>
                <Row>
                    {itemCard}                
                </Row>          
            </Container>
        </>
    );
}

export default MedicationIdx;