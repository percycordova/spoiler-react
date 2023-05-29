import style from "component/Page_Home/SuplementGrid/SuplementGrid.module.scss";
import { TitleSection } from "component/Page_Home/TitleSection/TitleSection";
import resizePrototype from 'util/resizePrototype';

const newResize = new resizePrototype();

const SuplementGrid = ({ data }) => {
    const suplementData = data?.spotlight?.data?.item;
    if (suplementData && suplementData.length > 0) {
        const suplement = suplementData[0];
        const originImage = suplement?.image?.url || process.env.IMAGE_DEFAULT_1250x735;
        const urlImage = newResize.resizeWapa(originImage, 280,172);
        
        return <section>
                    <TitleSection title={"Suplemento"} />
                    <a href={suplement?.url} className={style["suplement__content"]}>
                        <img loading="lazy" src={urlImage} alt={suplement?.title} />
                    </a>
                </section>
    }
    return null;
}

export { SuplementGrid };