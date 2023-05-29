// TODO: Unificar comp Image para este caso

import resizePrototype from "util/resizePrototype";
import style from "component/Page_Home/PrintEdition/Thumbnails/Thumbnails.module.scss";

const newResize = new resizePrototype();

const Thumbnails = ({ image, title, slug }) => {
    if (!image || !title || !slug) return null;

    return (
        <a href={slug} className={`fade-in ${style["thumbnails__link"]}`} target="_blank" rel="noopener noreferrer">
            <img
                loading="lazy"
                className={style["thumbnails__image"]}
                src={newResize.resizeWapa(image, 280, 360)}
                alt={title}
                width="280"
                height="360"
            />
        </a>
    );
};

export { Thumbnails };
