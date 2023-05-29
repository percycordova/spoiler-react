import { TitleSection } from "component/global/TitleSection/TitleSection";
import style from "./HumorSection.module.scss";
import resizePrototype from 'util/resizePrototype';

const newResize = new resizePrototype();

const HumorSection = ({ data }) => {
    const dataHumor = [
        data?.latestCarlincatura,
        data?.latestHeduardicidios,
        data?.latestMolina,
    ]

    let showItems = null;
    
    if (dataHumor && dataHumor?.length > 0) {
        showItems = dataHumor?.map((item, key) => {
            if (item !== undefined) {
                const latestImg = item?.data?.multimedia[0]?.path || process.env.IMAGE_DEFAULT_1250x735;
                const section = item?.data?.categories[0]?.name;
                return (
                    <div key={`humor-${key}`} className={style.container}>
                        <a href={item?.slug} className={style["humorGrid__item"]}>
                            <figure className={style.img__container}>
                                <img src={newResize.resizeWapa(latestImg, 220,124)} alt={section} />
                            </figure>
                        </a>
                        <div className={style.right__container}>
                            <div className={style.name__container}>
                                <img src={`/static/humor/${section}.png`} alt="" />
                                <h3 className={style["humorGrid__content--section"]}>{section}</h3>
                            </div>
                            <a href={item?.slug} className={style["humorGrid__item"]}>
                                <button className={style.seeMore_button}>Ver más</button>
                            </a>
                        </div>
                    </div>
                );
            }
        });
        return (
            <section className={style.sectionContainer}>
                <TitleSection name="Humor" tag="h2" />
                {showItems}
            </section>
        );
    }

    return null;
}

export { HumorSection };