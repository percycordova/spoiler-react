import style from "./SectionGridJudicialidad.module.scss";
import { TitleSection } from "component/Page_Home/TitleSection/TitleSection";
import { Image } from "component/global/Image/Image";
import resizePrototype from "util/resizePrototype";

const MULTIMEDIA_DEFAULT = {
    add: "front",
    type: "image",
    path: '/static/judicialidad.png'
}

const SectionGridJudicialidad = ({data, title, type, linkTo, imageTitle, sponsor, withSection,showImage=true}) => {
    const newResize = new resizePrototype();
    let items = null;
    if(type === "comercial"){
        items = data?.spotlight?.data?.automatic[0]?.notes;
        linkTo = data?.spotlight?.data?.url;
        title = data?.spotlight?.data?.title || data?.spotlight?.data?.automatic[0]?.term?.name;
    } else {
        items = data?.articles?.data;
        linkTo = `${process.env.SITE_DOMAIN_URL}${linkTo}`;
    }
    let showItems = null;
    let showGrid = null;

    let resizeImage = {
        mobile: '164x95',
        tablet: '175x95',
        desktop: '230x129'
    }

    if(items && items.length > 0){
        showItems = items.map((item, key) =>{
            
            const image = item?.data?.multimedia.find(media => media.type == "image")?.path ||
            item?.data?.multimedia.find(media => media.type == "video")?.data?.image_path || data?.image || MULTIMEDIA_DEFAULT.path;
    
            return ( <article key={`judicial-article-${key}`} className={` ${style.box__item} extend-link--outside`}>
            {/* <ItemSection data={item} key={key} withSection={withSection} type={type} showImage={showImage} /> */}
            <figure className={style["itemSection__image__item"]}>
                <img alt={data?.title || ''}  src={newResize.resizeWapa(image,60,60)} wwidth={"60"} height={"60"} />
                
            </figure>
            <h2 className={style["itemSection__title"]}>
                        <a href={item.slug} className="extend-link">
                            {item?.title}
                        </a>
                    </h2>
            </article>)});

        showGrid =
                        <section className={style["grillaHome"]}>
                            <div className={style["grillaHome__items1"]}>
                                <TitleSection title={title} type={type} seeMoreText={'ver más'} linkTo={linkTo} imageTitle={imageTitle} sponsor={sponsor} />
                            <div className={style.items}>
                            {showItems}
                                </div>
                            </div>
                            <div className={style["grillaHome__items2"]}>
                            <figure className={style["itemSection__image"]}>
                            <Image 
                                data={MULTIMEDIA_DEFAULT} 
                                resize={resizeImage} 
                                title={data?.title || ''} 
                                preload={true} 
                                mainImage={false}
                            />
                            <div className={style.text__container}>
                                <h2>Ingresa a nuestra</h2>
                                <h2 className={style.title__judicial}>Gaceta Judicial</h2>
                                <a target="_blank" rel="noopener noreferrer" href='https://informativos.larepublica.pe/gaceta-judicial'>Ingresa Aquí</a>
                                </div>
                            </figure>
                            </div>
                        </section>
    }

    return showGrid;
    
}

export { SectionGridJudicialidad };