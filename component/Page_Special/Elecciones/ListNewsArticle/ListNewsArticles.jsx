import { ItemGrid } from "component/Page_Special/Elecciones/ItemGrid/ItemGrid"
import style from "component/Page_Special/Elecciones/ListNewsArticle/ListNewsArticles.module.scss";

const ListNewsArticle = ({ data }) => {
    let itemsNews = null;

    if(data && data.length > 0){
        itemsNews = data.map((ele, key) => {
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
                <div className={style["articles__container"]}>{itemsNews}</div>
            </>
        )
    }
    return null;
}

export { ListNewsArticle };