import style from "./SectionGridElement.module.scss";
import resizePrototype from 'util/resizePrototype';

const newResize = new resizePrototype();

const SectionGridElement = ({ dataSection, title, content, tall, seeMore = true }) => {
    let contentSection = null;
    let image = null;
    let author = null;
    let notaTitle = null;
    let notaSlug = null;

    if (dataSection && Object.keys(dataSection) && Object.keys(dataSection).length) {
        
        if (content === "molina") {
            const { data, slug } = dataSection;
            const { multimedia } = data;

            image = multimedia[0]?.path || process.env.IMG_150x150;
            notaSlug = slug;
            contentSection = (
                <picture>
                    <img 
                        src={newResize.resizeWapa(image, 320, 188)}
                        alt={data.title}
                        title={data.title}
                    />
                </picture>
            )
        }
        if (content === "entrevistas") {
            const { data, title, slug } = dataSection;
            const { multimedia } = data;
            const { authors } = data;

            image = multimedia[0]?.path || process.env.IMG_150x150;
            author = authors[0]?.fullname || "";
            notaTitle = title || "";
            notaSlug = slug;
            contentSection = (
                <>
                    <picture>
                        <img 
                            src={newResize.resizeWapa(image, 320, 188)}
                            alt={data.title}
                            title={data.title}
                        />
                    </picture>
                    <div className={style.sectionContent__text__wrapper}>
                        <div className={style.sectionContent__text}>
                            <h3 className={style.authorName}>{author}</h3>
                            <p className={style.notaTitle}>{notaTitle}</p>
                        </div>
                    </div>
                </>
            )
        }
        if (content === "columnistas") {
            
            const { author, articles } = dataSection;
            const { metadata, fullname } = author;
            const { data } = articles;

            for (let i = 0; i < metadata.length; i++) {
                if (metadata[i].key === "url_photo") {
                    image = metadata[i].value;
                }
            }
            notaTitle = data[0]?.title || "";
            notaSlug = data[0]?.slug;
            contentSection = (
                <div className={style.columnContainer__flex}>
                    <div className={style.sectionContent__radialImage}>
                        <figure>
                            <img 
                                src={newResize.resizeWapa(image, 107, 107)}
                                alt={data.title}
                                title={data.title}
                            />
                        </figure>
                    </div>
                    <div>
                        <h3 className={style.authorName}>{fullname}</h3>
                        <p className={style.notaTitle}>{notaTitle}</p>
                    </div>
                </div>
            )
        }
        if (content === "enFoco") {
            const { data, title, slug } = dataSection;
            const { multimedia, teaser } = data;

            image = multimedia[0]?.path || process.env.IMG_150x150;
            notaTitle = title || "";
            notaSlug = slug;
            contentSection = (
                <>
                    <picture>
                        <img 
                            src={newResize.resizeWapa(image, 608, 342)}
                            alt={data.title}
                            title={data.title}
                        />
                    </picture>
                    <div className={`${style.sectionContent__text__wrapper} ${tall ? style.tallSectionContent__text__wrapper : ""}`}>
                        <div className={style.sectionContent__text}>
                            <h3 className={style.notaTitle}>{notaTitle}</h3>
                            <p className={style.teaser}>{teaser}</p>
                        </div>
                    </div>
                </>
            )
        }
        if (content === "portada") {
            const { data, slug } = dataSection;
            const { pages } = data;

            image = pages[0]?.files[0]?.path || process.env.IMG_150x150;
            notaSlug = slug;
            contentSection = (
                <picture>
                    <img 
                        src={newResize.resizeWapa(image, 280, 342)}
                        alt={data.title}
                        title={data.title}
                    />
                </picture>
            )
        }
    }

    return (
        <div className={`${content === "enFoco" ? "dobleColumnDomingo" : ""} ${style.elementContainer}`}>
            <div className={style.titleSection__wrapper}>
                <h2 className={style.titleSection}>{title}</h2>
                {
                    seeMore && (
                        <a className={style.seeMore} href={notaSlug}>
                            ver más
                        </a>
                    )
                }
            </div>
            <div className={`${content === "enFoco" && style.permaHeight} ${style.sectionContent__wrapper} ${tall ? style.tallSectionContent__wrapper : ""}`}>
                <a href={notaSlug}>
                    {contentSection}
                </a>
            </div>
        </div>
    )
}

export { SectionGridElement }