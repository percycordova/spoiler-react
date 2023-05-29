import style from "component/Page_Home/SectionGrid/SectionGrid.module.scss";
import { TitleSection } from "component/Page_Home/TitleSection/TitleSection";
import { ItemSection } from "component/Page_Home/ItemSection/ItemSection";

const SectionGrid = ({data, title, type, linkTo, imageTitle, sponsor, withSection,showImage=true}) => {
    let items = null;
    let seeMoreText = "ver más";
    if(type === "comercial"){
        items = data?.spotlight?.data?.automatic[0]?.notes;
        linkTo = data?.spotlight?.data?.url;
        title = data?.spotlight?.data?.title || data?.spotlight?.data?.automatic[0]?.term?.name;
    } else if(type === "discover"){
        items = data?.spotlight?.data?.item;
        linkTo = process.env.SITE_DOMAIN_URL;
        seeMoreText = '';
    }  else {
        items = data?.articles?.data;
        linkTo = `${process.env.SITE_DOMAIN_URL}${linkTo}`;
    }
    let showItems = null;
    let showGrid = null;

    if(items && items.length > 0){
        showItems = items.map((item, key) => <ItemSection data={item} key={key} withSection={withSection} type={type} showImage={showImage} />);

        showGrid = <section>
                        <TitleSection title={title} type={type} seeMoreText={seeMoreText} linkTo={linkTo} imageTitle={imageTitle} sponsor={sponsor} />
                        <div className={`${style["grillaHome"]} ${type === 'discover' ? style["grillaDiscover"] : '' }`}>
                            <div className={style["grillaHome__items"]}>
                                {showItems}
                            </div>
                        </div>
                    </section>
    }

    return showGrid;
}

export { SectionGrid };