//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Card from 'react-bootstrap/Card';
import { Col, Row, Card, Divider } from 'antd';
import './Member.css'

const { Meta } = Card;

const member = [
    {
        name: "吳建陞",
        image: "/images/member/DrWu.jfif",
        title: "醫師",
        jobs: ["亞東紀念醫院過敏免疫風濕科主任", "教育部部定助理教授", "臺大醫院內科部兼任主治醫師"],
        edu: ["臺大醫學院臨床醫學研究所碩士", "臺大醫學系畢業"],
        exp: ["臺大醫院過敏免疫風濕科研究員", "臺大醫院內科部學術總醫師", "臺大醫院內科部住院醫師"],
        certificate: []
    },
    {
        name: "殷光達",
        image: "/images/member/DrYin.jfif",
        title: "醫師",
        jobs: ["亞東紀念醫院過敏免疫風濕科兼任主治醫師", "遠東聯合門診過敏免疫風濕科主治醫師", "臺大醫院內科部兼任主治醫師"],
        edu: ["臺大醫學系畢業"],
        exp: ["臺大醫院過敏免疫風濕科研究員", "臺大醫院內科部住院醫師"],
        certificate: ["風濕病專科醫師證書", "免疫過敏專科醫師證書", "內科專科醫師證書"]

    },
    {
        name: "張婷惠",
        image: "/images/member/DrChang.jpg",
        title: "醫師",
        jobs: ["亞東紀念醫院過敏免疫風濕科專任主治醫師"],
        edu: ["臺北醫學大學醫學系畢業"],
        exp: ["臺大醫院過敏免疫風濕科總醫師", "臺大醫院過敏免疫風濕科研究員", "臺大醫院內科部住院醫師"],
        certificate: ["風濕病專科醫師證書", "免疫過敏專科醫師證書", "內科專科醫師證書"]

    },
    {
        name: "楊春晨",
        image: "/images/member/DrYang.jpg",
        title: "醫師",
        jobs: ["亞東紀念醫院過敏免疫風濕科專任主治醫師"],
        edu: ["臺北醫學大學醫學系畢業"],
        exp: ["臺大醫院過敏免疫風濕科研究員", "臺大醫院內科部住院醫師"],
        certificate: ["風濕病專科醫師證書", "免疫過敏專科醫師證書", "內科專科醫師證書", "通過國際臨床骨密學會(ISCD)國際認證", "中華民國急救加護醫學會 ACLS 證書"]

    },
    {
        name: "簡美雯",
        image: "/images/member/user.png",
        title: "護理師",
        jobs: ["亞東紀念醫院過敏免疫科專科護理師"],
        edu: ["國立臺北護理學院"],
        exp: ["振興醫院內科加護病房護理師", "秀傳醫院呼吸加護病房護理師", "羅東博愛醫院內科加護病房護理師"],
        certificate: ["護理師證書", "專科護理師證書", "N3護理能力進階", "急症加護護理人員能力鑑定證"]

    }
]


function Member() {
    return (

        <Row gutter={[16, 16]}>
            {member.map((item, i) =>
                <Col key={i} xs={24} sm={16} md={8} lg={6}>
                    <Card
                        cover={
                            <img
                                alt={item.name}
                                src={item.image}
                            />
                        }
                        bordered={true}>
                        <Meta
                            title={item.name + " " + item.title}
                            description=""
                        />
                        <div>
                            <Divider orientation="left">現職</Divider>
                            {item.jobs.map((job, i) => <p key={i}>{job}</p>)}

                            <Divider orientation="left">學歷</Divider>
                            {item.edu.map((edu, i) => <p key={i}>{edu}</p>)}


                            <Divider orientation="left">經歷</Divider>
                            {item.exp.map((exp, i) => <p key={i}>{exp}</p>)}

                            <Divider orientation="left">專科證照</Divider>
                            {item.certificate.map((certificate, i) => <p key={i}>{certificate}</p>)}
                                                        
                        </div>
                    </Card>
                </Col>
            )}

        </Row>



    );
}

export default Member;