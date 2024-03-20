import { Col, Row, Card, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import data from './Medication.json';



function MedicationIdx() {

    let itemCard = data.data.map((item, i) =>
        <Col xs={24} md={8} lg={6} key={i}>
            <Card
                title={item.parent}
                bordered={true}>
                <p>{item.sub}</p>
                <div>
                    <Button type="primary" icon={<SearchOutlined />} href={item.url}>
                        詳細
                    </Button>
                </div>
            </Card>
        </Col>
    );

    return (
        <>
            <Row>
                <h3>常見藥物</h3>
            </Row>
            <Row>
                <p>過敏免疫風濕科有許多特殊的用藥是其他科別比較少使用的，為了提高用藥安全，特別利用這個網頁來介紹過敏免疫風濕科的用藥。 我們將藥物分為臨床上使用的類別，以方便檢視，藥品名稱書寫採取學名(商品名)之格式。</p>
                <p>圖片部分感謝 <a href="http://www.e-pharm.info/">亞東紀念醫院藥劑部</a> 提供</p>
            </Row>
            <Row gutter={[16, 16]}>
                {itemCard}
            </Row>
        </>
    );
}

export default MedicationIdx;