
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import data from './Disease.json';
import { Button, Drawer, Radio, Space, Col, Row, Card } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function DiseaseIdx() {

    const [show, setShow] = useState(false);

    const [offTitle, setOffTitle] = useState();

    const [offItem, setOffItem] = useState([]);

    const handleClose = () => setShow(false);

    let itemCard = data.data.map((item, i) =>
        <Col key={i} xs={24} sm={8} md={6}>
            <Card
                title={item.parent}
                bordered={true}>
                <p>{item.sub}</p>
                <div>
                    <Button type="primary" icon={<SearchOutlined />}
                        onClick={() => {
                            setOffTitle(item.parent);
                            setOffItem(item.childs);
                            setShow(true);
                        }}>
                        詳細
                    </Button>
                </div>
            </Card>
        </Col>
    );

    return (
        <>
            <Row gutter={[16, 16]}>
                {itemCard}
            </Row>

            <Drawer
                title={offTitle}
                placement="left"
                closable={true}
                onClose={handleClose}
                open={show}
            >
                {offItem.map((item, i) =>
                    <p key={i}><a href={item.url}>
                        {item.title}
                    </a>
                    </p>)}
            </Drawer>
        </>
    );
}




export default DiseaseIdx;