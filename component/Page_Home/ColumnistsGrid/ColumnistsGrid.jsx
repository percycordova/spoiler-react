import { TitleSection } from "component/Page_Home/TitleSection/TitleSection"
import style from "component/Page_Home/ColumnistsGrid/ColumnistsGrid.module.scss";
import resizePrototype from "util/resizePrototype";

const newResize = new resizePrototype();

const ColumnistsGrid = ({data, title, linkTo}) => {
    const columnists = data?.spotlight?.data?.columnist || [];
        
    if(columnists?.length > 0 ) {

        const items = columnists.slice(0,6)?.map ((columnist, key) => {
            if(columnist?.length > 0 && columnist[0]) {
                const fullname = columnist[0]?.fullname || "Columnista LR",
                    image = columnist[0]?.image?.url || process.env.IMAGE_AUTHOR_DEFAULT_500x500,
                    slug = columnist[0]?.slug || "/columnistas",
                    last_article_title = columnist[0]?.last_article?.title,
                    last_article_slug = columnist[0]?.last_article?.slug,
                    id = columnist[0]?.id || key;
                
                return <div className={`${style["columnist__item"]} extend-link--outside`} key={id}>
                    
                    <img loading="lazy" src={newResize.resizeWapa(image, 107,107)} alt={fullname} height="107" width="107" className={style["columnist__avatar"]}/>

                    <a href={slug} className={`d-block ${style["columnist__fullname"]}`}>{fullname}</a>

                    <h2 className={style["columnist__title"]}>
                        <a href={last_article_slug} className="extend-link">{last_article_title}</a>
                    </h2>

                </div>
            }
            return null
        })

        return <section>
            <TitleSection title={title} linkTo={linkTo} seeMoreText="VER MÁS"/>
            <div className={`d-flex ${style["columnist"]}`}>
                {items}
            </div>
        </section>
    }
    
    return null;
}

export {ColumnistsGrid}