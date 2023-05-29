import style from "component/Page_Columnists/style.module.scss";
import { SlotAds } from "component/global/AdsManager/SlotAds";
import { ListColumnist } from "component/Page_Columnists/ListColumnists/ListColumnist";
import { TitleSection } from "component/global/TitleSection/TitleSection";
import { Moreseen } from "component/Page_Section/Moreseen/Moreseen";


const PageColumnists = ({dataAds, columnistsTop, columnistsList, analyticsGral  }) => {
    return (
        <div className="container__columns">
            <section className="col__content">
                <TitleSection name="Columnistas" tag="h1" />
                <div className={style["columnists__list"]}>
                    <ListColumnist data={columnistsTop} variant="primary" />
                    <ListColumnist data={columnistsList} variant="secondary" /> 
                </div>
            </section>
            <section className="col__content offset-313">
                <SlotAds data={dataAds} type="Middle" />
                <Moreseen data={analyticsGral} />
                <div className="sticky-viewability">
                    <SlotAds data={dataAds} type="Middle2_Right" />
                </div>
            </section>
        </div>
    )
}

export { PageColumnists };