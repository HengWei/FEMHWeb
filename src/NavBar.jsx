import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useCookies } from 'react-cookie';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Search } from 'react-bootstrap-icons';


function NavBar() {

    //Cookie
    const [cookies, setCookie] = useCookies(['allowCookie']);

    //彈跳視窗
    const [show, setShow] = useState(!cookies.allowCookie);
    //const [show, setShow] = useState(false);
    const [queryUrl, setqueryUrl] = useState();

    //同意按鈕
    function onAgreeClick() {
        setShow(false);
        setCookie('allowCookie', true);
    }

    //不同意按鈕
    function onDisafreeClick() {
        setShow(false);
    }

    //搜尋網址
    function searchPage(q) {
        const url = "#/Search?q=";
        setqueryUrl(url.concat(q));
    }


    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark" expand="lg" >
                <Container>
                    <Navbar.Brand href="/">亞東醫院過敏免疫風濕科</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#/Member">成員介紹</Nav.Link>
                            <Nav.Link href="#/symptom">常見症狀</Nav.Link>
                            <Nav.Link href="#/disease">常見疾病</Nav.Link>
                            <Nav.Link href="#/medication">常見藥物</Nav.Link>
                            <Nav.Link href="#/lab">常見檢驗</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="搜尋"
                                className="me-2"
                                aria-label="Search"
                                onChange={(e) => { searchPage(e.target.value); console.log(e.target.value); }}
                            />
                            <Button href={queryUrl} ><Search size={22}></Search></Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={show} onHide={onDisafreeClick}>
                <Modal.Header closeButton>
                    <Modal.Title>隱私協議</Modal.Title>
                </Modal.Header>
                <Modal.Body>本網站上使用 Cookie 與類似技術收集使用者與使用過程相關資訊用於改進網站內容，不會收集可辨識特定使用者之資料，如不同意請勿進入此網站。</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={onAgreeClick}>
                        同意
                    </Button>
                    <Button variant="secondary" onClick={onDisafreeClick}>
                        不同意
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NavBar;