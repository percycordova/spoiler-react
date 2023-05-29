import style from "./PictureInternal.module.scss";
import resizePrototype from "util/resizePrototype";

const newResize = new resizePrototype();

const PictureInternal = ({ image="", title="", description }) => {
    if(description && description.startsWith("<p>") && description.endsWith("</p>")){
        description = description.split("<p>").filter(value=>value).join("<p>").split("</p>").filter(value=>value).join("</p>");
    }
    const showDescription = <h2 className={style["picture__description"]} dangerouslySetInnerHTML={{ __html: description }} />;
    return (
        <>
            <div className={style.content}>
                    <picture className={style.wrapper}>
                        <source srcSet={newResize.resizeWapa(image,980,576)} media="(min-width: 1000px)"/>
                        <source srcSet={newResize.resizeWapa(image,639,377)} media="(min-width: 639px)"/>
                        <img src={newResize.resizeWapa(image,425,251)} fetchpriority="high" alt={title} />
                    </picture>
                <div className={style.picture__main}>
                    <h1 className={style.picture__title}>{title}</h1>
                    {showDescription}
                </div>
            </div>
        </>
    );
};

export { PictureInternal };
