import { Image, Col, Row, Card } from 'antd';
import data from '../Medication.json';
const { Meta } = Card;


function Biologicalagents() {
    return (
        <>
            <Row>
                <h1>肌肉鬆弛劑及其他肌肉酸痛相關用藥</h1>
            </Row>
            <Row gutter={{ xs: 24, md: 8 }}>
                {
                    data.data.find(x => x.id === 9).child.map((item, i) =>
                        <Col key={i} xs={24} ms={8} md={6}>
                            <Card
                                hoverable
                                cover={<Image src={item.image}></Image>}
                            >
                                <Meta title={item.title} description={item.context} />
                            </Card>
                        </Col>
                    )
                }
            </Row>            
        </>        
    );
}

export default Biologicalagents;