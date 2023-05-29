import { TitleSection } from "component/Page_Home/TitleSection/TitleSection";
import { convertirFecha } from "util/convertirFecha";
import style from "component/Page_Home/HumorGrid/HumorGrid.module.scss";

const HumorGrid = ({ data }) => {
    const dataHumor = [
        data?.latestCarlincatura,
        data?.latestHeduardicidios,
        data?.latestMolina,
    ];
    let showItems = null;
    if (dataHumor && dataHumor?.length > 0) {
        showItems = dataHumor?.map((item, key) => {
            if (item !== undefined) {
                const section = item?.data?.categories[0]?.name;
                const date = convertirFecha(item?.update_date?.split(" ").join("T"), "shortHumor");
                return (
                    <div className={`${style["humorGrid__item"]} extend-link--outside`} key={`humor-${key}`}>
                            <img loading="lazy" src={`/static/humor/${section}.webp`} alt="" className={style["humorGrid__image"]}/>
                            <a href={item?.slug} className={`${style["humorGrid__content"]} extend-link`}>
                                <h3 className={style["humorGrid__content--title"]}>{date}</h3>
                                <h3 className={style["humorGrid__content--section"]}>{section}</h3>
                            </a>
                    </div>
                );
            }
        });
        return (
            <section>
                <TitleSection title={"Humor"}/>
                <div className={style["humorGrid"]}>
                    {showItems}
                </div>
            </section>
        );
    }
    return null;
};

export { HumorGrid };
