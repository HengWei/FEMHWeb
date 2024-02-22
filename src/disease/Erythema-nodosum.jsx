import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Gout() {
    return (
        <Container style={{ minHeight: 800, paddingTop: 20 }}>
            <Row>
                <h2>紅斑節結/結節性紅斑(erythema nodosum）</h2>
                <p>一種常見的皮膚免疫病變，以圓形疼痛的下肢皮下結節為主，病理切片可以看到脂肪層的發炎。雖然每個人皮膚的症狀看起來都相似，但是發生的原因每個人可能不同。</p>
                <p>大部分的病人發病原因不明，少數可以查出一些感染症如鏈球菌感染、結核菌感染，某些胰臟相關病變，以及一些免疫疾病如全身性紅斑狼瘡，貝塞特氏病，抗磷脂抗體症候群等等 。</p>
                <p>因此疾病的診斷常需要抽血，影像檢查以及切片。 常有人因名稱把紅斑結節與全身性紅斑狼瘡混為一談是不正確的。原發性或次發性紅斑結節的判斷，仍應參考是否有相關症狀與醫師討論判斷。</p> 
            </Row>
        </Container>
    );
}

export default Gout;