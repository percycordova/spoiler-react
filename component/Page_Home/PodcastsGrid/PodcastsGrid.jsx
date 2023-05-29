import resizePrototype from "util/resizePrototype";
import { TitleSection } from "component/Page_Home/TitleSection/TitleSection";

import style from "component/Page_Home/PodcastsGrid/PodcastsGrid.module.scss";

const newResize = new resizePrototype();
const PodcastsGrid = ({ data, title, linkTo, seeMoreText, setAttrLinkTo }) => {
    const podcasts = data?.podcasts?.data;
    let backgroundColor;
    let showPodcasts;
    if (podcasts && podcasts.length > 0) {
        showPodcasts = podcasts.map((podcast, key) => {
            const { data, date, slug, title } = podcast;
            const imagePodcast = data?.categories[0] && data?.categories[0]?.data?.multimedia?.find(item => item?.subtype === "banner_grid")?.path || process.env.IMAGE_AUTHOR_DEFAULT_500x500;
            const category = data?.categories[0]?.slug;
            const nameProgram = category.replace("/podcast/", "");

            if (nameProgram === "claro-directo-rtv") {
                backgroundColor = "#1f1f1f";
            } else if (nameProgram === "sin-guion") {
                backgroundColor = "#206fea";
            } else if (nameProgram === "grado-5") {
                backgroundColor = "#a7111d";
            } else if (nameProgram === "lr-economia") {
                backgroundColor = "#5ab6d2";
            } else if (nameProgram === "la-entrevista") {
                backgroundColor = "#2200a8";
            } else if (nameProgram === "de-ley") {
                backgroundColor = "#2d4895";
            } else if (nameProgram === "ruta-cti") {
                backgroundColor = "#4322e0";
            } else if (nameProgram === "informe-matinal") {
                backgroundColor = "#f70b40";
            } else if (nameProgram === "audiocolumna-augusto-alvarez-rodrich") {
                backgroundColor = "#d44645";
            } else if (nameProgram === "cuatro-d") {
                backgroundColor = "#ccc";
            } else if (nameProgram === "libero-radio") {
                backgroundColor = "#284148";
            } else if (nameProgram === "vuelta-al-mundo") {
                backgroundColor = "#030054";
            } else if (nameProgram === "entre-rimas-y-gallos") {
                backgroundColor = "#323232";
            } else if (nameProgram === "balon-parado-glr") {
                backgroundColor = "#2d362f";
            } else {
                backgroundColor = "#ccc";
            }

            return (
                <div
                    className={`${style["grillaPodcasts__item"]} extend-link--outside`}
                    style={{ background: backgroundColor }}
                    key={key}
                >
                    <img
                        loading="lazy"
                        className={style["grillaPodcasts__image"]}
                        src={newResize.resizeWapa(imagePodcast, 120, 120)}
                        alt=""
                    />
                    <div className={style["grillaPodcasts__item--content"]}>
                        <span
                            className={style["grillaPodcasts__item--icon"]}
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 1792 1792"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1255 1210q0-32-30-51-193-115-447-115-133 0-287 34-42 9-42 52 0 20 13.5 34.5t35.5 14.5q5 0 37-8 132-27 243-27 226 0 397 103 19 11 33 11 19 0 33-13.5t14-34.5zm96-215q0-40-35-61-237-141-548-141-153 0-303 42-48 13-48 64 0 25 17.5 42.5t42.5 17.5q7 0 37-8 122-33 251-33 279 0 488 124 24 13 38 13 25 0 42.5-17.5t17.5-42.5zm108-248q0-47-40-70-126-73-293-110.5t-343-37.5q-204 0-364 47-23 7-38.5 25.5t-15.5 48.5q0 31 20.5 52t51.5 21q11 0 40-8 133-37 307-37 159 0 309.5 34t253.5 95q21 12 40 12 29 0 50.5-20.5t21.5-51.5zm205 149q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
                                    fill="#fff"
                                />
                            </svg>
                        </span>
                        <a
                            href={`https://podcast.larepublica.pe${slug}`}
                            target="blank"
                            className="extend-link"
                        >
                            <h3 className={style["grillaPodcasts__title"]}>
                                {title}
                            </h3>
                        </a>
                        <span
                            className={style["grillaPodcasts__item--icon"]}
                        >
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 1792 1792"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5-103 385.5-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103zm384 823q32-18 32-55t-32-55l-544-320q-31-19-64-1-32 19-32 56v640q0 37 32 56 16 8 32 8 17 0 32-9z"
                                    fill="#fff"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            );
        });

        return (
            <section className={style["grillaPodcasts"]}>
                <TitleSection
                    title={title}
                    seeMoreText={seeMoreText}
                    linkTo={linkTo}
                    variant="secondary"
                    setAttrLinkTo={setAttrLinkTo}
                />
                <div className={style["grillaPodcasts__items"]}>
                    {showPodcasts}
                </div>
            </section>
        );
    }
    return null;
};

export { PodcastsGrid };
