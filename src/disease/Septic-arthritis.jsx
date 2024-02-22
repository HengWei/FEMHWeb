import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function SepticArthritis() {
    return (
        <Container style={{ minHeight: 800, paddingTop: 20 }}>
            <Row>
                <h2>感染性關節炎 (septic arthritis)</h2>
                <p>有時細菌的感染會侵犯關節，一般而言以單關節為主，且關節的疼痛相當厲害，不能被一般的止痛藥控制，此時必須使用抗生素治療 ，有時甚至需要骨科手術介入。</p>
            </Row>
        </Container>
    );
}

export default SepticArthritis;