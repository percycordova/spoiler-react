import { useFullWidth } from "component/Page_Home/Inlive/Inlive.hook";
import { CloseButtonContainer } from "component/global/CloseButtonContainer/CloseButtonContainer";
import { InliveBadge } from "component/global/InliveBadge/InliveBadge";
import { IconExpand } from "component/global/Icon/IconExpand";
import { IconCompress } from "component/global/Icon/IconCompress";
import style from "component/Page_Home/Inlive/Inlive.module.scss";
const Inlive = ({ inlive }) => {
    const { handleFullWidth, isFullWidth } = useFullWidth();
    const cssVariant = isFullWidth ? style["full-width"]:  ""; 
    const Icon = isFullWidth ? <IconCompress height="11" width="10"/> : <IconExpand height="10" width="10"/>;
    if (inlive?.spotlight?.data && Object.keys(inlive.spotlight.data)?.length) {
        const { data } = inlive.spotlight;
        const title = (data?.title && data?.title[0]) || "",
            multimedia = (data?.embed && data?.embed[0]) || "",
            url = (data?.url && data?.url[0]) || "";

        if (multimedia && title) {
            const headline = url ? (
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="redirección a la nota de envivo - larepublica"
                >
                    {title}
                </a>
            ) : (
                title
            );
            return (
                <CloseButtonContainer variant="top-right">
                    <div className={`w-1000 ${style["inlive"]} ${cssVariant}`}>
                        <button type="button" onClick={handleFullWidth} className={style["inlive__icon"]}>{Icon}</button>
                        <div className={`${style["inlive__multimedia"]} ${cssVariant}`}>
                            <div className={`${style["outside-multimedia"]}`} dangerouslySetInnerHTML={{ __html: multimedia }} />
                        </div>
                        <div className={`${style["inlive__description"]} ${cssVariant}`}>
                            <InliveBadge label="EN VIVO" wIcon="21" hIcon="15" variant="stream"/>
                            <h2 className={`${style["inlive__title"]}`}>{headline}</h2>
                        </div>
                    </div>
                </CloseButtonContainer>
            );
        }
        return null;
    }
    return null;
};

export { Inlive };
