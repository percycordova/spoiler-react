import { ItemGrid } from "component/Page_Special/Elecciones/ItemGrid/ItemGrid"
import { TitleSection } from "component/Page_Special/Elecciones/TitleSection/TitleSection"
import style from "component/Page_Special/Elecciones/MainSpotlight/MainSpolight.module.scss";

const NewsArticle = ({ data, title, verificador }) => {
    const articles = data?.articles?.data;
    let itemsNews = null;

    if(articles && articles.length > 0){
        itemsNews = articles.map((ele, key) => {
            const author = ele?.data?.authors[0]?.fullname;
            const multimedia = ele?.data?.multimedia;
    
            const media = multimedia?.find((media) => media.type == "video")?.data?.image_path ||
                multimedia?.find((media) => media.type == "image")?.path || process.env.IMAGE_DEFAULT_1250x735;
            const dataEle = {
                image: media,
                slug: ele.slug,
                author: author,
                title: ele.title
            }
            return <ItemGrid data={dataEle} key={key}/>
        })
        return (
            <>
                <TitleSection title={title} verificador={verificador}/>
                <div className={style["mainSpotlight__secondary"]}>{itemsNews}</div>
            </>
        )
    }
    return null;
}

export { NewsArticle };