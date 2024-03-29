﻿import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Gout() {
    return (
        <Container style={{ minHeight: 800, paddingTop: 20 }}>
            <Row>
                <h2>肌筋膜疼痛症候群</h2>

                <p>肌筋膜疼痛症候群是一種非常常見的軟組織風濕症，它的表現主要是在身體局部一些好發位置有壓痛的現象，並且伴隨輻射痛。</p>
                <h3 id='臨床症狀'>臨床症狀</h3>
                <p>在有問題的肌肉會有緊繃的肌束，摸起來像是有結節，有激痛點(trigger points)而會產生傳導痛。隨著好發的位置，有不同的表現。例如後頸部的激痛點，會被誤認為壓力性頭痛；胸部的激痛點，會被誤為心絞痛。腰部的激痛點，會與椎間盤突出造成的疼痛混淆。臀部有壓痛點，並且有輻射痛，會被誤認為坐骨神經痛。因此在診斷上需要與這些疾病作鑑別診斷。</p>
                <h3 id='病因'>病因</h3>
                <p>肌肉因為過勞，發炎、受損等再加上一些誘發因子如維他命不足，代謝問題或機械力不正，產生能量利用危機時，肌肉會產生疼痛的現象。</p>
                <h3 id='診斷'>診斷</h3>
                <p>首先必須注意是否有典型的壓痛點與輻射痛範圍? 是否有睡眠週期的問題 ?</p>
                <p>是否與先前外傷或者本身的職業有關?是否有營養缺乏的因素?或者有姿勢不良或先天異常如脊椎側彎或者長短腳等加重因子?</p> <p>此外必須排除次發性的肌筋膜疼痛，例如類風濕性關節炎、僵直性脊椎炎與全身性紅斑狼瘡相關的肌筋膜疼痛症候群。也要考慮是否有甲狀腺功能的異常。此外也要和真正的偏頭痛，椎間盤突出或者坐骨神經痛做鑑別診斷。</p>
                <h3 id='治療'>治療</h3>
                <p>肌纖維疼痛症候群是風濕病中最惱人的疾病之一，成功的治療須分以下各點：</p>
                <ol>
                    <li>避免不良姿勢，例如用脖子夾電話，不適當的枕頭，站姿、坐姿的校正等等。</li>
                    <li>物理治療如按摩、伸展或者是泡溫泉等等。</li>
                    <li>使用藥物或空針注射激痛點。</li>                    
                    <p>要把可能的潛在疾病與加重因子排除，並且配合局部治療與運動才能改善。</p>
                </ol>
            </Row>
        </Container>
    );
}

export default Gout;