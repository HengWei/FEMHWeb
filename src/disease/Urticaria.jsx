﻿import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

function Gout() {
    return (
        <Container style={{ minHeight: 800, paddingTop: 20 }}>
            <Row>
                <h2>急性與慢性蕁麻疹</h2>
                <p>蕁麻疹又稱風疹塊，是一種常見的毛病，是一種以皮膚癢及肉色地圖樣突起表現的皮膚病。一般小於六週者稱為急性蕁麻疹，大於六週者稱慢性蕁麻疹。 </p>
                <h3 id='致病機轉'>致病機轉</h3>
                <p>麻疹是透過胖細胞釋放組織胺而使得血管的通透性改變，造成皮膚局部的突起與搔癢。因此治療以抗組織胺為主。部份頑固性的蕁麻疹可能需要類固醇的使用。</p>
                <h3 id='診斷'>診斷</h3>
                <p>有些急性蕁麻疹是因為日常生活中常見的過敏原引起，如魚、蝦、蟹、核果類、芒果花生等的食物都是常見的原因。過敏原偵測其實幫助不大，因為大部分食物的過敏在吃東西後30分到兩小時就會發生，所以致敏的食物通常病人自己都會知道。部份藥物如消炎止痛藥也是常造成急性蕁麻疹的原因。有時在一些病毒感染後，也有可能發生急性蕁麻疹。</p>
                <p>慢性蕁麻疹依定義是大於六週的蕁麻疹，可能因為物理性的原因引起，例如冷、熱、觸壓、震動、流汗、水、陽光都是有可能是誘發因子。如果有服用長期慢性的藥物，也要懷疑是否造成慢性蕁麻疹。但是許多人的慢性蕁麻疹與過敏原無關，而是與病人本身的過敏細胞的過度敏感有關。</p>
                <p>此外有些皮膚病變雖然看起來像蕁麻疹，但是如果持續時間超過二十四小時，或者發作後皮膚會變色，甚至是以疼痛而非皮膚癢為主要症狀，此時就應就醫求診。</p>

                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td>飲食：一般食用後30分鐘到2小時內發作</td>
                            <td>
                                <p>蝦、蟹、貝、不新鮮的魚</p>     
                                <p>含酵母菌食物</p>
                                <p>含人工添加物食品飲料</p>
                                <p>堅果類：花生 核果 巧克力</p>
                                <p>水果：芒果、草莓、番茄等</p>
                                <p>酒精類</p>
                                <p>其他：蛋、奶、香菇、竹筍</p>                             
                            </td>
                        </tr>
                        <tr>
                            <td>藥物</td>
                            <td>藥物尤其是消炎止痛藥</td>
                        </tr>
                        <tr>
                            <td>感染</td>
                            <td>細菌、黴菌、病毒</td>
                        </tr>
                        <tr>
                            <td>吸入性過敏原</td>
                            <td>花粉、塵螨、動物毛髮等</td>
                        </tr>
                        <tr>
                            <td>內分泌異常</td>
                            <td>甲狀腺異常或者月經週期變化</td>
                        </tr>
                        <tr>
                            <td>物理性因素</td>
                            <td>冷、熱、觸壓、震動、陽光、流汗、水</td>
                        </tr>
                    </tbody>
                </Table>

                <h3 id='治療'>治療</h3>
                <p>無論是急性或慢性蕁麻疹，治療以抗阻織胺為主，一般而言，傳統的抗組織胺比較有效，但是有些人會有嗜睡的副作用，新一代的抗組織胺比較不會有嗜睡的副作用，但有時鎮靜止癢的作用稍弱。基本上抗組織胺是一種很安全的用藥，長期使用副作用很小，如果是慢性蕁麻疹，用藥的目的就是症狀治療，所以可以視情況而定。</p>
                <p>部份頑固性的蕁麻疹可能需要類固醇的使用，但是慢性痲疹原則上應避免長期使用類固醇，短期的使用如果對症狀有幫助，其實是無妨的。慢性蕁麻疹是否可以停藥有時很難預測，但是此類病人如果對抗組織胺反應不錯，長期使用其實相當安全。</p>
                <p>生活上需注意是否有環境的因素(太冷、太熱或其他的因素)，是否太潮溼或者有太多灰塵以致塵螨生長；是否家裡附近有貓、狗、小鳥飼養以致造成動物毛髮的過敏。此外注意不要熬夜，少吃油炸，不要抽菸。</p>
                <p>有時慢性蕁麻疹過一段時間就會平靜下來，因此只要症狀治療即可，切忌病急亂投醫使用來歷不明的藥物，以免造成副作用。</p>
            </Row>
        </Container>
    );
}

export default Gout;