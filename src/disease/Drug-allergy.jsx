import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Gout() {
    return (
        <Container style={{ minHeight: 800, paddingTop: 20 }}>
            <Row>
                <h2>藥物過敏及不良反應 (drug allergy/adverse drug reaction)</h2>
                <p>什麼藥都有可能過敏或者產生藥物不良反應，藥物過敏或不良反應無法用抽血檢測，所以藥物過敏最重要的診斷方法就是良好的用藥紀錄。</p>
                <p>最常見的葯物過敏症狀是皮膚的疹子，但是嚴重的藥物反應甚至包括休克、氣喘、肝功能受損、血球低下等，所以吃藥如果有任何不適，應向藥師或醫師反映。</p>
                <p>最常發生藥物過敏的藥物包括非類固醇類止痛藥，抗生素，降尿酸的allopurinol，抗癲癇的藥物等等。 有些藥物過敏反應如史蒂芬強森症候群(Steven-Johnson syndrome)，甚至會造成相當嚴重的全身性口腔黏膜、皮膚水泡及脫落。</p>
            </Row>
        </Container>
    );
}

export default Gout;