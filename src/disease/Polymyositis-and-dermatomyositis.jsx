import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Gout() {
    return (
        <Container style={{ minHeight: 800, paddingTop: 20 }}>
            <Row>
                <h2>多發性肌炎與皮肌炎(polymyositis and dermatomyositis)</h2>
                <p>以肌肉無力為主的疾病，也屬於健保的重大傷病，抽血可發現肌肉的成分(肌肉酵素，CPK)在血中出現，有時會伴隨間質性肺炎的發生。</p>
                <p>皮肌炎與多發性肌炎的主要差別在皮肌炎有一些特殊的 皮疹分布在眼皮、指節等處。兩種病治療上都需要到較長期的高量類固醇。</p>
                <p>此外有少數惡性腫瘤會以皮肌炎或多發性肌炎為一開始的表現，所以如果這類患者有體重減輕或一些其他疑似癌症的局部症狀，應告知醫師做進一步的追查。</p>
                
            </Row>
        </Container>
    );
}

export default Gout;