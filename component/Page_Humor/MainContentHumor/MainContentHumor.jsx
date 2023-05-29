import { Moreseen } from "component/Page_Section/Moreseen/Moreseen";
import { SlotAds } from "component/global/AdsManager/SlotAds";
import { ShowMoreButton } from "component/global/ShowMoreButton/ShowMoreButton";
import { TitleSection } from "component/global/TitleSection/TitleSection";
import { useRouter } from "next/router";
import React, { useState } from "react";
import fetchApi from "services/api/fetchApi";
import { ItemHumor } from "../ItemHumor/ItemHumor";
import { InterlinkingSection } from "component/Page_Section/InterlinkingSection/InterlinkingSection";
import { MgId } from "component/global/Mgid";

 const MainContentHumor = (props) => {
    const {
        section_data,
        section_about,
        analyticsSeccion,
        adsPage,
        spotlight_general,
    } = props;
    const [dataSection, setDataSection] = useState(section_data?.articles?.data.slice(0,30) || []);
    const [numPage, setNumPage] = useState(2);
    const [loading, setLoading] = useState(false);
    const [lastPage, setLastPage] = useState(false);
    const router = useRouter();
    const { query } = router;
    const { section } = query;
    let titleSection = null;
    let interlinking = null;
    let isDataSubMnu = false;

    const handler = async () => {
        setNumPage(numPage + 1);
        setLoading(true);

        const nameSection=router.asPath.slice(1);

        if (section_data?.articles?.data?.length > 0) {
            if (nameSection && nameSection?.length > 0) {
                let newData = await fetchApi("articles", {
                    limit: 30,
                    order_by: "update_date",
                    category_slug: nameSection,
                    page: numPage,
                });

                if(newData?.articles?.data?.length>0){
                    if(newData?.articles?.data?.length<30){
                      setLastPage(true)
                      }
                }else{
                    setLastPage(true) 
                }

                const newArticles = newData?.articles?.data.filter((newArticle) => {
                    const validateItem = dataSection.some((article) => article?.slug === newArticle?.slug);

                    return !validateItem;
                });
                if (newArticles.length > 0) {
                    fetch(`${process.env.SITE_DOMAIN_URL}/comscoreview.txt?token=${Math.floor(Math.random() * 500000) + 1}`)
                        .then((response) => {
                            if (!response.ok) throw Error(response.status);
                            return response;
                        })
                        .then((response) => console.log("ok"))
                        .catch((error) => console.log(error));
                    setDataSection([...dataSection, ...newArticles]);
                    // console.log("data-section::::::", dataSection);
                }else{
                    setLastPage(true)
                  }
            }
        }
        setLoading(false);
    };

    if (spotlight_general && Object.keys(spotlight_general) && Object.keys(spotlight_general).length) {
        const { spotlight } = spotlight_general;

        if (spotlight && Object.keys(spotlight) && Object.keys(spotlight).length) {
            const { data } = spotlight;

            if (data && Object.keys(data) && Object.keys(data).length) {
                const { section_item_link } = data;

                let dataSubMenu = section_item_link?.filter((submenuItem) => submenuItem.section[0].slug === "/" + section);
                if( dataSubMenu?.length > 0){
                    interlinking = <InterlinkingSection data={dataSubMenu} />
                };
            }
        }
    }

    if (section_about && Object.keys(section_about) && Object.keys(section_about).length > 0) {
        if (section_about && Object.keys(section_about) && Object.keys(section_about).length > 0) {
            if (section_about?.category?.name && section_about.category.name.length > 0) {
                titleSection = (
                    <TitleSection
                        name={`ÚLTIMAS NOTICIAS SOBRE ${section_about.category.name}`}
                        tag="h1"
                        center={true}
                    />
                );
            }
        }
       
    }

    // Humor sections
    const itemsHumor = dataSection.map((item, key) => {
        return <ItemHumor data={item} key={key} />;
    });
    const showItemsHumor = <div className="d-flex flex-wrap flex-row">{itemsHumor}</div>;

    return (
        <>
            {titleSection}
            {interlinking}
            <main className="container__columns">
                <article className="col__content">
                    {showItemsHumor}
                    {dataSection?.length < 30 ? null : lastPage ? null : <ShowMoreButton loading={loading} onClick={handler} />}
                    <MgId />
                </article>

                <article className="col__content offset-313">
                        <SlotAds type="Middle" data={adsPage?.ads?.data} />
                        <Moreseen data={analyticsSeccion} />
                        <div className="sticky-viewability">
                            <SlotAds type={"Middle2_Right"} data={adsPage?.ads?.data} />
                        </div>
                </article>
            </main>
        </>
    );
};

export {MainContentHumor};
