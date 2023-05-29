import style from "component/Page_Section/Domingo/SecondaryItemsGrid/SecondaryItemsGrid.module.scss";
import resizePrototype from 'util/resizePrototype';

const newResize = new resizePrototype();

const SecondaryItemsGrid = ({ data }) => {
    let showItems = null;
    if(data && Object.keys(data) && Object.keys(data).length > 0){
        const itemList = data.map ((item, key) => {
            let image, slug, title = null;
            if(item){
                image = item?.image?.url || process.env.IMAGE_DEFAULT_1250x735;
                slug = item.url;
                title = item.title;
            }
            return (
                <div className={`${style["list--item"]} extend-link--outside`} key={key}>
                    <figure>
                        <img  
                            src={newResize.resizeWapa(image, 196, 115)}
                            decoding="async"
                            alt={title} 
                            title={title}
                            className={`${style["list--image"]}`}
                        />
                    </figure>
                    <a href={slug} className={`${style["list--content"]} extend-link`}>
                        <h2 className={style["list--title"]}>{title}</h2>
                    </a>
                </div>
            )
        })
        showItems = <div className={style["list"]}>
            {itemList}
        </div>

    }
    return showItems;
};

export { SecondaryItemsGrid };
