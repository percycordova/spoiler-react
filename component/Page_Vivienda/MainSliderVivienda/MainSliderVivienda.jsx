import { GalleryContainer, sliderEducacionContent, NavSlider } from "./MainSliderVivienda.module.scss";
import Head from "next/head"
import Slider from "react-slick"
import resizePrototype from "util/resizePrototype";
const settings = {
    dots: true,
    arrow: false,
    infinite: false,
    autoplay: false,
    lazyLoad: false,
    className: GalleryContainer,
    adaptiveHeight: false,
    speed: 500,
    slidesToShow: 1,
    dotsClass: NavSlider,
    customPaging: i => <button></button>,
    nextArrow: <a className={"slider-nav slider-nav__right"}>&#8594;</a>,
    prevArrow: <a className={"slider-nav slider-nav__left"}>&#8592;</a>
};
const MainSliderVivienda = ({ data }) => {
    return data?.length > 0 && (<>
        <Slider {...settings}>
            {data.map(function (item, index) {
                let sliderImage = item.image.url;
                if (sliderImage) {
                    sliderImage = new resizePrototype().resizeWapa(sliderImage, 968, 584)
                }
                return (
                    <div className="slide-educacion" key={`index-slider-${index}`}>
                        <img src={sliderImage} alt={item.title} />
                        <div className={sliderEducacionContent}>
                            <h1>{item.title}</h1>
                            <a className="slider-educacion__button" href={item.url}>LEER MÁS</a>
                        </div>
                    </div>
                )
            })}
        </Slider>
        <Head>
            <link
                rel="stylesheet"
                type="text/css"
                charset="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
        </Head>
    </>
    )
}

export { MainSliderVivienda };
