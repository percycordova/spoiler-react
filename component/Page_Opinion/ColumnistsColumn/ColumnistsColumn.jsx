import { TitleSection } from "component/global/TitleSection/TitleSection";
import { convertirFecha } from "util/convertirFecha";
import style from "component/Page_Opinion/ColumnistsColumn/ColumnistsColumn.module.scss";
import resizePrototype from 'util/resizePrototype';

const newResize = new resizePrototype();

const ColumnistsColumn = ({ data }) => {
    const columnists = data?.spotlight?.data?.columnist || [];
    if (columnists.length > 0) {
        const items = columnists.slice(0,5)?.map ((columnist, key) => {
            if(columnist?.length > 0 && columnist[0]) {
                const id = columnist?._id || key;
                const { image, fullname, last_article, slug, column } = columnist[0];
                const imageSrc = image?.url || process.env.IMAGE_DEFAULT_1250x735;
                const dateArticle = convertirFecha(last_article?.date, "shortSection");
                const tagName = column?.name;
                const tagSlug = column?.url;
                
                return (
                    <div className={style["columnist"]} key={id}>
                        <a href={last_article.slug} >
                                <figure>
                                    <img  
                                        src={newResize.resizeWapa(imageSrc, 124,124)}
                                        decoding="async"
                                        alt={last_article?.title} 
                                        title={last_article?.title}
                                        className={`${style["columnist__image"]}`}
                                    />
                                </figure>
                            </a>
                            <div className={style["columnist__content"]}>
                                <a href={last_article.slug} >
                                    <h2 className={style["columnist__title"]}>{last_article.title}</h2>
                                </a>
                                <a href={tagSlug || `#`} className={style["columnist__tag"]}>
                                    {tagName}
                                </a>
                                <div className={style["columnist__author"]}>
                                    <a href={slug} className={style["columnist__author--name"]}>POR: {fullname}</a>
                                    <time className={style["columnist__time"]}>
                                        {dateArticle}
                                    </time>
                                </div>
                            </div>
                    </div>
                )
            }

            return null;
        })

        return (
            <section className={style.section}>
                 <TitleSection name="Columnistas" tag="h1" />
                <div className={`d-flex ${style["columnist__container"]}`}>
                    {items}
                </div>
                <a href="/columnistas" className={style["seeMore_button"]}>VER TODOS</a>
            </section>
        )
    }

    return null
}

export { ColumnistsColumn }
