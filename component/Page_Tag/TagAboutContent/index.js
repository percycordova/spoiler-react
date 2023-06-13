import style from "./TagAboutContent.module.scss";
import resizePrototype from "../../../util/resizePrototype";


const newResize = new resizePrototype();

const TagAboutContent = ({ imageTag, titleTag, descriptionTag, tagRelated, extraTag }) => {
    return (
        <>
            <div className={`${style.container}`}>
                <div className={style.tagInfo__content}>
                    {imageTag && (
                        <div className={style.info__image}>
                            <img src={newResize.resizeWapa(imageTag, 350, 350)} alt={titleTag} />
                        </div>
                    )}
                    <div className={`${style.tagInfo__info}`}>
                        <h2 className={style.info__title}>{titleTag}</h2>
                        <div className={`${style.tagInfo__description} description__tag`} dangerouslySetInnerHTML={{ __html: descriptionTag }} />
                    </div>
                </div>
            </div>


        </>
    );
};

export { TagAboutContent };
