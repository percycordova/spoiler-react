import { SlotAds } from "component/global/AdsManager/SlotAds";
import { MainContentRight } from "component/Page_Columnists/MainContentRight/MainContentRight";
import { ListArticlesByColumnist } from "component/Page_Columnists/ListArticlesByColumnist/ListArticlesByColumnist";
import style from "component/Page_Columnists/ColumnistInterna/ColumnistInterna.module.scss";

const ColumnistInterna = ({ author, articlesData, adsPage, data }) => {
    const columnist_name = author?.fullname ?? "";
    const url_photo_columnist = author?.metadata?.find(metadataItem=>metadataItem.key=="url_photo")?.value ?? "";
    const columnist_description = author?.data?.description ?? "";
    const url_column = author?.data?.columnist?.column_url ?? "";
    const name_column = author?.data?.columnist?.column_name ?? "";
    const url_author = author?.slug ?? "";
    return (
        <div className={`container__columns ${style["wrapper__columnist"]}`}>
            
            <div className="col__content">
                <SlotAds type="Strip" data={adsPage?.ads?.data} />
                <MainContentRight adsPage={adsPage} data={data} />
            </div>
            <div className="col__content offset-313">
                <div className={style["info-columnist"]}>
                    <div className={style["img-columnist"]}>
                        <img src={url_photo_columnist ? url_photo_columnist : "/static/avatar/author.png"} alt="" />
                    </div>
                    <a className={style["info-columnist__title"]} href={url_author}> {columnist_name} </a>

                    <h4 className={style["info-columnist__column"]}>
                        <a href={url_column}> {name_column}</a>
                    </h4>
                    <p className={style["info-columnist__description"]}>
                    {columnist_description}
                    </p>
                </div>
                <div className={style["list-articles-columnist__desktop"]}>
                    <hr />
                    <h2 className={style["info-columnist__title"]}>Más columnas</h2>
                    <ListArticlesByColumnist data={articlesData} />
                    <a className={`${style["authors__btn-show-more"]} btn-text-base`} href={url_column}>
                        VER MÁS COLUMNAS
                    </a>
                </div>
            </div>
        </div>
    );
};

export { ColumnistInterna };
