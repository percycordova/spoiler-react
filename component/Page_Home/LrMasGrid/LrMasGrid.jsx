import style from "component/Page_Home/LrMasGrid/LrMasGrid.module.scss";
import { TitleSection } from "component/Page_Home/TitleSection/TitleSection";
import resizePrototype from "util/resizePrototype";

const newResize = new resizePrototype();

const LrMasGrid = ({ data, type, linkTo, title, seeMoreText, setAttrLinkTo }) => {
    const programs = data?.video_program_item;
    let showLogo;

    const showVideos = programs?.map((ele, key) => {
        const { video_program, title, url, image } = ele;
        const originImage = image?.url || process.env.IMAGE_DEFAULT_1250x735;
        const urlImage = newResize.resizeWapa(originImage, 194, 120);
        const name_program = video_program.toString();

        showLogo = (
            <span className={style["lrmas__item--logo"]}>
                <img
                    loading="lazy"
                    alt={`logo ${name_program}`}
                    width="65"
                    height="28"
                    src={`/static/lrmas/program-${name_program}.svg`}
                />
            </span>
        );

        return (
            <div className={`${style["lrmas__item"]} extend-link--outside`} key={`lrmas-${key}`}>
                <img
                    loading="lazy"
                    className={style["lrmas__image"]}
                    src={urlImage}
                    alt={title}
                    title={title}
                />
                <div className={style["lrmas__info"]}>
                    <h3 className={style["lrmas__title"]}>
                        <a className="extend-link" href={url}>
                            {title}
                        </a>
                    </h3>
                    {showLogo}
                </div>
            </div>
        );
    });

    if (programs && programs.length > 0) {
        return (
            <section>
                <TitleSection
                    linkTo={linkTo}
                    title={title}
                    imageTitle="/static/logos/logo-lrmas.svg"
                    seeMoreText={seeMoreText}
                    type={type}
                    setAttrLinkTo={setAttrLinkTo}
                    tag="div"
                />
                <div className={style["lrmas__wrapper"]}>{showVideos}</div>
            </section>
        );
    }
    return null;
};

export { LrMasGrid };
