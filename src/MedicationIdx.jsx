import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import data from './Medication.json';

let i = 0;



function MedicationIdx() {

    let itemCard = [];

    

    

    data.data.map((item) => {        

        itemCard.push(
            <Col >
                <Card xs={12} md={4} lg={ 4 }>
                    <Card.Body>
                        <Card.Title>{item.parent}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">我是描述</Card.Subtitle>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary" >詳細</Button>
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
                    <Col style={{ paddingTop: 18 }} xs={12} md={4}>
                        <Card >
                            <Card.Body>
                                <Card.Title>非類固醇止痛藥(NSAID)</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">我是描述</Card.Subtitle>
                                <Card.Text>
                                </Card.Text>
                                <Button variant="primary" >詳細</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ paddingTop: 18 }} xs={12} md={4}>
                        <Card >
                            <Card.Body>
                                <Card.Title>類固醇</Card.Title>
                                <Card.Text>
                                    <Button variant="primary">詳細</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ paddingTop: 18 }} xs={12} md={4}>
                        <Card >

                            <Card.Body>
                                <Card.Title>免疫調節劑</Card.Title>
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
                                <Card.Title>生物製劑</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">我是描述</Card.Subtitle>
                                <Card.Text>
                                </Card.Text>
                                <Button variant="primary" >詳細</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ paddingTop: 18 }} xs={12} md={4}>
                        <Card >
                            <Card.Body>
                                <Card.Title>小分子標靶藥物</Card.Title>
                                <Card.Text>
                                    <Button variant="primary">詳細</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ paddingTop: 18 }} xs={12} md={4}>
                        <Card >
                            <Card.Body>
                                <Card.Title>痛風用藥</Card.Title>
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
                                <Card.Title>骨鬆症用藥</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">我是描述</Card.Subtitle>
                                <Card.Text>
                                </Card.Text>
                                <Button variant="primary" >詳細</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ paddingTop: 18 }} xs={12} md={4}>
                        <Card >
                            <Card.Body>
                                <Card.Title>抗過敏/抗組織胺</Card.Title>
                                <Card.Text>
                                    <Button variant="primary">詳細</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ paddingTop: 18 }} xs={12} md={4}>
                        <Card >
                            <Card.Body>
                                <Card.Title>肌肉鬆弛劑及其他肌肉酸痛相關用藥</Card.Title>
                                <Card.Text>
                                    <Button variant="primary">詳細</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>          
            </Container>
        </>
    );
}


export default MedicationIdx;