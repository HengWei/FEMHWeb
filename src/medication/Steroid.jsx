import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import data from '../Medication.json';


function Steroid() {
    return (
        <Container style={{ minHeight: 800, paddingTop: 20 }}>
            <Row>
                <h1>類固醇</h1>               
                <p>類固醇在風濕疾病的適應症：</p>
                <p>全身紅斑性狼瘡、全身性皮肌炎、關節僵直性脊椎炎、急性或亞急性滑囊炎、腱鞘炎、乾癬性關節炎、類風濕性關節炎、急性痛風性關節炎與肱上髁炎、嚴重過敏等。</p>

                <h2>類固醇使用可能出現的副作用</h2>
                <ul style={{ paddingLeft:50 }}>
                    <li>食欲可能會增加。</li>
                    <li>精神可能亢奮，可能會失眠。</li>
                    <li>皮膚可能長粉刺或青春痘。</li>
                    <li>毛髮可能變得比以前黑或濃。</li>
                    <li>血糖、血壓可能會稍微升高。</li>
                    <li>長期服用時，臉部、肩膀及四肢可能會稍微浮腫。</li>
                    <li>因類固醇藥物會減低免疫力，比較容易感染。</li>
                    <li>長期服用也有骨質疏鬆風險。</li>
                </ul>

                <h2>結論</h2>
                <p>國人有喜歡吃藥補身的習慣是眾所皆知的，然而任何的藥物皆有其潛藏的副作用，民眾對來路不明的藥粉、黑藥丸、甚至香灰、神水、、、等等，都需提高警覺，因此類補品或成藥在過去的經驗中，是最常被檢驗出含有類固醇。類固醇並不是避之為恐不及的「毒藥」，當然也不該當成是治百病的「仙丹」來亂用，尤其是短期的使用，並不容易出現副作用，但是如自行使用，則一定會產生許多問題，因此類固醇屬於醫師的處方用藥，未經過醫師診視開立處方，絕不可以自行購買任意服用。</p>
            </Row>
            <Row>
                {
                    data.data.find(x => x.id === 2).child.map((item, i) =>
                        <Col style={{ paddingTop: 18 }} xs={12} md={3} key={i}>
                            <Card style={{ minHeight: 365 } }>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.context}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>)
                }
            </Row>
        </Container>
    );
}

export default Steroid;