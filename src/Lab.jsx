import { Collapse } from 'antd';
import data from './lab.json';


function Lab() {
    const items = [];

    //加載症狀JSON   
    data.data.map(item => {
        items.push({
            key: item.id,
            label: item.title,
            children: <p>{item.context}</p>
        });
    }   
    );
    
    return (
        <>
            <h2>常見檢驗</h2>
            <Collapse accordion size="small" items={items} />
        </>
    )
}
export default Lab
