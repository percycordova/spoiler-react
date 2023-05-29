import { SlotAds } from "component/global/AdsManager/SlotAds";
import style from "component/Page_Section/ListSection/ListSection.module.scss";
import styleList from "component/Page_Videos/GridVideos/GridVideos.module.scss";
import resizePrototype from "util/resizePrototype";

const newResize = new resizePrototype();

const GridVideos = (props) => {
    const { data, adsPage } = props;

    let newDataList = [];
    if (data && data.length) {
        data.map((item, key) => {
            newDataList.push(item);
            if (key === 8) {
                const ads1 = {
                    _id: "ADSLOL01",
                    type: "ads",
                    type_ads: "Middle2",
                };
                newDataList.push(ads1);
            }

            if (key === 17) {
                const ads2 = {
                    _id: "ADSLOL02",
                    type: "ads",
                    type_ads: "inline",
                };

                newDataList.push(ads2);
            }

            if (key === 26) {
                const ads3 = {
                    _id: "ADSLOL03",
                    type: "ads",
                    type_ads: "inline2",
                };
                newDataList.push(ads3);
            }
            if (key === 35) {
                const ads4 = {
                    _id: "ADSLOL04",
                    type: "ads",
                    type_ads: "Inline3",
                };
                newDataList.push(ads4);
            }
        });
    }

    return (
        <div className={styleList["list"]}>

            {newDataList?.map((item, i) => {
                if (item.type === "ads") {
                    return (
                        <div className={styleList["list__section--item"] + " " +styleList["item3"]}>
                            <SlotAds type={item?.type_ads} data={adsPage?.ads?.data} key={item?._id} />
                        </div>
                    );
                } else {
                    const image =
                        item?.data?.multimedia?.find((media) => media.type == "image")?.path ||
                        item?.data?.multimedia?.find((media) => media.type == "video")?.data?.image_path ||
                        process.env.IMAGE_DEFAULT_1250x735;
                    const isVideo = item?.data?.multimedia?.some((media) => media.type == "video");
                    const tagName = item?.data?.tags[0]?.name;
                    const tagSlug = item?.data?.tags[0]?.slug;
                    return (
                        <div className={`${styleList["list__section--item"]} extend-link--outside`} key={i}>
                            <figure className={` ${isVideo ? style["video-type"] : ""}`}>
                                <img
                                    src={newResize.resizeWapa(image, 480, 264)}
                                    decoding="async"
                                    loading="lazy"
                                    alt={item.title}
                                    title={item.title}
                                    width={220}
                                    height={124}
                                    className={`${styleList["list__section--image"]}`}
                                />
                            </figure>
                            <div className={style["list__section--content"]}>
                                <a href={tagSlug || `#`} className={styleList["list__section--tag"]}>
                                    {tagName || "Autor LR"}
                                </a>
                                <h2 className={styleList["list__section--title"]}>
                                    <a href={item.slug} className="extend-link">
                                        {item.title}
                                    </a>
                                </h2>
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
};

export { GridVideos };
