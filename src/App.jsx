/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */

import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import './App.css'
import { Route, Routes, useNavigate } from "react-router-dom"

import { FacebookShareButton, FacebookIcon, LineShareButton, LineIcon } from 'react-share';

import { Layout, Menu, Row, Col, Modal, Flex, Input, Button, QRCode } from 'antd';
import { ShareAltOutlined, MailOutlined, LinkOutlined, QrcodeOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
import Member from './Member'
import Index from './index'

import DiseaseIdx from './DiseaseIdx'
import Gout from './disease/Gout'
import RA from './disease/RA'
import AS from './disease/AS'
import Osteoarthritis from './disease/Osteoarthritis'
import SepticArthritis from './disease/Septic-arthritis'
import PsA from './disease/PsA'
import PalidromicHeumatism from './disease/Palidromic-heumatism'
import AultStill from './disease/Ault-Still'
import SLE from './disease/SLE'
import Sjogren from './disease/Sjogren'
import Scleroderma from './disease/Scleroderma'
import PolymyositisAndDermatomyositis from './disease/Polymyositis-and-dermatomyositis'
import MCTD from './disease/MCTD'
import APS from './disease/APS'
import Vasculitis from './disease/Vasculitis'
import Wegener from './disease/Wegener'
import Behcet1 from './disease/Behcet-1'
import Fibromyalgia from './disease/Fibromyalgia'
import MyofascialPain from './disease/Myofascial-pain'
import Osteoporosis from './disease/Osteoporosis'
import ErythemaNodosum from './disease/Erythema-nodosum'
import ADAPAH from './disease/ADAPAH'
import ILD from './disease/ILD'
import IC from './disease/IC'
import AH from './disease/AH'
import Polymyalgia from './disease/Polymyalgia'
import AllergicRhinitis from './disease/Allergic-rhinitis'
import Asthma from './disease/Asthma'
import DrugAllergy from './disease/Drug-allergy'
import StevenJohnsonSyndrome from './disease/Steven-Johnson-syndrome'
import Urticaria from './disease/Urticaria'



import Symptom from './Symptom'
import Lab from './Lab'
import SearchPage from './Search'


import Medication from './MedicationIdx'
import Nsaid from './Medication/Nsaid'
import Steroid from './Medication/Steroid'
import Biologicalagents from './Medication/Biologicalagents'
import Immunomodulator from './Medication/Immunomodulator'
import Moleculetargetdrug from './Medication/Moleculetargetdrug'
import Goutmedicine from './Medication/Goutmedicine'
import MOsteoporosis from './Medication/M-Osteoporosis'
import Antiallergy from './Medication/Antiallergy'
import Musclerelaxant from './Medication/Musclerelaxant'

const { Search } = Input;




function App() {

    const [cookies, setCookie] = useCookies(['allowCookie']);

    //彈跳視窗
    const [show, setShow] = useState(!cookies.allowCookie);
    

    const items = [
        {
            key: "Index",
            label: <a href="/#/">亞東醫院過敏免疫風濕科</a>
        },
        {
            key: "Member",
            label: <a href="/#/Member">成員介紹</a>
        }, {
            key: "symptom",
            label: <a href="/#/symptom">常見症狀</a>
        }, {
            key: "disease",
            label: <a href="/#/disease">常見疾病</a>
        }, {
            key: "medication",
            label: <a href="/#/medication">常見藥物</a>
        }, {
            key: "Lab",
            label: <a href="/#/Lab">常見檢驗</a>
        }
    ];

    //同意按鈕
    function onAgreeClick() {
        setShow(false);
        setCookie('allowCookie', true);
    }

    //不同意按鈕
    function onDisafreeClick() {
        setShow(false);
        setCookie('allowCookie', false);
    }

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
            pageLanguage: 'zh-TW'
            , includedLanguages: 'zh-TW,en,zh-CN,pt'
            , autoDisplay: true
            , multilanguagePage: true
        }, 'google_translate_element')
    }

    useEffect(() => {
        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    })

    const navigate = useNavigate();

    function goto(value) {
        if (value) {
            setTimeout(() => {
                navigate("Search?q=" + value);                
            }, 300);
        }            
    }


    const info = () => {
        Modal.info({
            title: 'QR Code',
            content: (
                <div>
                    <QRCode value={window.location.href} />
                </div>
            ),
            onOk() { },
        });
    };

    return (
        <>
            <Layout>
                <Header
                    style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                   
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        style={{ flex: 1, minWidth: 0 }}
                        items={items}
                        defaultSelectedKeys={['Index']}
                    />

                    <Search
                        placeholder="搜尋"
                        allowClear
                        enterButton
                        size="middle"
                        style={{
                            width:"30%"
                        }}
                        onSearch={(value) => goto(value)}
                    />
                </Header>

                <Content style={{ padding: '0 50px', marginTop: 64 }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 480 }}>
                        <Routes>
                            <Route path="/member" element={<Member />} />
                            <Route path="/disease" element={<DiseaseIdx />} />
                            <Route path="/symptom" element={<Symptom />} />
                            <Route path="/lab" element={<Lab />} />
                            <Route path="/medication" element={<Medication />} />
                            <Route path="/Nsaid" element={<Nsaid />} />
                            <Route path="/Steroid" element={<Steroid />} />
                            <Route path="/Immunomodulator" element={<Immunomodulator />} />
                            <Route path="/Biologicalagents" element={<Biologicalagents />} />
                            <Route path="/Moleculetargetdrug" element={<Moleculetargetdrug />} />
                            <Route path="/Goutmedicine" element={<Goutmedicine />} />
                            <Route path="/M-Osteoporosis" element={<MOsteoporosis />} />
                            <Route path="/Antiallergy" element={<Antiallergy />} />
                            <Route path="/Musclerelaxant" element={<Musclerelaxant />} />
                            <Route path="/Gout" element={<Gout />} />
                            <Route path="/RA" element={<RA />} />
                            <Route path="/AS" element={<AS />} />
                            <Route path="/Osteoarthritis" element={<Osteoarthritis />} />
                            <Route path="/SepticArthritis" element={<SepticArthritis />} />
                            <Route path="/PsA" element={<PsA />} />
                            <Route path="/PalidromicHeumatism" element={<PalidromicHeumatism />} />
                            <Route path="/AultStill" element={<AultStill />} />
                            <Route path="/SLE" element={<SLE />} />
                            <Route path="/Sjogren" element={<Sjogren />} />
                            <Route path="/Scleroderma" element={<Scleroderma />} />
                            <Route path="/PolymyositisAndDermatomyositis" element={<PolymyositisAndDermatomyositis />} />
                            <Route path="/MCTD" element={<MCTD />} />
                            <Route path="/APS" element={<APS />} />
                            <Route path="/Vasculitis" element={<Vasculitis />} />
                            <Route path="/Wegener" element={<Wegener />} />
                            <Route path="/Behcet1" element={<Behcet1 />} />
                            <Route path="/Fibromyalgia" element={<Fibromyalgia />} />
                            <Route path="/MyofascialPain" element={<MyofascialPain />} />
                            <Route path="/Osteoporosis" element={<Osteoporosis />} />
                            <Route path="/ErythemaNodosum" element={<ErythemaNodosum />} />
                            <Route path="/ADAPAH" element={<ADAPAH />} />
                            <Route path="/ILD" element={<ILD />} />
                            <Route path="/IC" element={<IC />} />
                            <Route path="/AH" element={<AH />} />
                            <Route path="/Polymyalgia" element={<Polymyalgia />} />
                            <Route path="/AllergicRhinitis" element={<AllergicRhinitis />} />
                            <Route path="/Asthma" element={<Asthma />} />
                            <Route path="/DrugAllergy" element={<DrugAllergy />} />
                            <Route path="/StevenJohnsonSyndrome" element={<StevenJohnsonSyndrome />} />
                            <Route path="/Urticaria" element={<Urticaria />} />
                            <Route path="/Search" element={<SearchPage />} />
                            <Route path="/" element={<Index />} />
                        </Routes>
                    </div>
                </Content>

                <Footer style={{ textAlign: 'center' }}>
                    <Row justify="center">
                        <Col xs={24} md={7}>
                            <Flex gap="small" vertical align="center">
                                <Flex gap="small" horizontal align="center">
                                    <ShareAltOutlined style={{ fontSize: '25px' }} />
                                    <h2>資訊分享</h2>
                                </Flex>
                                <Flex gap="middle" horizontal align="center">
                                    <FacebookShareButton
                                        url={window.location.href}
                                    ><FacebookIcon size={32} round />
                                    </FacebookShareButton>
                                    <LineShareButton
                                        url={window.location.href}
                                    >
                                        <LineIcon size={32} round />
                                    </LineShareButton>
                                    <Button onClick={info} icon={<QrcodeOutlined style={{ fontSize: '25px' }} />}></Button>
                                </Flex>
                                <div id="google_translate_element" />
                            </Flex>
                        </Col>
                        <Col xs={24} md={7}>
                            <Flex gap="small" vertical align="center">
                                <Flex gap="small" horizontal align="center">
                                    <MailOutlined style={{ fontSize: '22px' }} />
                                    <h2>聯絡資訊</h2>
                                </Flex>
                                <Flex gap="middle" horizontal align="center">
                                    <p>swatduck@gmail.com</p>
                                </Flex>
                            </Flex>
                        </Col>
                        <Col xs={24} md={7}>
                            <Flex gap="small" vertical align="center">
                                <Flex gap="small" horizontal align="center">
                                    <LinkOutlined style={{ fontSize: '22px' }} />
                                    <h2>外部連結</h2>
                                </Flex>
                                <Flex gap="middle" vertical align="center">
                                    <a href="https://www.facebook.com/AIR.assn">病友花絮</a>
                                    <a href="https://www.femh.org.tw/consult/consult.aspx">院方Q&A</a>
                                    <a href="https://femhsdm.wordpress.com/">醫病共同決策</a>
                                </Flex>
                            </Flex>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col>
                            <p>©{new Date().getFullYear()} 亞東醫院過敏免疫風濕科</p>
                        </Col>
                    </Row>
                </Footer>

            </Layout >

            <Modal title="隱私協議"
                open={show}
                onOk={onAgreeClick}
                onCancel={onDisafreeClick}
                okText="同意"
                cancelText="不同意">
                <p>本網站上使用 Cookie 與類似技術收集使用者與使用過程相關資訊用於改進網站內容，不會收集可辨識特定使用者之資料，如不同意請勿進入此網站。</p>
            </Modal>
        </>
    )
}
export default App
