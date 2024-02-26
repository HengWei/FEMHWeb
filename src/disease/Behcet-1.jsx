import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Gout() {
    return (
        <Container style={{ minHeight: 800, paddingTop: 20 }}>
            <Row>
                <h2>貝雪氏病或貝塞特氏病(Behcet&apos;s disease)</h2>

                <p>健保的重大傷病之一(ICD 136.1)。本質也是一種慢性反覆性自體免疫的疾病，主要表現是口腔及陰部的反覆潰瘍(男性主要出現在陰囊，女性主要在陰唇)。因為病變出現在尷尬部位，所以病人常常不好意思就醫。然而此疾病並非性傳染病，無傳染之虞。積極的治療下大部分病人可以得到良好的控制。</p>
                <p>除潰瘍以外，可能會有皮膚的假性毛囊炎，結節性紅斑，青春痘樣病變，眼睛的虹彩炎(葡萄膜炎)、關節炎，少見的併發症也包括表皮或深層血管栓塞、腸道潰瘍及肚子疼痛等。治療上可以使用免疫調節劑與類固醇。</p>
                <p>因為沒有特定的抽血檢查可以直接用來診斷，因此主要是靠臨床表現診斷，常見的診斷標準如下。但是並非所有病人都有完整之表現可達到診斷標準。但是即使不符合診斷之標準，病人仍需就醫規則追蹤治療。</p>
                <h3 id='國際貝賽特氏病診斷標準'>國際貝賽特氏病診斷標準</h3>
                <p>International Study Group for Behcet’s Disease (ISGBD). Criteria for diagnosis of Behcet’s disease. Lancet 1990; 335: 1078-80.</p>
                <ul>
                    <li> 反覆性口腔潰瘍: 十二個月內至少復發三次。</li>
                    <p>以上加上下列任兩者</p>
                    <li>反覆性生殖器潰瘍: 潰瘍或結痂(陰囊與陰唇為主)</li>
                    <li>下呼吸道症狀</li>
                    <li>眼部病變: 前或後葡萄膜炎(uveitis)，在玻璃體或細縫燈(slit lamp)下看到細胞，眼科醫師所見的網膜血管炎(retinal vasculitis)。</li>
                    <li>陽性之pathergy test :</li>
                    <p>用20-22G針頭斜插到5mm深度，四十八小時後由醫師觀察(陽性 &gt; 2mm)。</p>
                    <li>皮膚粘膜</li>
                </ul>
                <h3 id='日本診斷標準'>日本診斷標準</h3>
                <p>Behcet’s disease research committee of Japan: Behcet’s disease: Guide to diagnosis of Behcet’s disease. Jpn J Ophthalmol 18: 291-292, 1974</p>
                <p>主要診斷要件</p>
                <ul>
                    <li>反覆性口腔潰瘍</li>
                    <li>皮膚病變</li>
                    <ul>
                        <li>結節性紅斑</li>
                        <li>皮下靜脈血管炎</li>
                        <li>毛囊炎，青春痘樣病變</li>
                        <li>皮膚高敏感(Patergy test)</li>
                    </ul>
                    <li>眼部病變</li>
                    <ul>
                        <li>虹彩炎</li>
                        <li>網膜炎</li>
                        <li>確定之虹彩炎網膜炎病史</li>
                    </ul>
                    <li>生殖器潰瘍(男性主要在陰囊，女性主要在陰唇)</li>
                </ul>
                <h3 id='次要診斷要件'>次要診斷要件</h3>
                <ul>
                    <li>關節炎，無變形與粘連</li>
                    <li>胃腸道病變，尤其是迴盲腸交接處(ileocecal)潰瘍</li>
                    <li>副睪炎</li>
                    <li>血管病變</li>
                    <li>中樞神經系統病變</li>
                </ul>
                <h3 id='診斷'>診斷</h3>
                <ul>
                    <li>完整</li>
                    <p>四個主要要件</p>
                    <li>不完整</li>
                    <ul>
                        <li>三個主要要件</li>
                        <li>兩個主要加兩個次要</li>
                        <li>典型眼部症狀加一個主要</li>
                        <li>或兩個次要加一個主要</li>
                    </ul>
                </ul>
            </Row>
        </Container>
    );
}

export default Gout;