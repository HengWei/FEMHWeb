import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Osteoarthritis() {
    return (
        <Container style={{ minHeight: 800, paddingTop: 20 }}>
            <Row>
                <h2>退化性關節炎(骨性關節炎，骨刺) (osteoarthritis)</h2>
                <p>一般四五十歲以上的人都會有的變化，又俗稱生骨刺，一般而言最好發的部位是膝關節，但是有時也會有遠端第一節手指關節腫大疼痛的問題，疼痛程度一般不厲害，可以在疼痛嚴重時使用止痛藥。但是隨著程度增加，髖關節與膝關節的受損可能影響行動，這時可能須考慮到骨科進行人工膝關節的置換。</p>
            </Row>
        </Container>
    );
}

export default Osteoarthritis;