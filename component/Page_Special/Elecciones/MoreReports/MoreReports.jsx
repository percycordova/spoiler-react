import style from "component/Page_Special/Elecciones/MoreReports/MoreReports.module.scss"
import resizePrototype from 'util/resizePrototype';
import { TitleSection } from "component/Page_Special/Elecciones/TitleSection/TitleSection";

const newResize = new resizePrototype();

const MoreReports = ({ data }) => {
    const reports = data?.spotlight?.data?.item;
    let showReports = null;

    if(reports && reports.length > 0) {
        const reportsItems = reports.map((item, key) => {
            let showTitle;
            if (key === 0) {
                showTitle = <h1>{item.title || ""}</h1>;
            } else {
                showTitle = <h2>{item.title || ""}</h2>;
            }
            const showImage = item.image.url_origen || process.env.IMAGE_DEFAULT_1250x735;
            return (
                <div className={style["reports__item"]} key={key}>
                    <a href={item.slug}>
                        <img src={newResize.resizeWapa(showImage, 1200,600)} alt="" className={style["reports__image"]} />
                        {showTitle}
                    </a>
                </div>
            )
        })
    
    
        return (
            <>
                <TitleSection title={"Informes"} />
                <div className={style["reports__container"]}>
                    {reportsItems}
                </div>
            </>
        );
    }
    return showReports;
};

export { MoreReports };
