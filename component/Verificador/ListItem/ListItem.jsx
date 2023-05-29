import style from "./ListItem.module.scss";
import resizePrototype from "util/resizePrototype";

const newResize = new resizePrototype();

const ItemGrillaArticles = (props) => {
    const { item } = props;
    const image =
        item?.data?.multimedia?.find((media) => media.type == "image")?.path ||
        process.env.IMAGE_DEFAULT_1250x735;

    return (
        <article className={`${style["content-article"]} extend-link--outside`}>
            <figure className={`${style["img-resize-container"]}`}>
                <img src={newResize.resizeWapa(image, 308, 213)} title={item?.title} alt={item?.title} />
            </figure>
            <a href={item?.slug} className={`${style["content-article-link"]} extend-link`}>
                <h3>{item?.title}</h3>
            </a>
            <button className={style["border-button"]}>LEER MÁS</button>
        </article>
    );
};

export { ItemGrillaArticles };
