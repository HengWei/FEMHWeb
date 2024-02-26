import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../disease/disease.css'
import { HashLink as Link } from 'react-router-hash-link';

function Gout() {
    return (
        <Container style={{ minHeight: 800, paddingTop: 20 }}>
            <Row>
                <h2>全身性血管炎</h2>
                <p>血管炎是一大類許多疾病的統稱，主要是因為免疫系統攻擊血管組織造成。並非所有血管炎都會侵犯全身，有些血管炎只侵犯皮膚或個別器官。免疫風濕科主要治療的範圍是全身性的血管炎。</p>
                <p>全身性血管炎可約略分為大血管、中小血管炎。並非血管炎都會有皮膚的表現，例如侵犯大血管的血管炎通常不會有表皮的紅疹。此外泛稱的紫斑症，包括了血小板低下的紫斑症和皮膚紅疹的血管炎紫斑，所以閱讀醫療相關文獻時應避免混淆。而嚴重的全身性血管炎通常的表現有發燒、倦怠、表皮的紅疹、咳血、血尿、蛋白尿、關節痛或神經痛等等 (神經痛與一般關節酸痛不同，主要以燒、麻、刺痛、感覺異常表現)。 因為不同的血管炎症狀不同，甚至有時同一疾病的表現多變且少見，不一定每個症狀都會發生，所以診斷困難。病程反覆，治療也困難，這類的疾病對於醫療機構的診療水準也是一大挑戰。</p>
                <h3>個別疾病的說明請參看下方</h3>
                <h3>侵犯大血管的血管炎</h3>
                <ul className="disease">
                    <li>                        
                        <Link to='#Temporal'>颞動脈炎/巨細胞血管炎(Temporal arteritis/Giant cell arteritis)</Link>
                    </li>
                    <li>
                        <Link to='#Takayasu'>高安氏血管炎(Takayasu arteritis)</Link>
                    </li>
                </ul>

                <h3>侵犯中小血管的血管炎</h3>
                <p>ANCA相關血管炎</p>
                <ul className="disease">
                    <li>
                        <a href="#/Wegener">肉芽腫性多血管炎/韋格納氏肉芽腫 (Granulomatosis with polyangiitis, Wegner&apos;s granulomatosis)</a>
                    </li>

                    <li>
                        <Link to='#polyangiitis'>顯微性多血管炎 (Microscopic polyangiitis)</Link>
                    </li>

                    <li>
                        <Link to='#syndrome'>嗜伊紅性肉芽腫性多血管炎/查格-施特勞斯症候群(Eosinophilic granulomatosis with polyangiitis/Churg-Strauss syndrome)</Link>
                    </li>
                </ul>
                <p>其它血管炎或相關血管病變</p>
                <ul className="disease">
                    <li>
                        <Link to='#Polyarteritis'>節結性多動脈硬化(Polyarteritis nodosum)</Link>
                    </li>
                    <li>
                        <a href="#/Behcet">貝賽特氏病或貝雪氏病(Behcet&apos;s disease)</a>
                    </li>
                    <li>

                        <Link to='#Cryoglobulinemia'>冷凝蛋白血症(Cryoglobulinemia)</Link>
                    </li>
                    <li>
                        <Link to='#Purpura'>過敏性紫斑症(Henoch-Scholein purpura)</Link>
                    </li>
                    <li>
                        <Link to='#Burger'>Burger&apos;s disease(thromboangiitis obliterans)</Link>
                    </li>
                </ul>
                <h3 id='Temporal'>颞動脈炎/巨細胞血管炎(Temporal arteritis/Giant cell arteritis)</h3>
                <p>好發於老年人(大於五十歲)的大血管炎，一般症狀可能有發燒、倦怠、頭痛及視力模糊，嚴重時颞動脈(最明顯的部份是經過太陽穴的血管)會有鼓脹壓痛的情況。需用高劑量類固醇治療。聶動脈炎常常與

                    <a href="#/polymyalgia">風濕性多發肌痛合併發生。</a>
                </p>
                <h3 id='Takayasu'>高安氏血管炎(Takayasu arteritis)</h3>
                <p>好發於育齡(二十到四十歲)婦女的血管炎，又稱為無脈搏病，也是一種自體免疫疾病，會造成主動脈及其第一分支發炎且狹窄。通常表現為發燒與倦怠，有時會有大血管發炎造成脖子痛或單側手痠，理學檢查可發現四肢血壓不對稱或兩側脈搏強弱不一。治療須用到高劑量類固醇，有時血管狹窄部位須用手術整修以增加血流。</p>
                <h3>ANCA相關血管炎</h3>
                <ol className="disease">
                    <li id="Wegener">肉芽腫性多血管炎/韋格納氏肉芽腫 (Granulomatosis with polyangiitis, Wegner&apos;s granulomatosis)<a href="#/wegener">更多</a></li>  <p>一種中小血管炎，屬於健保的重大傷病，主要以發燒、慢性鼻竇炎、咳血、血尿、周邊神經麻痛等表現。 實驗室的檢驗通常有抗嗜中性球細胞質抗體(c-ANCA or PR3-ANCA)陽性。治療通常需要類固醇以及其他免疫抑制劑</p>
                    <li id="polyangiitis">顯微性多血管炎(Microscopic polyangiitis)</li> <p>一種中小血管炎，主要以發燒、咳血、血尿、周邊神經麻痛等表現,與韋格納氏肉芽腫的主要差別是少見鼻竇炎。 實驗室的檢驗通常有抗嗜中性球細胞質抗體(p-ANCA or MPO-ANCA)陽性。治療通常需要類固醇以及其他免疫抑制劑。</p>
                    <li id="syndrome">過敏性肉芽腫(Churg-Strauss syndrome)</li>  <p>一種中小血管炎，主要以嗜伊紅性白血球上升，氣喘，鼻竇炎，週邊神經麻痛表現。治療通常需要類固醇以及其他免疫抑制劑。</p>
                </ol>
                <h3>其他中小血管炎或相關血管疾病</h3>
                <ol>
                    <li id="Polyarteritis">節結性多動脈硬化(Polyarteritis nodosum)</li>
                    <p>一種非常罕見的中小血管炎，主要以發燒、體重下降、腹痛、血便、高血壓或腎功能異常、週邊神經病變等表現 ，病人中約有15%與B型肝炎有關。治療通常需要類固醇以及其他免疫抑制劑。</p>
                    <li id="Behcet">貝雪氏病或貝塞特氏病(Behcet&apos;s disease)
                        <a href="#/behcet1">更多</a>
                    </li>
                    <p>健保的重大傷病之一。本質也是一種慢性反覆性的自體免疫的疾病，並不是傳染病，主要表現是口腔及陰部的潰瘍(男性在陰囊，女性在陰唇)。其它的併發症也包括 皮膚病變、虹彩炎、關節炎、血管病變、腸道潰瘍及肚子疼痛等。治療上可以使用免疫調節劑與類固醇。</p>

                    <li id="Cryoglobulinemia">冷凝蛋白血症(Cryoglobulinemia)</li>
                    <p>通常是C型肝炎的併發症，可能有眼乾、口乾，下肢皮疹，關節酸痛，蛋白尿等 表現，因為常常有類風濕因子的假陽性發生，所以可能被誤認為類風濕性關節炎，所以診斷類風濕性關節炎前，應詢問病人是否有肝炎家族史，以免將冷凝蛋白血症誤認為類風濕性關節炎。</p> <p>治療上可以用一些免疫調節劑，包括干擾素，此外類固醇的使用需小心，以免造成肝炎發作。</p>
                    <li id="Purpura">過敏性紫斑(Henoch-Schonlein Purpura)</li>
                    <p>一種好發在3-15歲兒童的血管炎，偶而也見於成人。主要的症狀為腹痛、關節痛與下肢的紫斑。通查在上呼吸道感染後一到兩週後發生。少數病人會有血尿與腎臟併發症。治療上可能需要到類固醇，一般為一過性的血管炎，但是少數人在減藥後有復發的可能。</p>
                    <li id="Burger">Burger&apos;s disease (thromboangiitis obliterans)</li>
                    <p>一種好發在吸煙男性的血管堵塞病變，一般發病在五十歲前症狀為末梢循環堵塞，手指、腳趾末端蒼白麻木、缺血性壞死，甚至可能要截肢，唯一的改善的方法是戒菸，類固醇或其他的抗發炎藥物是無效的。</p>
                </ol>
            </Row>
        </Container>
    );
}

export default Gout;