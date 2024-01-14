import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import GoogleTranslate from './Translat'
import { useEffect } from 'react';


function Footer() {

    const today = new Date();
    const todayYear = today.getFullYear();

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
            pageLanguage: 'pt'
            //, layout: google.translate.TranslateElement.InlineLayout.SIMPLE
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
        <>
            <Container fluid fixed="bottom" style = {{paddingTop:50} }>
                <Row style={{ backgroundColor: '#6c757d' }}>
                    <p>© {todayYear} 亞東醫院過敏免疫風濕科</p>

                    {/*<Navbar bg="dark" data-bs-theme="dark" expand="lg" >*/}
                    {/*    <Container>*/}
                    {/*        <Navbar.Brand href="#">© {todayYear} 亞東醫院過敏免疫風濕科</Navbar.Brand>*/}
                    {/*    </Container>*/}
                    {/*    */}{/*<div id="google_translate_element" />*/}
                    {/*</Navbar>*/}
                </Row>
            </Container>
        </>
        
            
        
    );
}

export default Footer;