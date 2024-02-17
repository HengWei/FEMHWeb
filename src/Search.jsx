import queryString from "query-string";
import medicationData from './Medication.json';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Search() {
    let searchItem = [];

    //搜尋資料組合
    medicationData.data.map((parent, i) =>
        parent.child.map((child, i) =>
            searchItem.push({
                title: child.title,
                url: parent.url
            })
        )
    )

    //參數取得
    const parsed = queryString.parse(window.location.search);

    //過濾資料
    let result = searchItem.filter(x => x.title.includes(parsed.q));

    //顯示內容
    let show;

    if (result.length === 0) {
        show = <h3>查無資料</h3>
    }
    else {
        show = <ListGroup>
            {result.map((item, i) =>
                <ListGroup.Item key={i} action href={item.url} >
                    {item.title}
                </ListGroup.Item>)}
        </ListGroup>
    }

    return (
        <>
            <Container style={{ minHeight: 800, paddingTop: 20 }} >
                <Row>
                    <h1>搜尋結果</h1>
                </Row>
                <Row>
                    {show}
                </Row>
            </Container>
        </>
    );
}

export default Search;