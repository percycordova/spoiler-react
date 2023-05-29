import { ContentElement } from "../ContentElement/ContentElement";
import { convertirFecha } from "util/convertirFecha";
import style from './MainContentVerificador.module.scss'
import resizePrototype from "util/resizePrototype";

const urls = ['/verificador/2019/09/10/sobre-nosotros','/verificador/2019/10/19/correcciones','/verificador/2019/09/10/metodologia','/verificador/2019/09/11/contacto']

const MainContentVerificador = (props) => {
    const newResize = new resizePrototype();

    const {data, adsPage, data_author, fecha, slug} = props;
    let showAuthor=null;
    
    if(data_author && data_author?.length > 0){
        showAuthor = data_author.map((item) => {
            const imgAuthorPath  = item.metadata?.find((meta) => meta.key == "url_photo")?.value || process.env.LOGO_LR_AUTHOR;
                return  (
                <div className={style["author__image"]}> 
                    <figure>
                        <img src={newResize.resizeWapa(imgAuthorPath,24,24)} loading="lazy" width='24' height='24' alt="author" />
                    </figure>
                    <a href={item?.slug || "/autor/la-republica/"}>{item?.fullname || 'La República' }</a>
                </div>
            )})
    }
    
  return  (
   
            <div className={`${style["content__notice__verificador"]} `}>
                {!urls.includes(slug) && <div className={style.content__author}> 
                    <div>
                        {showAuthor}
                    </div>
                    {fecha && <time dateTime={fecha} className={style.main__date}>
                        {convertirFecha(fecha?.split(" ").join("T"), "shortSection")}</time> }
                </div>}
                <ContentElement data={data} dataAds={adsPage} amp={false} />
            </div>
       
);
};

export { MainContentVerificador };
