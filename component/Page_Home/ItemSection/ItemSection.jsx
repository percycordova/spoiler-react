import { Image } from 'component/global/Image/Image';
import { AuthorSign } from 'component/global/AuthorSign/AuthorSign';
import style from "component/Page_Home/ItemSection/ItemSection.module.scss";

const MULTIMEDIA_DEFAULT = {
    add: "front",
    type: "image",
    path: process.env.IMAGE_DEFAULT_1250x735
}
const ItemSection = ({ data, index, withSection=false, type,showImage, className }) => {
    let resizeImage = {
        mobile: '164x95',
        tablet: '175x95',
        desktop: '230x129'
    }
    if (type && type === 'discover') {
        const { title, url, image } = data;
        const image_discover = {
            add: "front",
            type: "image",
            path: image.url
        }
        return (
            <div className={`${className} ${style["itemSection"]} extend-link--outside`} key={`item-section-${index}`}>
                <div>
                    <figure className={style["itemSection__image"]}>
                        <Image 
                            data={image_discover || MULTIMEDIA_DEFAULT} 
                            resize={resizeImage} 
                            title={title || ''} 
                            preload={true} 
                            mainImage={false}
                        />
                    </figure>
                    <h2 className={style["itemSection__title"]}>
                        <a href={url} className="extend-link">
                            {title}
                        </a>
                    </h2>
                </div>
            </div>
        )
    } else {
        const image = data?.data?.multimedia.find(media => media.type == "image") ||
            data?.data?.multimedia.find(media => media.type == "video") || data?.image ||MULTIMEDIA_DEFAULT;
            const authorData = data?.data?.authors;
            const category = data?.data?.categories?.find(category => category.primary === true)?.name;
            const categorySlug = data?.data?.categories?.find(category => category.primary === true)?.slug;
        return (
            <div className={`${className} ${style["itemSection"]} extend-link--outside`} key={`item-section-${index}`}>
                <div className={style["itemSection__inner"]}>
                    <figure className={style["itemSection__image"]}>
                        <Image 
                            data={image} 
                            resize={resizeImage} 
                            title={data?.title || ''} 
                            preload={true} 
                            mainImage={false}
                        />
                    </figure>
                        <h2 className={style["itemSection__title"]}>
                            <a href={data.slug} className="extend-link">
                                {data?.title}
                            </a>
                        </h2>
                    <div className={style['content']}>
                    {type !== 'comercial' && withSection && 
                        <a className={style["itemSection__section"]} href={categorySlug}>{category}</a>
                    }
                    {type !== 'comercial' && <AuthorSign data={authorData} showImage={showImage} />}
                    </div>
                </div>
            </div>
        )
    }
}

export { ItemSection };