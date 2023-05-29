import style from "component/Page_Home/TitleSection/TitleSection.module.scss";
import { SeeMore } from "component/global/SeeMore/SeeMore";

const TitleSection = ({ title, linkTo, imageTitle, type, seeMoreText, variant="primary", sponsor, setAttrLinkTo, tag }) => {
    let showTitle,
        showSponsor;

    const TAG = tag || "h2";

    if(type && type === 'spotlight') {
        showTitle = (
            <span className={style["titleSection__logo"]}>
                <img loading = "lazy"
                    alt={`logo ${title}`}
                    width="80"
                    height="35"
                    src={imageTitle} />
            </span>
        )
    } else if (type === 'comercial') {
        showTitle = title;

        showSponsor = (
            <span className={style["titleSection__sponsor"]}>
                AUSPICIADO POR: 
                <img loading = "lazy"
                    alt={`logo ${title}`}
                    width="71"
                    height="17"
                    src={sponsor} />
            </span>
        )
    } else if (type === 'discover') {
        showTitle = <a href={linkTo}>{title}</a>
    } else {
        showTitle = title;
    }
    return (
        <div className={`${style["titleSection__wrapper"]} ${style[variant]} extend-link--outside`}>
            <div className={style["titleSection__main"]}>
                <TAG>
                    {showTitle}
                </TAG>
                {linkTo && seeMoreText && <SeeMore linkTo={linkTo} seeMore={seeMoreText} setAttrLinkTo={setAttrLinkTo}/>}
            </div>
            {sponsor && showSponsor}
        </div>
    )
}

export { TitleSection };