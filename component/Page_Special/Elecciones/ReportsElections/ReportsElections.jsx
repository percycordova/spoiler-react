import style from "component/Page_Special/Elecciones/ReportsElections/ReportsElections.module.scss"
import resizePrototype from 'util/resizePrototype';
import { TitleSection } from "component/Page_Special/Elecciones/TitleSection/TitleSection";
import { SeeMoreSpecial } from "component/global/SeeMoreSpecial/SeeMoreSpecial";
const newResize = new resizePrototype();

const ReportsElections = ({ data }) => {
    const items = data?.spotlight?.data?.item;
    let reports = null;

    if (items && items.length > 0) {
        reports = items.map((item, key) => {
            const image = item?.image?.url || process.env.IMAGE_DEFAULT_1250x735;
            if(key < 3) {
                return (
                    <div className={style["reports__card"]} key={key}>
                        <a href={item.url}  key={key}>
                            <figure className="">
                                <img 
                                    src={newResize.resizeWapa(image, 235,135)}
                                    srcSet={`${newResize.resizeWapa(image, 342,192)} 480w,${newResize.resizeWapa(image, 342,192)} 807w,${newResize.resizeWapa(image, 386, 344)} 1102w,${newResize.resizeWapa(image, 612, 344)} 1250w`}
                                    sizes="(max-width: 480px) 342px, (max-width: 807px) 633px,(max-width: 1102px) 1100px, 1250px"
                                    decoding="async"
                                    alt={item.title} 
                                    title={item.title}
                                    className={style["reports__card--image"]}
                                />
                            </figure>
                            <div className={style["reports__card--content"]}>
                                <h2 className={style["reports__card--title"]}>{item?.title}</h2>
                            </div>
                        </a>

                    </div>
                )
            }            
        })
        return (
            <>
                <TitleSection title={"Informes"} />
                <div className={style["reportsElections"]}>
                    {reports}
                </div>
                <SeeMoreSpecial title={"Ver todos los informes"} linkTo={"https://larepublica.pe/elecciones/informes"} />
            </>
        )
    }
    return null;
}

export { ReportsElections }