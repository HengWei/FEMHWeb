﻿import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import './App.css'




function App() {
    return (
        <>  
            <Image src="/images/559.jpg"  fluid />
            <Container className="pt-4" style={{ minHeight: 300 }}>
                <Row>
                    
                </Row>
                <Row>
                    <p>過敏免疫風濕科是屬於內科的一個次專科,服務的範圍包括各種急、慢性關節炎,如痛風、類風濕性關節炎、僵直性脊椎炎等；此外一些全身性的免疫疾病,如全身性紅斑狼瘡、休格蘭(或修格連氏病，乾燥症)、硬皮症、多發性肌炎、血管炎，也屬於本科的範圍。</p>
                    <p>本科主要處理全身性的免疫疾病，因為免疫的疾病表現多樣且有許多少見疾病，因此對於民眾往往比較陌生。致病的機轉都是與免疫的失調有關,所以疾病的治療比較特殊,常常需用到免疫抑制劑或免疫調節劑。 一般民眾以為風濕病一定要用類固醇並不正確，是否需使用類固醇,應視診斷而定。而且目前醫療進步,除了類固醇外,也有許多其他的免疫調節劑或大分子生物製劑與小分子標靶藥物生物製劑可以使用,醫師會依需要使用調整,當用則用,當停則停,病友用藥的過程中,應遵從醫囑並配合定期抽血追蹤，以兼顧安全與療效。</p>
                    <p>亞東紀念醫院過敏免疫風濕科提供過敏免疫病人住院服務臨床檢驗科也提供完整、全面的血清學檢查支援。本科成員目前有專任主治醫師兩位，兼任主治醫師兩位,專科護理師一名,為新北市的民眾服務。</p>
                </Row>
            </Container>      
        </>
    )
}
export default App
