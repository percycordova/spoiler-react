import { useState } from "react";
import { TitleSection } from "component/Page_Home/TitleSection/TitleSection";
import { TabContent } from "component/Page_Home/PrintEdition/TabContent/TabContent";
import { TabNavItem } from "component/Page_Home/PrintEdition/TabNavItem/TabNavItem";
import { Thumbnails } from "component/Page_Home/PrintEdition/Thumbnails/Thumbnails";
import { transform } from "component/Page_Home/PrintEdition/PrintEdition.helpers";
import style from "component/Page_Home/PrintEdition/PrintEdition.module.scss";

const URL_IMPRESO = "https://impreso.larepublica.pe/larepublica";
const PrintEdition = ({ printedsByRegion, printedDomingo, title, linkTo, seeMoreText, setAttrLinkTo }) => {
    const [activeTab, setActiveTab] = useState("tab1");
    const mergeData = transform(printedsByRegion, printedDomingo);

    let printed_lima = null,
        printed_norte = null,
        printed_sur = null,
        printed_domingo = null;

    if (mergeData?.length > 0) {
        mergeData.map((print, key) => {
            const { edition, image, title, slug } = print;
            const slug_replace = slug ? slug.replace("impresa/","/impresa-archive/") : "";

            if (edition && edition === "Lima" && image && title && slug_replace) {
                printed_lima = <Thumbnails image={image} title={title} slug={`${URL_IMPRESO}${slug_replace}`} />;
            }
            if (edition && edition === "Norte" && image && title && slug_replace) {
                printed_norte = <Thumbnails image={image} title={title} slug={`${URL_IMPRESO}${slug_replace}`} />;
            }
            if (edition && edition === "Sur" && image && title && slug_replace) {
                printed_sur = <Thumbnails image={image} title={title} slug={`${URL_IMPRESO}${slug_replace}`} />;
            }
            if (edition && edition === "Domingo" && image && title && slug) {
                printed_domingo = <Thumbnails image={image} title={title} slug={`${URL_IMPRESO}${slug_replace}`} />;
            }
        });

        return (
            <section>
                <TitleSection title={title} linkTo={linkTo} seeMoreText={seeMoreText} setAttrLinkTo={setAttrLinkTo}/>
                <div className={style["print-edition"]}>
                    <div role="tablist" className={`${style["tab__list"]} d-flex justify-between}`}>
                        {printed_lima && <TabNavItem title="Lima" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />}
                        {printed_norte && <TabNavItem title="Norte" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />}
                        {printed_sur && <TabNavItem title="Sur" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} />}
                        {printed_domingo && <TabNavItem title="Domingo" id="tab4" activeTab={activeTab} setActiveTab={setActiveTab} />}
                    </div>
                    <div className={style["tab__panel"]}>
                        <TabContent id="tab1" activeTab={activeTab}>
                            {printed_lima}
                        </TabContent>
                        <TabContent id="tab2" activeTab={activeTab}>
                            {printed_norte}
                        </TabContent>
                        <TabContent id="tab3" activeTab={activeTab}>
                            {printed_sur}
                        </TabContent>
                        <TabContent id="tab4" activeTab={activeTab}>
                            {printed_domingo}
                        </TabContent>
                    </div>
                </div>
            </section>
        );
    }

    return null;
};

export { PrintEdition };
