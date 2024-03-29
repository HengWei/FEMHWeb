﻿
import { Image } from 'antd';

import { Button, Card, Flex, Typography, Row, Col } from 'antd';

const cardStyle = {

};
const imgStyle = {
    display: 'block',
    width: '100%',
};

function Index() {
    return (
        <>
            <Row gutter={[8, 16]}>
                <Col span={24}>
                    <Card
                        hoverable
                        style={cardStyle}
                        styles={{
                            body: {
                                padding: 0,
                                overflow: 'hidden',
                            },
                        }}
                    >
                        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                            <Flex gap="middle" >
                                <Col xs={0} md={7}>
                                    <img
                                        alt="avatar"
                                        src="./images/pexels-pixabay-40568.jpg"
                                        style={imgStyle}
                                    />
                                </Col>
                                <Col xs={24} md={16}>
                                    <p className="idxContext">過敏免疫風濕科是屬於內科的一個次專科,服務的範圍包括各種急、慢性關節炎,如痛風、
                                        <a href="#/RA">類風濕性關節炎</a>
                                        、
                                        <a href="#/AS">僵直性脊椎炎等</a>
                                        ；此外一些全身性的免疫疾病,如
                                        <a href="#/SLE">全身性紅斑狼瘡</a>
                                        、
                                        <a href="#/Sjogren">休格蘭(或修格連氏病，乾燥症)</a>
                                        、
                                        <a href="#/Scleroderma">硬皮症</a>
                                        、
                                        <a href="#/PolymyositisAndDermatomyositis">多發性肌炎</a>
                                        、
                                        <a href="#/Vasculitis">血管炎</a>
                                        ，也屬於本科的範圍。</p>
                                </Col>
                            </Flex>
                        </Row>
                    </Card>

                </Col>
                <Col span={24}>
                    <Card
                        hoverable
                        style={cardStyle}
                        styles={{
                            body: {
                                padding: 0,
                                overflow: 'hidden',
                            },
                        }}
                    >
                        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                            <Flex gap="middle" justify="flex-end">
                                <Col xs={24} md={16}>
                                    <p className="idxContext">本科主要處理全身性的免疫疾病，因為免疫的疾病表現多樣且有許多少見疾病，因此對於民眾往往比較陌生。致病的機轉都是與免疫的失調有關,所以疾病的治療比較特殊,常常需用到
                                        <a href="#/Immunomodulator">免疫抑制劑或免疫調節劑</a>
                                        。 一般民眾以為風濕病一定要用類固醇並不正確，是否需使用類固醇,應視診斷而定。而且目前醫療進步,除了類固醇外,也有許多其他的
                                        <a href="#/Immunomodulator">免疫調節劑</a>
                                        或
                                        <a href="#/Biologicalagents">大分子生物製劑</a>
                                        與
                                        <a href="#/Moleculetargetdrug">大分子生物製劑</a>
                                        小分子標靶藥物
                                        生物製劑可以使用,醫師會依需要使用調整,當用則用,當停則停,病友用藥的過程中,應遵從醫囑並配合定期抽血追蹤，以兼顧安全與療效。</p>
                                </Col>
                                <Col xs={0} md={7}>
                                    <img
                                        alt="avatar"
                                        src="./images/pexels-pixabay-139398.jpg"
                                        style={imgStyle}
                                    />
                                </Col>
                            </Flex>
                        </Row>
                    </Card>
                </Col>


                <Col span={24}>
                    <Card
                        hoverable
                        style={cardStyle}
                        styles={{
                            body: {
                                padding: 0,
                                overflow: 'hidden',
                            },
                        }}
                    >
                        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                            <Flex gap="middle" align="cneter">
                                <Col xs={0} md={7}>
                                    <img
                                        alt="avatar"
                                        src="./images/SimonSlide2.jpg"
                                        style={imgStyle}
                                    />
                                </Col>
                                <Col xs={24} md={16}>
                                    <p className="idxContext">亞東紀念醫院過敏免疫風濕科提供過敏免疫病人住院服務臨床檢驗科也提供完整、全面的血清學檢查支援。本科成員目前有專任主治醫師兩位，兼任主治醫師兩位,專科護理師一名,為新北市的民眾服務。</p>
                                </Col>
                            </Flex>
                        </Row>
                    </Card>

                </Col>
            </Row>
        </>
    )
}
export default Index
