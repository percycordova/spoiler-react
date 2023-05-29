import { TitleSection } from "component/Page_Home/TitleSection/TitleSection";
import style from "component/Page_Home/AnnouncementsGrid/AnnouncementsGrid.module.scss";


const AnnouncementsGrid = ({ data }) => {
    const { list } = data;
    let showAnnouncements = null;
    
    if (list && list.length > 0) {
        showAnnouncements = list.map((item, key) => {
            return (
                    <div className={`${style["announcement__item"]} extend-link--outside`} key={`announcement-${key}`}>
                        <img loading="lazy" src={item.image} alt={item?.title} width="60" height="60" className={style["announcement__image"]}/>
                        <div className={`${style["announcement__content"]}`}>
                            <span>{item?.category}</span>
                            <h3>
                                <a href={item?.url} className="extend-link">
                                    {item?.title}
                                </a>
                            </h3>
                        </div>
                    </div>
            )
        })
        
        
        return <section>
                    <TitleSection title={"Avisos"} seeMoreText={"ver más"} linkTo={"https://anuncios.larepublica.pe/comunicados"}/>
                    <div className={style["announcementGrid"]}>
                        {showAnnouncements}
                    </div>
                </section>
    }
    return null;
}

export { AnnouncementsGrid };