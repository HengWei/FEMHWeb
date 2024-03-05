import medicationData from './Medication.json';
import disease from './Disease.json';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useSearchParams } from 'react-router-dom';

function Search() {

    let searchItem = [];

    //取得網址參數
    const [searchParams] = useSearchParams();

    const quertString = searchParams.get("q");

    //搜尋資料組合
    medicationData.data.map(parent =>
        parent.child.map(child =>
            searchItem.push({
                title: child.title,
                url: parent.url
            })
        )
    )

    disease.data.map(parent =>
        parent.childs.map(child => {
            searchItem.push({
                title: child.title,
                url: child.url
            });

            if (child.subTitle !== "") {
                searchItem.push({
                    title: child.subTitle,
                    url: child.url
                });
            }
        }
        )
    )

    //過濾資料
    let result = searchItem.filter(x => x.title.includes(quertString));

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