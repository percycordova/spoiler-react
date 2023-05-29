import resizePrototype from "util/resizePrototype";
import style from "component/Page_Humor/ItemHumor/ItemHumor.module.scss";
import { convertirFecha } from "util/convertirFecha";
const newResize = new resizePrototype();

const ItemHumor = ({ data }) => {
    const imgItem = data?.data?.multimedia?.find((media) => media.type === "image")?.path || process.env.IMAGE_DEFAULT_1250x735;
    return (
        <div className={`${style["humor__item"]} extend-link--outside`}>
            <picture className={style["humor__picture"]}>
                <img src={newResize.resizeWapa(imgItem, 212, 134)} alt={data.title} className={style["humor__image"]} />
            </picture>
            <a href={data.slug} className="extend-link">
                <h2 className={style["humor__title"]}>{convertirFecha(data?.update_date?.split(" ").join("T"), "shortHumor")}</h2>
            </a>
        </div>
    );
};

export { ItemHumor };
