import { useFullWidth } from "component/Page_Home/Inlive/Inlive.hook";
import { CloseButtonContainer } from "component/global/CloseButtonContainer/CloseButtonContainer";
import { InliveBadge } from "component/global/InliveBadge/InliveBadge";
import { IconExpand } from "component/global/Icon/IconExpand";
import { IconCompress } from "component/global/Icon/IconCompress";

import style from "component/Page_Home/Inlive/Inlive.module.scss";


const VideoSticky = ({ data }) => {
    // console.log({data});
    const { handleFullWidth, isFullWidth } = useFullWidth();
    const cssVariant = isFullWidth ? style["full-width"]:  ""; 
    const Icon = isFullWidth ? <IconCompress height="11" width="10"/> : <IconExpand height="10" width="10"/>;
    if (data && data[0]?.data?.title && data[0]?.data?.embed) {
        const {title,embed:multimedia} = data[0]?.data
    

        if (title && multimedia) {
            
            return (
                <CloseButtonContainer variant="top-right" onClose={()=> window.scrollTo(0,0)} >
                    <div className={`w-1000 ${style["inlive"]} ${cssVariant}`}>
                        <button type="button" onClick={handleFullWidth} className={style["inlive__icon"]}>{Icon}</button>
                        <div className={`${style["inlive__multimedia"]} ${cssVariant}`}>
                            <div className={`${style["outside-multimedia"]}`} dangerouslySetInnerHTML={{ __html: multimedia }} />
                        </div>
                        <div className={`${style["inlive__description"]} ${cssVariant}`}>
                            <h2 className={`${style["inlive__title"]}`}>{title}</h2>
                        </div>
                    </div>
                </CloseButtonContainer>
            );
        }
        return null;
    }
    return null;
};

export { VideoSticky };
