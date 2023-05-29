import style from "./VerticalSectionGrid.module.scss";
import resizePrototype from "util/resizePrototype";
import { TitleSection } from "component/Page_Home/TitleSection/TitleSection";
import { ItemList } from "component/Page_Home/ItemList/ItemList";

const newResize = new resizePrototype();

const site = {
    "lrsostenible": {
        path: "https://especial.larepublica.pe"
    },
    "perulegal": {
        path: "https://perulegal.larepublica.pe"
    }
}
const VerticalSectionGrid = ({ data, type, linkTo, title, seeMoreText, setAttrLinkTo, imageTitle }) => {

    const path_site = site[title]["path"];
    
    if (data?.length > 0) {
        const items = data.map((item, key) => {
            const { title, slug, data } = item;
            const image = data?.multimedia.find(media => media.type == "image")?.path ||
        data?.multimedia.find(media => media.type == "video")?.path || process.env.IMAGE_DEFAULT_1250x735;
            return (
                <ItemList
                    key={key}
                    tag="h3"
                    variant="mediaObject"
                    title={title}
                    slug={`${path_site}${slug}`}
                    image={newResize.resizeWapa(image, 120, 60)}
                    setAttrLinkTo={setAttrLinkTo}
                    bigImg={true}
                />
            );
        });

        return (
            <section className={style.sectionContainer}>
                <TitleSection
                    linkTo={linkTo}
                    title={title}
                    imageTitle={imageTitle}
                    seeMoreText={seeMoreText}
                    type={type}
                    setAttrLinkTo={setAttrLinkTo}
                    tag="div"
                />
                <div>
                    {items}
                </div>
            </section>
        )
    }

    return null
}

export { VerticalSectionGrid };