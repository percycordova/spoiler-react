import style from "component/Page_Special/Elecciones/ElectoralGuide/ElectoralGuide.module.scss"
import resizePrototype from 'util/resizePrototype';
import { TitleSection } from "component/Page_Special/Elecciones/TitleSection/TitleSection";
const newResize = new resizePrototype();

const ElectoralGuide = ({ data }) => {
    const items = data?.spotlight?.data?.item;

    if (items && items.length > 0) {
        const guideItems = items.map((item, key) => {
            const image = item?.image?.url || process.env.IMAGE_DEFAULT_1250x735;
            return (
                <a href={item.url} className={style["electoralGuide__item"]} key={key}>
                    <figure className="">
                        <img 
                            src={newResize.resizeWapa(image, 235,135)}
                            srcSet={`${newResize.resizeWapa(image, 342,192)} 480w,${newResize.resizeWapa(image, 342,192)} 807w,${newResize.resizeWapa(image, 386, 344)} 1102w,${newResize.resizeWapa(image, 612, 344)} 1250w`}
                            sizes="(max-width: 480px) 342px, (max-width: 807px) 633px,(max-width: 1102px) 1100px, 1250px"
                            decoding="async"
                            alt={item.title} 
                            title={item.title}
                            className={style["electoralGuide__image"]}
                        />
                    </figure>
                    <div className={style["electoralGuide__content"]}>
                        <h2 className={style["electoralGuide__title"]}>{item?.title}</h2>
                    </div>
                </a>
            )
        })
        return (
            <>
                <TitleSection title={"Tu guía electoral 2022"} />
                <div className={style["electoralGuide"]}>
                    {guideItems}
                </div>
            </>
        )
    }
    return null;
};

export { ElectoralGuide };
