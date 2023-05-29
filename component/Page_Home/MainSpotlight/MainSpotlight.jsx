import style from "component/Page_Home/MainSpotlight/MainSpotlight.module.scss";
import resizePrototype from "util/resizePrototype";
import { Editorial } from "component/Page_Home/Editorial/Editorial";
import { InliveBadge } from "component/global/InliveBadge/InliveBadge";
import { SlotAds } from "component/global/AdsManager/SlotAds";

const newResize = new resizePrototype();

const MainSpotlight = ({ editorial, dataByType, dataAds }) => {
    const itemsByType = dataByType?.spotlight?.data?.cover_item;
    const typeCover = dataByType?.spotlight?.data?.cover_types;
    const currentTypeCover = typeCover?.toString() || "type_1";

    let primaryItem;
    let primaryOtherCover;
    let primaryImage;
    let secondaryItems;
    let lateralItems;
    let secondaryData = [];
    let lateralData = [];
    let itemActive = false;
    let isNotFirstType = false;
    let showMainCover = null;
    let enVivo = null;

    if (itemsByType && itemsByType.length > 0) {
        itemsByType.map((ele, key) => {
            if (key === 0) {
                itemActive = ele?.inlive;
                const image = ele?.image?.url || process.env.IMAGE_DEFAULT_1250x735;
                enVivo = <InliveBadge label="EN VIVO" variant="large" />;

                if (currentTypeCover === "type_1") {
                    primaryImage = (
                        <figure className={`${style["primarySpotlight__figure"]} ${style["primary-image__outside--type-1"]}`} key={key}>
                            <img
                                src={newResize.resizeWapa(image, 480, 283)}
                                srcSet={`${newResize.resizeWapa(image, 342, 202)} 480w,${newResize.resizeWapa(
                                    image,
                                    342,
                                    202
                                )} 807w,${newResize.resizeWapa(image, 386, 228)} 1102w,${newResize.resizeWapa(image, 612, 362)} 1250w`}
                                sizes="(max-width: 480px) 342px, (max-width: 807px) 633px,(max-width: 1102px) 1100px, 1250px"
                                decoding="async"
                                alt={ele.title}
                                title={ele.title}
                                className={`${style["primarySpotlight__image"]} ${style["primary-image--type-1"]}`}
                            />
                        </figure>
                    );
                } else if (currentTypeCover === "type_2" || currentTypeCover === "type_3") {
                    isNotFirstType = true;

                    primaryImage = (
                        <figure className={`${style["primarySpotlight__type_3"]} ${style["primary-image__outside--type-3"]}`} key={key}>
                            <img
                                src={newResize.resizeWapa(image, 670, 425)}
                                srcSet={`${newResize.resizeWapa(image, 342, 192)} 480w,${newResize.resizeWapa(
                                    image,
                                    342,
                                    192
                                )} 807w,${newResize.resizeWapa(image, 670, 425)} 1102w,${newResize.resizeWapa(image, 612, 344)} 1250w`}
                                sizes="(max-width: 480px) 342px, (max-width: 807px) 633px,(max-width: 1102px) 1100px, 1250px"
                                decoding="async"
                                alt={ele.title}
                                title={ele.title}
                                className={`${style.type_3_image} ${style["primarySpotlight__image"]} ${style["primary-image--type-3"]}`}
                            />
                        </figure>
                    );
                } else if (currentTypeCover === "type_4" ){

                    primaryImage = (
                        <figure className={`${style["primarySpotlight__figure"]} ${style["primary-image__outside--type-1"]}`} key={key}>
                            <img
                                src={newResize.resizeWapa(image, 480, 283)}
                                srcSet={`${newResize.resizeWapa(image, 342, 202)} 480w,${newResize.resizeWapa(image,342,202)} 807w,${newResize.resizeWapa(image, 386, 228)} 1102w,${newResize.resizeWapa(image, 612, 362)} 1250w`}
                                sizes="(max-width: 480px) 342px, (max-width: 807px) 633px,(max-width: 1102px) 1100px, 1250px"
                                decoding="async"
                                alt={ele.title}
                                title={ele.title}
                                className={`${style["primarySpotlight__image"]} ${style["primary-image--type-1"]}`}
                            />
                        </figure>
                    );
                } else if (currentTypeCover === "type_5" ){

                    primaryImage = (
                        <figure className={`${style["primarySpotlight__type_3"]} ${style["primary-image__outside--type-5"]}`} key={key}>
                            <img
                                src={newResize.resizeWapa(image, 670, 425)}
                                srcSet={`${newResize.resizeWapa(image, 342, 380)} 480w,${newResize.resizeWapa(
                                    image,
                                    342,
                                    380
                                )} 807w,${newResize.resizeWapa(image, 670, 425)} 1102w,${newResize.resizeWapa(image, 612, 344)} 1250w`}
                                sizes="(max-width: 480px) 342px, (max-width: 807px) 633px,(max-width: 1102px) 1100px, 1250px"
                                decoding="async"
                                alt={ele.title}
                                title={ele.title}
                                className={`${style.type_3_image} ${style["primarySpotlight__image"]} ${style["primary-image--type-3"]}`}
                            />
                        </figure>
                    );

                }
                if (currentTypeCover === "type_4" || currentTypeCover === "type_5"){
                    primaryOtherCover = (
                        <div
                                className={`${style["primary__other"]} ${currentTypeCover === "type_5" ? style["primary__other--type_5"] : ""} extend-link--outside`}
                            >
                                {primaryImage}
                                {itemActive && enVivo && <span className={style["mainSpotlight__inlive"]}>{enVivo}</span>}
                                    <a href={ele.url} className="extend-link">
                                        <figcaption className={style["primary__other--figcaption"]}>
                                            <div className={`${style["primary__other--content"]}`}>
                                                <span className={`${style["mainSpotlight__section"]} ${style["section-primary"]}`}>
                                                    {ele?.header || "sección"}
                                                </span>
                                                <h1 className={style["primarySpotlight__title"]}>
                                                        {ele.title}
                                                </h1>
                                            </div>
                                        </figcaption>
                                    </a>
                            </div>
                    )
                    
                }

                primaryItem = (
                    <div
                        className={`${isNotFirstType && style.primarySpotlight__type_3} ${style["primarySpotlight"]} extend-link--outside`}
                    >
                        {primaryImage}
                        {itemActive && enVivo && <span className={style["mainSpotlight__inlive"]}>{enVivo}</span>}
                            <div className={`${style["primarySpotlight__content"]}`}>
                                <span className={`${style["mainSpotlight__section"]} ${style["section-primary"]}`}>
                                    {ele?.header || "sección"}
                                </span>
                                <h1 className={style["primarySpotlight__title"]}>
                                    <a href={ele.url} className="extend-link">
                                        {ele.title}
                                    </a>
                                </h1>
                            </div>
                    </div>
                );
            }
            if (key === 1 || key === 2) {
                secondaryData.push(ele);
            }
            if (key !== 0 && key !== 1 && key !== 2) {
                lateralData.push(ele);
            }
            if (currentTypeCover === "type_2") {
                if (key === 1 || key === 2) {
                    lateralData.push(ele);
                }
            }
            if (currentTypeCover === "type_5") {
                if (key === 1 || key === 2 || key === 3) {
                lateralData.push(ele);
            }
            }
        });

        secondaryItems = secondaryData.map((item, key) => {
            const image = item?.image?.url || process.env.IMAGE_DEFAULT_1250x735;
            itemActive = item?.inlive;
            enVivo = <InliveBadge label="EN VIVO" variant="small" />;
            return (
                <div className={`${style["secondarySpotlight__item"]} extend-link--outside`} key={key}>
                    <figure className={`${style["secondarySpotlight__figure"]} ${style["secondary-image__outside--type-3"]}`}>
                        <img
                            src={newResize.resizeWapa(image, 188, 115)}
                            srcSet={`${newResize.resizeWapa(image, 342, 192)} 480w,${newResize.resizeWapa(
                                image,
                                342,
                                201
                            )} 807w,${newResize.resizeWapa(image, 386, 228)} 1102w,${newResize.resizeWapa(image, 612, 361)} 1250w`}
                            sizes="(max-width: 480px) 342px, (max-width: 807px) 633px,(max-width: 1102px) 1100px, 1250px"
                            decoding="async"
                            alt={item.title}
                            title={item.title}
                            className={`${style["secondarySpotlight__image"]} ${style["secondary-image--type-3"]}`}
                        />
                    </figure>
                    {itemActive && enVivo && <span className={style["mainSpotlight__inlive"]}>{enVivo}</span>}
                    <div className={style["secondarySpotlight__content"]}>
                        <h2 className={style["secondarySpotlight__title"]}>
                            <a href={item.url} className="extend-link">
                                {item?.title}
                            </a>
                        </h2>
                        <span className={style["mainSpotlight__section"]}>{item?.header || "sección"}</span>
                    </div>
                </div>
            );
        });

        if (currentTypeCover === "type_4" || currentTypeCover === "type_5"){
            enVivo = <InliveBadge label="EN VIVO" variant="small" />;
            lateralItems = lateralData.map((item, key) => {
                itemActive = item?.inlive;
                if (key < 3) {
                    const image = item?.image?.url || process.env.IMAGE_DEFAULT_1250x735;
                    return (
                        <div className={`${style["lateral__item"]} extend-link--outside`} key={key}>
                            <div>
                                <img
                                    src={newResize.resizeWapa(image, 194, 120)}
                                    alt={item.title}
                                    title={item.title}
                                    className={`${style["lateral__image"]} ${style[""]}`}
                                />
                            </div>
                            {itemActive && enVivo && <span className={style["mainSpotlight__inlive"]}>{enVivo}</span>}
                            <div className={style["lateral__content"]}>
                                <a href={item.url} className={`${style["lateral__link"]} extend-link`}>
                                    <h2 className={style["lateral__title"]}>{item?.title}</h2>
                                </a>
                                <p className={style["lateralSpotlight__section"]}>{item?.header || "sección"}</p>
    
                            </div>
                        </div>
                    );

                }
            });
        } else {
            lateralItems = lateralData.map((item, key) => {
                if (key < 5) {
                    return (
                        <div className={`${style["lateralSpotlight__content"]} extend-link--outside`} key={key}>
                            <a href={item.url} className={`${style["lateralSpotlight__item"]} extend-link`}>
                                <h2 className={style["lateralSpotlight__title"]}>{item?.title}</h2>
                            </a>
                            <p className={style["lateralSpotlight__section"]}>{item?.header || "sección"}</p>
                        </div>
                    );
                }
            });
        }
    }
    if (currentTypeCover === "type_1") {
        showMainCover = (
            <div className={style["mainSpotlight__container"]}>
                <div className={style["mainSpotlight__principal"]}>
                    {primaryItem}
                    <div className={style["secondarySpotlight"]}>{secondaryItems}</div>
                    <SlotAds type={"Strip"} data={dataAds} />
                </div>
                <div className={style["mainSpotlight__lateral"]}>
                    {lateralItems}
                    <Editorial data={editorial} />
                    <SlotAds type={"Grilla"} data={dataAds} />
                </div>
            </div>
        );
    } else if (currentTypeCover === "type_2") {
        showMainCover = (
            <div className={style["mainSpotlight__container"]}>
                <div className={`${style["mainSpotlight__principal"]}`}>{primaryItem}</div>
                <SlotAds type={"Strip"} data={dataAds} />
                <div className={style["mainSpotlight__lateral"]}>
                    {lateralItems}
                    <Editorial data={editorial} />
                    <SlotAds type={"Grilla"} data={dataAds} />
                </div>
            </div>
        );
    } else if (currentTypeCover === "type_3") {
        showMainCover = (
            <div className={`${style.type_3} ${style["mainSpotlight__container"]}`}>
                <div className={`${style["mainSpotlight__principal"]}`}>{primaryItem}</div>
                <div className={`${style.type_3_lateral} ${style["mainSpotlight__lateral"]}`}>{secondaryItems}</div>
                <SlotAds type={"Strip"} data={dataAds} />
            </div>
        );
    } else if (currentTypeCover === "type_4") {
        showMainCover = (
            <div className={style["mainSpotlight__container"]}>
                <div className={style["mainSpotlight__principal"]}>
                    {primaryOtherCover}
                    <div className={style["secondarySpotlight"]}>{secondaryItems}</div>
                    <SlotAds type={"Strip"} data={dataAds} />
                </div>
                <div className={style["mainSpotlight__lateral"]}>
                    {lateralItems}
                    <Editorial data={editorial} />
                    <SlotAds type={"Grilla"} data={dataAds} />
                </div>
            </div>
        );
    } else if (currentTypeCover === "type_5") {
        showMainCover = (
            <div className={style["mainSpotlight__container"]}>
                <div className={style["mainSpotlight__principal"]}>
                    {primaryOtherCover}
                    <SlotAds type={"Strip"} data={dataAds} />
                </div>
                <div className={style["mainSpotlight__lateral"]}>
                    {lateralItems}
                    <Editorial data={editorial} />
                    <SlotAds type={"Grilla"} data={dataAds} />
                </div>
            </div>
        );
    }
    return showMainCover;
};

export { MainSpotlight };
