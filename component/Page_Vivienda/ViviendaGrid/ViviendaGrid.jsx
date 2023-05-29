import { ItemSection } from "component/Page_Home/ItemSection/ItemSection"
import { GridContainer, GridItem, GridWrapper, GridTitle } from "component/Page_Vivienda/ViviendaGrid/ViviendaGrid.module.scss"

const ViviendaGrid = ({ data }) => {
    const { section, articles } = data
    return articles?.length > 0 && (
        <div className={GridWrapper}>
            <div className={GridTitle}>
                <h2>{section.name}</h2>
                {section.slug && <a href={section.slug}>Ver más</a>}
            </div>
            <div className={GridContainer}>
                {articles.map((articleItem) => <ItemSection type={"comercial"} className={GridItem} showImage={true} data={articleItem} />)}
            </div>
        </div>
    )
}

export { ViviendaGrid }
