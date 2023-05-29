import Head from 'next/head'
import withVideoInternal from 'hocs/videos/withVideoInternal';
import { Layout } from "Layouts/Layouts";
import { MainContent } from "component/Page_Internal/MainContent/MainContent";
import { RecommendedNotesByBrand } from "component/Page_Internal/RecommendedNotesByBrand/RecommendedNotesByBrand";
import { Moreseen } from "component/Page_Section/Moreseen/Moreseen";
import { SlotAds } from "component/global/AdsManager/SlotAds";
import { OffersToday } from "component/Page_Internal/OffersToday/OffersToday";
import { SchemaCronos } from "component/global/Schemas/SchemaCronos";
import { Opta } from 'component/global/Opta/Opta';
import { ListSmallSection } from 'component/Page_Section/ListSmallSection/ListSmallSection';
import { useEffect, useState } from 'react';
import { ShowMoreButton } from 'component/global/ShowMoreButton/ShowMoreButton';
import { ListSection } from 'component/Page_Section/ListSection/ListSection';
import { TitleSection } from 'component/global/TitleSection/TitleSection';
import { getArticlesList } from 'helpers/lastNews/lastNews';
import { MgId } from 'component/global/Mgid';

const Internal = (props) => {
    const {
        meta,
        article_internal,
        interlinkingData,
        footerMenu,
        mainMenu,
        topicsMenu,
        recommendedNotesByBrand,
        liveBlogPosting,
        analyticsInternal,
        section_data,
        section_about,
        adsPage,
        firstAlertWeb,
        secondAlertWeb,
        data_offers_today,
    } = props;
    const limit = 24;
    const sectionArticles = section_data?.articles?.data.slice(0, limit) || [];
    let [dataSection, setDataSection] = useState(sectionArticles);
    const [lastPage, setLastPage] = useState(sectionArticles.length < limit);
    const [numPage, setNumPage] = useState(1);
    const [loading, setLoading] = useState(false);
    let liveIsFeaturedTrue = [];
    let dataGrid = null;
    let dataList;
    let showSection = null;
    let mainIdArticle;
    let sectionSlug = meta?.data?.categories?.find(cat => cat.slug.startsWith("/videos")).slug || section_about?.category?.slug;
    sectionSlug = sectionSlug.replace("/", "");

    function handler() {
        const num = numPage + 1
        setNumPage(num)
    }
    useEffect(async function () {
        if (numPage > 1) {
            setLoading(true);
            const params = { category_slug: sectionSlug, limit, page: numPage, order_by: "update_date" };
            let data = await getArticlesList("articles", params);
            setLastPage(data.length < limit)
            data = data.filter(article => !dataSection.some(data => data._id == article._id));
            setDataSection([
                ...dataSection,
                ...data
            ]);
            setLoading(false);
        }
        return () => null
    }, [numPage])



    if (liveBlogPosting && liveBlogPosting?.live && Object.keys(liveBlogPosting?.live) && Object.keys(liveBlogPosting?.live).length) {
        const { live } = liveBlogPosting;
        if (live && Object.keys(live) && Object.keys(live).length) {
            // contentInlive = live
            liveIsFeaturedTrue = live?.data?.content_elements?.filter((item) => item?.is_featured === true);
        }
    }
    mainIdArticle = article_internal?.article?._id;
    dataSection = dataSection.filter(item => item._id !== mainIdArticle)

    if (article_internal?.article?.data?.categories?.length > 0) {
        const { categories } = article_internal.article.data
        const slugSection = categories[0].slug;
        const firstCategories = categories[0].slug.split("/")[1];
        const titleMostViewed = categories.find((item) => item.slug.endsWith(firstCategories))?.name || categories[0].name;
        showSection = <TitleSection name={titleMostViewed} tag="span" update_date={article_internal?.article?.update_date} href={slugSection} />;
    }

    let data_schema_cronos;
    if (!!article_internal?.article?.schemas?.length) {
        data_schema_cronos = <SchemaCronos data={article_internal.article.schemas} />;
    }
    const isOpta = article_internal?.article?.data?.validate_elements?.opta || false;
    if (dataSection && Object.keys(dataSection) && Object.keys(dataSection).length > 0) {
        dataGrid = dataSection.slice(0, 6);
        dataList = dataSection.slice(6, dataSection.length);
    }

    if (dataSection?.length === section_data?.articles?.total) {
        setShowButton(false);
    }

    return (
        <Layout
            adsPage={adsPage}
            data={meta}
            dataHeader={mainMenu}
            dataFooter={footerMenu}
            topicMenu={topicsMenu}
            prebid={"INTERNA"}
            firstAlertWeb={firstAlertWeb}
            secondAlertWeb={secondAlertWeb}
            internal={true}
        >
            {data_schema_cronos}
            <Head>{isOpta && <Opta />}</Head>

            <>
                <div className="container__columns">
                    <main className="col__content">
                        <article>
                            {showSection}
                            <MainContent
                                data={article_internal?.article}
                                interlinkingData={interlinkingData}
                                liveBlogPosting={liveBlogPosting}
                                adsPage={adsPage}
                                dataLiveIsFeatured={liveIsFeaturedTrue}
                                type='video'
                            />
                            <div className="mobile-visible">
                                <ListSmallSection data={dataGrid} />
                                <OffersToday offersToday={data_offers_today?.data || []} shuffle={true} />
                            </div>
                            <ListSection data={dataList} adsPage={adsPage} />
                            {!lastPage && <ShowMoreButton loading={loading} onClick={handler} />}
                            <MgId />
                        </article>
                    </main>
                    <aside className="col__content offset-313 desktop-visible">
                        <ListSmallSection data={dataGrid} />

                        <SlotAds type="Middle" data={adsPage?.ads?.data} />
                        <div className="content_Moreseen">
                            <Moreseen data={analyticsInternal} />
                        </div>
                        <RecommendedNotesByBrand data={recommendedNotesByBrand} />
                        <div className="desktop-visible">
                            <OffersToday offersToday={data_offers_today?.data || []} shuffle={false} />
                        </div>
                        <div className="sticky-viewability">
                            <SlotAds type="Middle2_Right" data={adsPage?.ads?.data} />
                        </div>
                    </aside>
                </div>
            </>
        </Layout>
    );
};

export default withVideoInternal(Internal);
