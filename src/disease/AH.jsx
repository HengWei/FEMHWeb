import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Gout() {
    return (
        <Container style={{ minHeight: 800, paddingTop: 20 }}>
            <Row>
                <h2>自體免疫肝炎 (autoimmune hepatitis)</h2>
                <p>相對於比較常見的B型肝炎或C型肝炎，自體免疫肝炎是指自身的免疫系統攻擊肝細胞引起發炎或壞死(而非病毒感染造成)，此種發炎現象通常是慢性症狀，但是也會有些病患會有黃疸、發燒及其他嚴重肝功能減低的症狀，有時候也會發生急性肝炎的症狀。患者的血中可測得含有自體抗體(autoantibodies)是其最大的特徵，可能獨自發生或與全身性紅斑狼瘡等免疫疾病一起發生。</p> 
            </Row>
        </Container>
    );
}

export default Gout;