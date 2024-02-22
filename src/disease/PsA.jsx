import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function PsA() {
    return (
        <Container style={{ minHeight: 800, paddingTop: 20 }}>
            <Row>
                <h2>乾癬性關節炎 (psoriatic arthritis)</h2>
                <p>乾癬的病人有一部份會發生發炎性的關節炎，有許多亞型，有的類似類風濕性關節炎，有的類似僵直性脊椎炎以中軸骨為主，有的以第一指關節為主，乾癬性關節炎也是屬於脊椎關節炎的一種，可以出現週邊關節炎與中軸(脊椎骨)關節炎，周邊關節表現特色可用香腸指(dactilitis)，接骨點疼痛，關節炎腫脹表現(尤其是下肢)。</p>
                <p>除了乾癬與關節問題，這些病人偶爾也會伴隨指甲小點狀凹陷，虹彩炎，發炎性大腸疾病等等。</p>
                <p>此種關節炎之破壞力也很強，不是一般的消炎藥可以控制的， 可能需使用到免疫調節劑如至善錠等，應及早就醫 ，目前健保對於傳統用藥無效之乾癬性關節炎，生物製劑也有給付。</p>
            </Row>
        </Container>
    );
}

export default PsA;