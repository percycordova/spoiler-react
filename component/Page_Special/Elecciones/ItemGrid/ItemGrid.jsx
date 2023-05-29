import style from "component/Page_Special/Elecciones/ItemGrid/ItemGrid.module.scss"
import resizePrototype from 'util/resizePrototype';

const newResize = new resizePrototype();

const ItemGrid = ({ data, index }) => {
    let {image, title, author, slug } = data;

    return (
        <a href={slug} className={style["secondarySpotlight__item"]} key={index}>
            <figure className="">
                <img 
                    src={newResize.resizeWapa(image, 235,135)}
                    srcSet={`${newResize.resizeWapa(image, 342,192)} 480w,${newResize.resizeWapa(image, 342,192)} 807w,${newResize.resizeWapa(image, 386, 344)} 1102w,${newResize.resizeWapa(image, 612, 344)} 1250w`}
                    sizes="(max-width: 480px) 342px, (max-width: 807px) 633px,(max-width: 1102px) 1100px, 1250px"
                    decoding="async"
                    alt={title} 
                    title={title}
                    className={`${style["secondarySpotlight__image"]}`}
                    height="135"
                    width="235"
                />
            </figure>
            <div className={style["secondarySpotlight__content"]}>
                <h2 className={style["secondarySpotlight__title"]}>{title}</h2>
                <p className={style["secondarySpotlight__author"]}>Por: {author || 'Política LR'}</p>
            </div>
        </a>
    )
}

export { ItemGrid };