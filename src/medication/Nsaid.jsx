import { Image, Col, Row, Card } from 'antd';
const { Meta } = Card;

import data from '../Medication.json';


function Nsaid() {
    return (
        <>
            <Row gutter={{ xs: 24, md: 8 }}>
                {
                    data.data.find(x => x.id === 1).child.map((item, i) =>
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

export default Nsaid;