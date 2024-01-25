import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Member.css'

function Member() {
    return (
        <Container>
            <Row>
                <Col style={{ paddingTop: 18 }}  xs={12} md={4}>
                    <Card>
                        <Card.Img variant="top" src="./public/images/member/DrWu.jfif" />
                        <Card.Body>
                            <Card.Title>吳建陞 醫師</Card.Title>
                            <Card.Text>
                                <h5 className="memberTitle">現職</h5>
                                亞東紀念醫院過敏免疫風濕科主任<br />
                                教育部部定助理教授<br />
                                臺大醫院內科部兼任主治醫師<br />
                                <h5 className="memberTitle">學歷</h5>
                                臺大醫學院臨床醫學研究所碩士<br />
                                臺大醫學系畢業<br />
                                <h5 className="memberTitle">經歷</h5>
                                臺大醫院過敏免疫風濕科研究員<br />
                                臺大醫院內科部學術總醫師<br />
                                臺大醫院內科部住院醫師<br />
                                <h5 className="memberTitle">專科證照</h5>
                                風濕病專科醫師證書<br />
                                免疫過敏專科醫師證書<br />
                                內科專科醫師證書<br />
                            </Card.Text>
                        </Card.Body>                        
                    </Card>
                </Col>
                <Col style={{ paddingTop: 18 }} xs={12} md={4}>
                    <Card>
                        <Card.Img variant="top" src="./public/images/member/DrYin.jfif" />
                        <Card.Body>
                            <Card.Title>殷光達 醫師</Card.Title>
                            <Card.Text>
                                <h5 className="memberTitle">現職</h5>
                                亞東紀念醫院過敏免疫風濕科兼任主治醫師<br />
                                遠東聯合門診過敏免疫風濕科主治醫師<br />
                                臺大醫院內科部兼任主治醫師<br />
                                <h5 className="memberTitle">學歷</h5>
                                臺大醫學系畢業<br />
                                <h5 className="memberTitle">經歷</h5>
                                臺大醫院過敏免疫風濕科研究員<br />
                                臺大醫院內科部住院醫師<br />
                                <h5 className="memberTitle">專科證照</h5>
                                風濕病專科醫師證書<br />
                                免疫過敏專科醫師證書<br />
                                內科專科醫師證書<br />                                
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col style={{ paddingTop: 18 }} xs={12} md={4}>
                    <Card >
                        <Card.Img variant="top" src="./public/images/member/DrChang.jpg" />
                        <Card.Body>
                            <Card.Title>張婷惠 醫師</Card.Title>
                            <Card.Text>
                                <h5 className="memberTitle">現職</h5>
                                亞東紀念醫院過敏免疫風濕科專任主治醫師<br />
                                <h5 className="memberTitle">學歷</h5>
                                臺北醫學大學醫學系畢業<br />
                                <h5 className="memberTitle">經歷</h5>
                                臺大醫院過敏免疫風濕科總醫師<br />
                                臺大醫院過敏免疫風濕科研究員<br />
                                臺大醫院內科部住院醫師<br />
                                <h5 className="memberTitle">專科證照</h5>
                                風濕病專科醫師證書<br />
                                免疫過敏專科醫師證書<br />
                                內科專科醫師證書<br />  
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col style={{ paddingTop: 18 }} xs={12} md={4}>
                    <Card >
                        <Card.Img variant="top" src="./public/images/member/DrYang.jpg" />
                        <Card.Body>
                            <Card.Title>楊春晨 醫師</Card.Title>
                            <Card.Text>
                                <h5 className="memberTitle">現職</h5>
                                亞東紀念醫院過敏免疫風濕科專任主治醫師<br />
                                <h5 className="memberTitle">學歷</h5>
                                臺北醫學大學醫學系畢業<br />
                                <h5 className="memberTitle">經歷</h5>
                                臺大醫院過敏免疫風濕科研究員<br />
                                臺大醫院內科部住院醫師<br />                          
                                <h5 className="memberTitle">專科證照</h5>
                                風濕病專科醫師證書<br />
                                免疫過敏專科醫師證書<br />
                                內科專科醫師證書<br />
                                通過國際臨床骨密學會(ISCD)國際認證<br />
                                中華民國急救加護醫學會 ACLS 證書<br />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col style={{ paddingTop: 18 }} xs={12} md={4}>
                    <Card >
                        <Card.Img variant="top" src="./public/images/member/user.png" />
                        <Card.Body>
                            <Card.Title>簡美雯 護理師</Card.Title>
                            <Card.Text>
                                <h5 className="memberTitle">現職</h5>
                                亞東紀念醫院過敏免疫科專科護理師<br />
                                <h5 className="memberTitle">學歷</h5>
                                國立臺北護理學院<br />
                                <h5 className="memberTitle">經歷</h5>
                                振興醫院內科加護病房護理師<br />
                                秀傳醫院呼吸加護病房護理師<br />
                                羅東博愛醫院內科加護病房護理師<br />
                                <h5 className="memberTitle">專科證照</h5>
                                護理師證書<br />
                                專科護理師證書<br />
                                N3護理能力進階<br />
                                急症加護護理人員能力鑑定<br />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>          
        </Container>
    );
}

export default Member;