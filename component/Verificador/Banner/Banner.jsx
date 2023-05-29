import style from "./Banner.module.scss";
import resizePrototype from "util/resizePrototype";

const newResize = new resizePrototype();

const Banner = (props) => {
    const image = props.data[0].data.multimedia[0].path;

    return (
        <div className={style.banner}>
            <figure>
                <img src={newResize.resizeWapa(image, 980, 416)} alt={props.data[0].data.multimedia[0].data.alt} />
            </figure>
            <div className={style.banner__content}>
                <h2>{props.data[0].title}</h2>
                <a href={props.data[0].slug} className={style.button__mas}>
                    Leer más
                </a>
            </div>
        </div>
    );
};

export { Banner };
