import medicationData from './Medication.json';
import disease from './Disease.json';
import { useSearchParams } from 'react-router-dom';
import { Row, List, Col, Button, Input } from 'antd';
import { useNavigate } from "react-router-dom"
function Search() {

    let searchItem = [];

    //取得網址參數
    const [searchParams] = useSearchParams();

    let quertString = searchParams.get("q");

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

    if (quertString) {
        quertString = quertString.toLowerCase();        
    }
    //過濾資料
    let result = searchItem.filter(x => x.title.toLowerCase().includes(quertString));

    //顯示內容
    let show;

    const navigate = useNavigate();

    const { Search } = Input;
    function goto(value) {
        if (value) {
            setTimeout(() => {
                navigate("?q=" + value);
            }, 300);
        }
    }

    if (result.length === 0) {
        show = <h3>查無資料</h3>
    }
    else {
        show = <List
            style={{}}
            size="small"
            bordered
            dataSource={result}
            renderItem={(item) => <List.Item><a href={item.url}>{item.title}</a></List.Item>}
        />
    }

    return (
        <>
            <Search
                placeholder="站內搜尋"
                allowClear
                enterButton
                size="large"
                onSearch={(value) => goto(value)}
            />
            <h1>搜尋結果</h1>
            {show}
        </>
    );
}

export default Search;