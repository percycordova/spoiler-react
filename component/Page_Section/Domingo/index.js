
import React, { useState } from "react";
import fetchApi from "services/api/fetchApi";
import { Spotlight } from "component/Page_Section/Spotlight/Spotlight";
import { SecondaryItemsGrid } from "component/Page_Section/Domingo/SecondaryItemsGrid/SecondaryItemsGrid";
import { TrendingTopic } from "component/Page_Section/Domingo/TrendingTopic/TrendingTopic";
import { SectionGridElement } from "component/Page_Section/Domingo/SectionGridElement/SectionGridElement";
import { ListSection } from "component/Page_Section/ListSection/ListSection";
import { ShowMoreButton } from "component/global/ShowMoreButton/ShowMoreButton";
import { Moreseen } from "component/Page_Section/Moreseen/Moreseen";
import { SlotAds } from "component/global/AdsManager/SlotAds";
import style from "./Domingo.module.scss";
import { MgId } from "component/global/Mgid";

const DomingoPage = ({
        analyticsGral,
        mainSpotlight, 
        domingoData,
        trendingTopic,
        authorDomingo,
        authorArticle,
        tagEntrevistaDomingo,
        molina,
        tagEnFoco,
        printedDomingo,
        adsPage
        }
    ) => {

        const [articlesDomingo, setArticlesDomingo] = useState(domingoData?.articles?.data || []);
        const [numPage, setNumPage] = useState(2);
        const [loading, setLoading] = useState(false);

        let dataSpotlight = null;
        let showButton = true;
        let secondaryItems = null;
        let authorData = null;

        if (mainSpotlight && Object.keys(mainSpotlight) && Object.keys(mainSpotlight).length > 0) {
            const { spotlight } = mainSpotlight;
            const { data } = spotlight;
            const { cover_item } = data;

            if (cover_item.length > 0) {
                const firstItem = cover_item.slice(0, 1)[0];
                const imageItem = firstItem?.image?.url || process.env.IMAGE_DEFAULT_1250x735;
                dataSpotlight = {
                    image: imageItem,
                    slug: firstItem?.url,
                    title: firstItem?.title,
                };
                secondaryItems = cover_item.slice(1, 4);
            }
        }

        if (authorDomingo && authorArticle && Object.keys(authorDomingo).length > 0 && Object.keys(authorArticle).length > 0) {
            authorData = {
                ...authorDomingo,
                ...authorArticle,
            };
        }
        {
            const metadataColumnist = {
                slug: "/domingo",
                type: "section",
                name: "Domingo",
                site: {
                    _id: "libero",
                    name: "La República",
                    domain: "https://larepublica.pe",
                    __typename: "SiteType",
                },
                metadata_seo: {
                    keywords: "Autor",
                    seo_title: "Domingo",
                    seo_description: "Domingo",
                    __typename: "MetadataSeoType",
                },
                metadata: [
                    { key: "censored", value: "0", __typename: "MetadataType" },
                    { key: "sponsored", value: null, __typename: "MetadataType" },
                    { key: "color", value: null, __typename: "MetadataType" },
                    { key: "logo", value: null, __typename: "MetadataType" },
                    { key: "logo_thumb", value: null, __typename: "MetadataType" },
                ],
                __typename: "CategoryType",
            };

            if (domingoData && Object.keys(domingoData) && Object.keys(domingoData).length) {
                if (articlesDomingo?.length === domingoData?.articles?.data.total) {
                    showButton = false;
                }
            }

            const handle = async () => {
                setNumPage(numPage + 1);
                setLoading(true);

                if (domingoData?.articles?.data.length > 0) {
                    let newData = await fetchApi("articles", {
                        limit: 24,
                        order_by: "update_date",
                        category_slug: "domingo",
                        page: numPage,
                    });

                    const newArticles = newData?.articles?.data.filter((newArticle) => {
                        const validateItem = articlesDomingo.some((article) => article?.slug === newArticle?.slug);
                        return !validateItem;
                    });

                    if (newArticles.length > 0) {
                        fetch(`${process.env.SITE_DOMAIN_URL}/comscoreview.txt?token=${Math.floor(Math.random() * 500000) + 1}`)
                            .then((response) => {
                                if (!response.ok) throw Error(response.status);
                                return response;
                            })
                            .catch((error) => console.log(error));
                        setArticlesDomingo([...articlesDomingo, ...newArticles]);
                    }
                }

                setLoading(false);
            };

            return (
                <>
                    <div className="container__columns">
                        <div className="col__content">
                            <Spotlight data={dataSpotlight} bigTitle={true} />
                            <SecondaryItemsGrid data={secondaryItems} />
                            <TrendingTopic data={trendingTopic?.articles?.data[0]} />
                        </div>
                        <div className="col__content offset-313">
                            <SlotAds data={adsPage?.ads?.data} type="Middle2_Right" />
                        </div>
                    </div>
                    <div className={style.gridDomingo}>
                        <SectionGridElement content="columnistas" dataSection={authorData} title="Columnistas" />
                        <SectionGridElement content="entrevistas" dataSection={tagEntrevistaDomingo?.articles?.data[0]} title="Entrevistas" />
                        <SectionGridElement content="molina" dataSection={molina?.articles?.data[0]} title="Molina" />
                    </div>
                    <div className="container__columns">
                        <div className="col__content">
                            <SectionGridElement
                                content="enFoco"
                                dataSection={tagEnFoco?.articles?.data[0]}
                                title="En Foco"
                                tall={true}
                                seeMore={false}
                            />
                        </div>
                        <div className="col__content offset-313">
                            <SectionGridElement
                                content="portada"
                                dataSection={printedDomingo?.printeds?.data[0]}
                                title="Portada"
                                tall={true}
                                seeMore={false}
                            />
                        </div>
                    </div>
                    <div className="container__columns">
                        <div className="col__content">
                            <ListSection data={articlesDomingo} adsPage={adsPage} />
                            {showButton && <ShowMoreButton loading={loading} onClick={handle} />}
                            <MgId />
                        </div>
                        <div className="col__content offset-313">
                            <div className="offset-308">
                                <SlotAds data={adsPage?.ads?.data} type="Middle" />
                            </div>
                            <Moreseen data={analyticsGral} />
                            <div className="sticky-viewability">
                                <SlotAds data={adsPage?.ads?.data} type="Middle2_Right" />
                            </div> 
                        </div>
                    </div>
                </>
            );
        };
    }
export { DomingoPage };
