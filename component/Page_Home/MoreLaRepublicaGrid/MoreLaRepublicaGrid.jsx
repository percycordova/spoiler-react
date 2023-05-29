import { TitleSection } from "component/Page_Home/TitleSection/TitleSection";
import { transform } from "component/Page_Home/MoreLaRepublicaGrid/MoreLaRepublicaGrid.helpers";
import { ItemList } from "component/Page_Home/ItemList/ItemList";
import style from "component/Page_Home/MoreLaRepublicaGrid/MoreLaRepublicaGrid.module.scss";
const MoreLaRepublicaGrid = ({ atemporal, analytics, title }) => {
    const mergeData = transform(atemporal, analytics);

    if (mergeData && Object.keys(mergeData)?.length) {
        
        const items = Object.entries(mergeData)
            .splice(0, 30)
            .map(([key, value]) => {
                return <ItemList key={key} variant="callout-clamp4" category={value?.section_primary} slug={value?.slug_note} title={value?.title_note} tag="h3"/>;
            });

        return (
            <section className={style["morelarepublica"]}>
                <TitleSection title={title} />
                {items}
            </section>
        );
    }

    return null;
};

export { MoreLaRepublicaGrid };
