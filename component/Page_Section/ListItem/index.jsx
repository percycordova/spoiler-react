import {Image} from "component/global/Image/Image";
import { convertirFecha } from "../../../util/convertirFecha";

const resizeImage = {
    mobile: "321x160",
    tablet: "438x251",
    desktop: "276x152",
};

const ListItem = ({ data, amp }) => {
        
    let imageAuthor = null;
    let nameAuthor = null;
    let showAuthor = null;
    let showImage = null;
    let showTitle = null;
    let slugAuthor = null;
    let hasVideo;
    const isGallery = data?.type === "gallery";
    
    if (data && Object.keys(data) && Object.keys(data).length) {
        if (data?.title && data.title.length) {
            showTitle = <h2 className={amp ? "amp-listItem-title" : "listItem-title"}>
                <a className="listItem__link" href={data?.slug || "#"}>{data.title}</a>
            </h2>
        }

        if (data.data && Object.keys(data.data) && Object.keys(data.data).length) {
            const { data: datos } = data;

            if (datos.multimedia) {
                
                if (datos.multimedia.some((media) => media.type == "video")) {
                    hasVideo = true;
                }
                if (amp) {
                    let ampImg = {
                        amp: true,
                        path: datos.multimedia[0].path,
                        type: datos.multimedia[0].type,
                        data: datos.multimedia[0].data,
                    };

                    showImage = <Image title={data?.title || ""} data={ampImg} resize={resizeImage} />;
                } else {
                    showImage = <Image title={data?.title || ""} data={datos.multimedia[0]} resize={resizeImage} />;
                }
            } else {
                showImage = <Image title={data?.title || ""} resize={resizeImage} />;
            }

            if (datos.authors && datos.authors.length) {
                const { authors } = datos;
                nameAuthor = authors[0].fullname;
                slugAuthor = authors[0].slug;
                imageAuthor = authors.metadata?.find((meta) => meta.key == "url_photo")?.value || process.env.IMG_150x150;
                showAuthor = (<a className = "author-data" href={slugAuthor}>
                    <div className="author_data__image">
                        <img alt={nameAuthor} title={nameAuthor} loading="lazy" src={imageAuthor} />
                    </div>
                    <div className="title-author">{nameAuthor}</div>
                </a>)
            }
        }
    }

    return (
        <article className={amp ? "amp-comp-listItem" : "comp__listItem"}>
            <div className="lisItem__image">
                <figure className={`listItem__figure ${hasVideo ? "video-type" : isGallery ? "gallery-type" : ""}`}>{showImage}</figure>
            </div>
            <figcaption className="listItem__figcaption">
                {showTitle}
                <div className={amp ? "amp-listItem-author-tags" : "listItem-author-tags"}>
                    {showAuthor}
                </div>
            </figcaption>
        </article>
    );
}

export {ListItem};