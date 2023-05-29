import { ContentElement } from "component/Page_Internal/ContentElement/index";
import style from "component/Page_Internal/MainContent/MainContent.module.scss";

const MainContentRight = ({ adsPage, data}) => {

    let showTeaser = null;
    let showContent = null;
    let newContentElements = [];
    let slug_note;
    let sharedTitle;
    let showInternal = null;


    if (data && Object.keys(data) && Object.keys(data).length) {
        if (data.slug && data.slug.length) {
            slug_note = data.slug;
        }

        if (data.title && data.title.length) {
            sharedTitle = data.title;
        }

        if (data.data && Object.keys(data.data) && Object.keys(data.data).length) {
            const { data: datos } = data;

            if (datos.teaser_html && datos.teaser_html.length) {
                let teaserContent = datos.teaser_html;
                if(teaserContent.startsWith("<p>") && teaserContent.endsWith("</p>")){
                    teaserContent = teaserContent.split("<p>").filter(value=>value).join("<p>").split("</p>").filter(value=>value).join("</p>");
                }
                showTeaser = <h2 className={style["mainContent__teaser"]} style={{textAlign: 'center'}} dangerouslySetInnerHTML={{__html: teaserContent}}/>;
            }


            if (datos.content_elements && Object.keys(datos.content_elements) && Object.keys(datos.content_elements).length) {
                const { content_elements } = datos;

                if (content_elements) {
                    let counter_paragraph = 0;
                    content_elements.forEach((item, key) => {
                        newContentElements.push(item);
                        if (item.type == "paragraph") {
                            if (counter_paragraph === 0) {
                                const ads1 = {
                                    _id: "ADSLR01",
                                    type: "ads",
                                    typeAds: "Videoinread2",
                                };
                                newContentElements.push(ads1);
                            }
                            if (counter_paragraph === 2) {
                                const ads2 = {
                                    _id: "ADSLR02",
                                    type: "ads",
                                    typeAds: "videoinread",
                                };
                                newContentElements.push(ads2);
                            }
                            if (counter_paragraph === 4) {
                                const ads2 = {
                                    _id: "ADSLR03",
                                    type: "ads",
                                    typeAds: "Inline",
                                };
                                newContentElements.push(ads2);
                            }
                            if (counter_paragraph === 6) {
                                const ads3 = {
                                    _id: "ADSLR04",
                                    type: "ads",
                                    typeAds: "inline2",
                                };
                                newContentElements.push(ads3);
                            }
                            if (counter_paragraph === 8) {
                                const ads4 = {
                                    _id: "ADSLR05",
                                    type: "ads",
                                    typeAds: "inline3",
                                };
                                newContentElements.push(ads4);
                            }
                            counter_paragraph++;
                        }
                        //console.log("newconten---->", newContentElements)
                    });

                    showContent = <ContentElement data={newContentElements} amp={false} slug={slug_note} adsPage={adsPage} />;
                }
            }

        }

        showInternal = (
            <div className={style["main__content"]}>
                <h1 className={style["main__title"]} style={{textAlign: 'center'}}>{sharedTitle}</h1>
                {showTeaser}
                <div className={style["main__body"]}>{showContent}</div>
            </div>
        );
    }

    return showInternal;
};

export { MainContentRight };
