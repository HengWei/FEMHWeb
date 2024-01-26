/* eslint-disable react-hooks/rules-of-hooks */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Facebook, Mailbox, ShareFill } from 'react-bootstrap-icons';

//import GoogleTranslate from './Translat'
import { useEffect } from 'react';
import './footer.css'


function Footer() {

    const today = new Date();
    const todayYear = today.getFullYear();

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
            pageLanguage: 'pt'          
            , includedLanguages: 'en,zh-CN,pt'
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
   

    return (
        <footer className="page-footer font-small blue pt-4" style={{ backgroundColor: '#6c757d' }}>
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-4 mt-md-0 mt-4">
                        <h5 className="text-uppercase">
                            <Container>
                                <Row>
                                    <Col><ShareFill />資訊分享</Col>
                                    
                                </Row>
                                <Row>
                                    <Col><Facebook size={25} /></Col>
                                </Row>
                                <Row>
                                    {/*<div id="google_translate_element" />*/}
                                </Row>

                            </Container>

                        </h5>                     
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />                    

                    <div className="col-md-4 mb-md-0 mb-4">
                        <h5 className="text-uppercase"> 聯絡資訊</h5>
                        <ul className="list-unstyled">
                            <li><Mailbox size={20} /> swatduck@gmail.com</li>   
                        </ul>
                    </div>

                    <div className="col-md-4 mb-md-0 mb-4">
                        <h5 className="text-uppercase">外部連結</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://www.facebook.com/AIR.assn" >病友花絮</a></li>
                            <li><a href="https://www.femh.org.tw/consult/consult.aspx">院方Q&A</a></li>                           
                            <li><a href="https://femhsdm.wordpress.com/">醫病共同決策</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© {todayYear} 亞東醫院過敏免疫風濕科
            </div>
        </footer>
    );
}

export default Footer;