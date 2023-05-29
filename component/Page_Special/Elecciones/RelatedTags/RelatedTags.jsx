import { TitleSection } from "component/Page_Special/Elecciones/TitleSection/TitleSection";
import style from "component/Page_Special/Elecciones/RelatedTags/RelatedTags.module.scss";

const makeLi = (arr = [], cssName = "") => {
    if (!arr?.length) return null;

    return (
        <ul className={cssName}>
            {arr?.map((item, k) => {
                const { title, url } = item;
                return (
                    <li key={k}>
                        <a href={url || ""}>{title || ""}</a>
                    </li>
                );
            })}
        </ul>
    );
};

const RelatedTags = ({ data }) => {
    let relatedTags = null;
    if(data && data?.spotlight && data?.spotlight?.data && Object.keys(data?.spotlight?.data) && Object.keys(data?.spotlight?.data).length > 0){
        const { description, link_item, link_item_2 } = data?.spotlight?.data;
        if (description && link_item && link_item_2) {
            relatedTags = (
                <section className={style["relatedTags"]}>
                    <div className={style["relatedTags__header"]}>
                        <p dangerouslySetInnerHTML={{ __html: description || "" }} />
                    </div>
                    <div className={style["relatedTags__content"]}>
                        {makeLi(link_item, `${style.relatedTags__body} ${style.side__left}`)}
                        <div className={`${style.relatedTags__body} ${style.side__right}`}>
                            <h3 className={style["relatedTags__headline"]}>TAGS RELACIONADOS</h3>
                            {makeLi(link_item_2)}
                        </div>
                    </div>
                </section>
            );
        }

        return (
            <>
                <TitleSection title={"Temas relacionados"} />
                {relatedTags}
            </>
        );
    }
    return null;
};

export { RelatedTags };
