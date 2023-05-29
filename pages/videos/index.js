import { useEffect, useState } from "react";
import { Layout } from "Layouts/Layouts";
import { Spotlight } from "component/Page_Section/Spotlight/Spotlight";
import { ListSmallSection } from "component/Page_Section/ListSmallSection/ListSmallSection";
import { TitleSection } from "component/global/TitleSection/TitleSection";
import { InterlinkingSection } from "component/Page_Section/InterlinkingSection/InterlinkingSection";
import { SlotAds } from "component/global/AdsManager/SlotAds";
import { Moreseen } from "component/Page_Section/Moreseen/Moreseen";
import { ShowMoreButton } from "component/global/ShowMoreButton/ShowMoreButton";
import WithVideos from "hocs/videos/withVideos";
import { GridVideos } from "component/Page_Videos/GridVideos/GridVideos";
import { getArticlesList } from "helpers/lastNews/lastNews";
import { MgId } from "component/global/Mgid";

const Videos = (props) => {
    const { section_data, section_about, analyticsSeccion, adsPage, footerMenu, mainMenu, topicsMenu, subMenuSpotlight } = props;
    const limit = 24;
    const sectionArticles = section_data?.articles?.data.slice(0, limit) || [];
    const [dataSection, setDataSection] = useState(sectionArticles);
    const [numPage, setNumPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [lastPage, setLastPage] = useState(sectionArticles.length < limit);

    let titleSection = null;
    let dataSpotlight = null;
    let dataGrid = null;
    let dataList;
    let interlinking = null;
    let isDataSubMnu = false;
    const handler = function () {
        const num = numPage + 1
        setNumPage(num)
    }
    useEffect(async function () {
        if (numPage > 1) {
            setLoading(true);
            const params = { category_slug: "videos", limit, page: numPage, order_by: "update_date" };
            let data = await getArticlesList("articles", params);
            setLastPage(data.length < limit)
            data = data.filter(article => !dataSection.some(data => data.slug == article.slug));
            setDataSection([
                ...dataSection,
                ...data
            ]);
            setLoading(false);
        }
        return () => null
    }, [numPage])

    if (subMenuSpotlight && Object.keys(subMenuSpotlight) && Object.keys(subMenuSpotlight).length) {
        const { spotlight } = subMenuSpotlight; if (spotlight && Object.keys(spotlight) && Object.keys(spotlight).length) {
            const { data } = spotlight; if (data && Object.keys(data) && Object.keys(data).length) {
                const { section_item_link } = data; let dataSubMenu = section_item_link?.filter((submenuItem) => submenuItem.section[0].slug === "/" + "videos");
                isDataSubMnu = dataSubMenu?.length > 0 ? true : false;
                interlinking = isDataSubMnu ? <InterlinkingSection data={dataSubMenu} /> : <div style={{ padding: "10px" }}></div>;
            }
        }
    }

    if (section_about && Object.keys(section_about) && Object.keys(section_about).length > 0) {
        if (section_about?.category?.name && section_about.category.name.length > 0) {
            titleSection = <TitleSection name={`ÚLTIMAS NOTICIAS SOBRE ${section_about.category.name}`} tag="h1" center={true} />;
        }
    }
    if (dataSection && Object.keys(dataSection) && Object.keys(dataSection).length > 0) {
        const newData = [...dataSection];
        const firstItem = newData.slice(0, 1)[0];
        const isVideo = firstItem?.data?.multimedia?.some((media) => media.type === "video");
        const imageItem =
            firstItem?.data?.multimedia?.find((media) => media.type === "image")?.path ||
            firstItem?.data?.multimedia?.find((media) => media.type == "video")?.data?.image_path ||
            process.env.IMAGE_DEFAULT_1250x735;
        dataSpotlight = {
            image: imageItem,
            slug: firstItem?.slug,
            title: firstItem?.title,
            isVideo,
        };
        dataGrid = dataSection.slice(1, 6);
        dataList = dataSection.slice(6, dataSection.length);
    }

    return (
        <Layout
            dataHeader={mainMenu}
            dataFooter={footerMenu}
            hideAdTop
            topicMenu={topicsMenu}
            prebid={"SECTION"}
            adsPage={adsPage}
            data={section_about?.category}
            listNote={section_data?.articles?.data || []}
        >
            {titleSection}
            {interlinking}
            <div className="container__columns">
                <article className="col__content">
                    <Spotlight data={dataSpotlight} />
                    <SlotAds type="Strip" data={adsPage?.ads?.data} />
                </article>
                <article className="col__content offset-313">
                    <ListSmallSection data={dataGrid} />
                </article>
            </div>
            {<div className="container__columns">
                <article className="col__content">
                    <GridVideos data={dataList} adsPage={adsPage} />
                    {!lastPage && <ShowMoreButton loading={loading} onClick={handler} />}
                    <MgId />
                </article>
                <article className="col__content offset-313">
                    <SlotAds type="Middle" data={adsPage?.ads?.data} />
                    <Moreseen data={analyticsSeccion} />
                    <div className="sticky-viewability">
                        <SlotAds type={"Middle2_Right"} data={adsPage?.ads?.data} />
                    </div>
                </article>
            </div>}
        </Layout>
    );
};

export default WithVideos(Videos);
