import style from "component/Page_Special/Elecciones/MainSpotlight/MainSpolight.module.scss"
import { InliveBadge } from "component/global/InliveBadge/InliveBadge";
import { SlotAds } from "component/global/AdsManager/SlotAds";
import { ItemGrid } from "component/Page_Special/Elecciones/ItemGrid/ItemGrid";
import { SeeMoreSpecial } from "component/global/SeeMoreSpecial/SeeMoreSpecial";
import resizePrototype from 'util/resizePrototype';

const newResize = new resizePrototype();

const MainSpolight = ({ data, dataAds }) => {
    const coverItems = data?.spotlight?.data?.cover_item;

    let primaryItem = null,
        lateralItems = null,
        secondaryItems = null,
        secondaryData = [],
        lateralData = [],
        enVivo = null,
        itemActive = false;

    if (coverItems && coverItems.length > 0) {
        coverItems.map((ele, key) => {
            if (key === 0) {
                itemActive = ele?.inlive;
                const image = ele?.image?.url || process.env.IMAGE_DEFAULT_1250x735;
                enVivo = <InliveBadge label="EN VIVO" variant="large"/>;
                primaryItem = (
                    <a href={ele.url} className={style["primarySpotlight"]}>
                        <figure className={style["primarySpotlight__figure"]} key={key}>
                            <img  
                                src={newResize.resizeWapa(image, 480,282)}
                                srcSet={`${newResize.resizeWapa(image, 342, 192)} 480w,${newResize.resizeWapa(image, 342, 192)} 807w,${newResize.resizeWapa(image, 386, 344)} 1102w,${newResize.resizeWapa(image, 612, 344)} 1250w`}
                                sizes="(max-width: 480px) 342px, (max-width: 807px) 633px,(max-width: 1102px) 1100px, 1250px"
                                decoding="async"
                                alt={ele.title} 
                                title={ele.title}
                                className={`${style["primarySpotlight__image"]}`}
                            />
                        </figure>
                        {itemActive && enVivo && <span className={style["mainSpotlight__inlive"]}>{enVivo}</span>}
                        <div className={style["primarySpotlight__content"]}>
                            <h1 className={style["primarySpotlight__title"]}>{ele.title}</h1>
                            <p className={style["mainSpotlight__author"]}>Por: {ele?.header || 'Política LR'}</p>
                        </div>
                    </a>
                );
            }
            if([1,2,3,4,5].includes(key)) {
                lateralData.push(ele)
            }
            if([6,7,8,9,10].includes(key)) {
                secondaryData.push(ele)
            }
        })

        lateralItems =  lateralData.map((item, key) => {
            return (
                <div className={style["lateralSpotlight__content"]} key={key}>
                    <a href={item.url} className={style["lateralSpotlight__item"]}>
                        <h2 className={style["lateralSpotlight__title"]}>{item?.title}</h2>
                        <p className={style["lateralSpotlight__author"]}>Por: {item?.header || 'Política LR'}</p>
                    </a>
                </div>
            )
        });

        secondaryItems =  secondaryData.map((item, key) => {
            const image = item?.image?.url || process.env.IMAGE_DEFAULT_1250x735;

            const dataItem = {
                image: image,
                title: item?.title,
                author: item?.header,
                slug: item.url,
            }

            return  <ItemGrid data={dataItem} key={key}/>
        });

    }

    return (
        <div className={style["mainSpotlight__elections"]}>
            <div className={style["cover__elections"]}>
                <div className={style["mainSpotlight__principal"]}>
                    {primaryItem}
                </div>
                <SlotAds data={dataAds} type={"Strip"} /> 
                <div className={style["mainSpotlight__lateral"]}>
                    {lateralItems}
                </div>
            </div>
            <SlotAds type={"webhome_inline"} data={dataAds} />
            <div className={style["mainSpotlight__secondary"]}>
                {secondaryItems}
            </div>
            <SeeMoreSpecial title={"Ver más noticias"} linkTo={"https://larepublica.pe/elecciones/ultimas-noticias"} />
        </div>
    )
}

export { MainSpolight };