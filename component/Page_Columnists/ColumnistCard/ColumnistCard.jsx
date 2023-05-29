import { trimChain } from "helpers/others";
import resizePrototype from "util/resizePrototype";
import style from "component/Page_Columnists/ColumnistCard/ColumnistCard.module.scss";
import { convertirFecha } from "util/convertirFecha";

const newResize = new resizePrototype();

const ColumnistCard = ({ columnist, variant, key }) => {
    const name_columinst = columnist?.fullname ?? "";
    const lastArticleTitle = columnist?.last_article?.title ?? "";
    const description_columinst = columnist?.data?.description ?? "";
    const url_photo = columnist?.image?.url ?? "";
    const name_column = columnist?.column?.name ?? "";
    const url_column = columnist?.column.url ?? "";
    const url_columnist = columnist?.slug ?? "";
    const lastArticleDate = columnist?.last_article?.date;
    const lastArticleSlug = columnist?.last_article?.slug;
    let dateConvert = "",
    showElement = null;
    if(lastArticleDate && lastArticleDate.length > 0) {
        const lastDataFormat = lastArticleDate?.replace(" ", "T")
        dateConvert = convertirFecha(lastDataFormat, "shortSection")
    }

    if (variant && variant === 'primary') {
        return showElement =  (
            <div className={style["columnist__primary"]} key={`${columnist?._id}-${key}`}>
                <div className={style["columnist__primary--head"]}>
                    <div className={style["columnist__primary--image"]}>
                        <a href={url_columnist} className="">
                            <img
                                alt={name_columinst}
                                src={newResize.resizeWapa(url_photo, 188, 188) ? url_photo : "/static/avatar/columnist.png"}
                            />
                        </a>
                    </div>
                    <div className={style["columnist__primary--info"]}>
                        <h2 className={style["columnist__primary--title"]}>
                            <a href={url_columnist}>{name_columinst}</a>
                        </h2>
                        <h3 className={style["columnist__primary--column"]}>
                            <a href={url_column}>{name_column}</a>
                        </h3>
                        <p className={`${style["columnist__primary--description"]} ${style["columnist__description-desktop"]}`}>
                            {trimChain(description_columinst, 255)}
                            {description_columinst.length > 255 && <a href={url_columnist} className={style["columnist__description--more"]}>seguir leyendo.</a>}
                        </p>
                        <div className={style["last-article-desktop"]}>
                            <h3 className={style["columnist__name"]}>
                                <a href={url_column}>{name_column}</a>
                            </h3>
                            <div className={style["last-article-data"]}>
                                <h2 className={style["last-article"]}>
                                    <a href={lastArticleSlug} className="">
                                        {trimChain(lastArticleTitle, 150)}
                                    </a>
                                </h2>
                                <div className={style["last-article-date"]}>
                                    <span>{dateConvert}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className={`${style["columnist__description"]} ${style["columnist__description-mobile"]}`}>
                    {trimChain(description_columinst, 200)}
                    {description_columinst.length > 200 && <a className={style["columnist__description--more"]} href={url_columnist}>seguir leyendo.</a>}
                </p>
                <div className={style["last-article-mobile"]}>
                    <div className={style["last-article-data"]}>
                        <h2 className={style["last-article"]}>
                            <a href={lastArticleSlug} className="">
                                {trimChain(lastArticleTitle, 50)}
                            </a>
                        </h2>
                        <div className={style["last-article-date"]}>
                            <span>{dateConvert}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (variant && variant === 'secondary') {
        return showElement = (
            <div className={style["columnist-card"]}>
                <div className={style["columnist-card__image"]}>
                    <a href={url_columnist} className="">
                        <img
                            alt={name_columinst}
                            src={url_photo ? newResize.resizeWapa(url_photo, 124, 124) : "/static/avatar/columnist.png"}
                        />
                    </a>
                </div>
                <div className={style["columnist-card__body"]}>
                    <h2 className={style["columnist-card__title"]}>
                        <a href={lastArticleSlug}>{lastArticleTitle}</a>
                    </h2>
                    <h3 className={style["columnist-card__name_column"]}>
                        <a href={url_column}>{name_column}</a>
                    </h3>
                    <div className={style["columnist-card__last-article"]}>
                        <p className={style["columnist-card__name-columnist"]}>
                            POR: <a href={url_columnist}>{name_columinst} </a>
                        </p>
                        <div className={style["columnist-card__date"]}>
                            <span>{dateConvert}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return showElement;
};

export { ColumnistCard };
