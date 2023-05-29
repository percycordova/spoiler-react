import style from "./HumorInternalSlider.module.scss";
import Slider from "react-slick";
import { SlotAds } from "component/global/AdsManager/SlotAds";
import { useEffect, useState } from "react";
import resizePrototype from "util/resizePrototype";
import dynamic from "next/dynamic";

const newResize = new resizePrototype();

const IMG_DEFAULT = "https://cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/XJYRXUSSBJBGXDPGZ4LVC5WI24.png";

const HumorInternalSlider = ({ data, adsPage, selected }) => {
    const [isSliding, setIsSliding] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(selected ?? "");
    const [imageLightBox, setImageLightBox] = useState(null);
    let showImage = null;
    let newData = [];
    let firstElement;
    const isCarlincatura = true;
    const mb_height = isCarlincatura ? 234 : 197;
    const tb_height = isCarlincatura ? 468 : 393;
    const dk_height = isCarlincatura ? 615 : 517;
    const currentSection = selected.data.categories[0];
    const arrayCategories = [
        { title: "Carlincatura", showName: "Carlincaturas" },
        { title: "Molina", showName: "de Molina" },
        { title: "Heduardicidios", showName: "Heduardicidios" },
    ];
    const showedCategory = arrayCategories.find((categoryItem) => categoryItem.title == currentSection.name)?.showName;
    const cssName = style.internal;

    const settings = {
        dots: false,
        arrow: false,
        infinite: true,
        autoplay: false,
        lazyLoad: false,
        className: style.SwiperContainer,
        adaptiveHeight: false,
        fade: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        onSwipe: function (ev) {
            setIsSliding(true)
        },
        beforeChange: function (oldIndex, newIndex) {
            setCurrentSlide(newData[newIndex]);
        },
        afterChange: function () {
            setIsSliding(false)
        }
    };
    function showLightbox(ev) {
        ev.preventDefault();
        if (!isSliding) {
            const imageSlide = currentSlide.data.multimedia[0].path;
            const Lightbox = dynamic(() => import("../HumorInternalLightbox/HumorInternalLightbox").then(res => res.HumorInternalLightbox), { ssr: false, loading: () => <p>Loading...</p>, });
            setImageLightBox(<Lightbox image={newResize.resizeWapa(imageSlide || IMG_DEFAULT, 1200, 660)} setImage={setImageLightBox} />)
        }
    }
    if (data?.length > 0 && selected) {
        const idArr = data.map((item) => item._id);
        const selectedIsInData = selected && idArr.includes(selected._id);

        if (selectedIsInData) {
            firstElement = data.find((item) => item._id === selected._id);
        } else {
            firstElement = selected;
        }

        if (firstElement) {
            newData.push(firstElement);
        }

        data.map((item, key) => {
            if (selected._id !== item._id) {
                newData.push(item);
            }

            if (key === 3) {
                const ads1 = {
                    _id: "ads_galeria1",
                    type: "ads",
                    ads_cont: "Galeria1",
                    additional_properties: {
                        comments: [],
                        inline_comments: [],
                    },
                    content: [],
                };
                newData.push(ads1);
            }

            if (key === 7) {
                const ads2 = {
                    _id: "ads_galeria2",
                    type: "ads",
                    ads_cont: "Galeria2",
                    additional_properties: {
                        comments: [],
                        inline_comments: [],
                    },
                    content: [],
                };
                newData.push(ads2);
            }

            if (key === 11) {
                const ads3 = {
                    _id: "ads_galeria3",
                    type: "ads",
                    ads_cont: "Galeria3",
                    additional_properties: {
                        comments: [],
                        inline_comments: [],
                    },
                    content: [],
                };
                newData.push(ads3);
            }

            if (key === 15) {
                const ads4 = {
                    _id: "ads_galeria4",
                    type: "ads",
                    ads_cont: "Galeria4",
                    additional_properties: {
                        comments: [],
                        inline_comments: [],
                    },
                    content: [],
                };
                newData.push(ads4);
            }

            if (key === 19) {
                const ads5 = {
                    _id: "ads_galeria5",
                    type: "ads",
                    ads_cont: "Galeria5",
                    additional_properties: {
                        comments: [],
                        inline_comments: [],
                    },
                    content: [],
                };
                newData.push(ads5);
            }

            if (key === 23) {
                const ads6 = {
                    _id: "ads_galeria6",
                    type: "ads",
                    ads_cont: "Galeria6",
                    additional_properties: {
                        comments: [],
                        inline_comments: [],
                    },
                    content: [],
                };
                newData.push(ads6);
            }

            if (key === 27) {
                const ads7 = {
                    _id: "ads_galeria7",
                    type: "ads",
                    ads_cont: "Galeria7",
                    additional_properties: {
                        comments: [],
                        inline_comments: [],
                    },
                    content: [],
                };
                newData.push(ads7);
            }
        });

        showImage = newData.map((item, key) => {
            if (item.type && item.type === "ads") {
                return <SlotAds data={adsPage?.ads?.data} type={item.ads_cont} key={`${key}-${item?._id}`} />;
            } else {
                return (
                    <div key={`item-humor-${key}-${item?.title}`} dataheadline={item?.title}>
                        <a href="#" onClick={(ev) => showLightbox(ev, item?.data?.multimedia[0]?.path)}>
                            <figure className={`${style.outside_img_humor} ${cssName}`}>
                                <picture>
                                    <source
                                        media="(min-width: 1000px)"
                                        srcSet={newResize.resizeWapa(item?.data?.multimedia[0]?.path || IMG_DEFAULT, 970, dk_height)}
                                    />
                                    <source
                                        media="(min-width: 768px)"
                                        srcSet={newResize.resizeWapa(item?.data?.multimedia[0]?.path || IMG_DEFAULT, 738, tb_height)}
                                    />
                                    <img
                                        className={style.inside_img_humor}
                                        src={newResize.resizeWapa(item?.data?.multimedia[0]?.path || IMG_DEFAULT, 370, mb_height)}
                                        title={item?.headlines?.basic}
                                        alt={item?.headlines?.basic}
                                    />
                                </picture>
                            </figure>
                        </a>
                    </div>
                );
            }
        });
    }

    return (
        <>
            {(<div className={style.container__humorInternal}>
                <Slider {...settings}>{showImage}</Slider>
            </div>
            )}
            <h1 className={style.title}>{currentSlide.title}</h1>
            <div className={style.seeMore}>
                <a href={currentSection.slug} className={style.seeMore_button}>
                    VER MÁS {showedCategory.toUpperCase()}
                </a>
            </div>
            {imageLightBox}
        </>
    );
};

export { HumorInternalSlider };
