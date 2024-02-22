import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Gout() {
    return (
        <Container style={{ minHeight: 800, paddingTop: 20 }}>
            <Row>
                <h2>肺動脈高血壓 (autoimmune disease associated pulmonary artery hypertension)</h2>
                <p>肺動脈高血壓，就是由於肺動脈壁增生收縮造成肺動脈壓力過高，因此心臟必須更努力的工作，才能將血液送出；當肺動脈壓力越來越高，心臟負荷就會越來越沉重，最後造成右心室肥大、衰竭，甚至死亡。</p>
                <p>世界衛生組織(WHO)定義當肺動脈壓力在休息狀態時高於25毫米汞柱或運動時高於30毫米汞柱時就是肺動脈高血壓。</p>
                <p>結締組織疾病中的硬皮症、紅斑性狼瘡瘡、混合性結締組織疾病等都可能伴隨肺動脈高壓的症狀。當這些免疫疾病患者如有喘或腳腫的情況，必須考慮是否有肺動脈高壓。</p>
                <p>一般而言會先利用心臟超音波篩檢，如果可能性較高才做右心導管確定診斷。治療上需使用血管擴張劑、抗凝血劑等，免疫治療也可能有部分的效果，但是如果治療效果不好，甚至可能需要肺臟或心肺移植。</p>
            </Row>
        </Container>
    );
}

export default Gout;