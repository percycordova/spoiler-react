import { Layout } from 'Layouts/Layouts'
import { InterlinkingSection } from 'component/Page_Section/InterlinkingSection/InterlinkingSection'
import { ListSmallSection } from 'component/Page_Section/ListSmallSection/ListSmallSection'
import { Moreseen } from 'component/Page_Section/Moreseen/Moreseen'
import { Spotlight } from 'component/Page_Section/Spotlight/Spotlight'
import { GridVideos } from 'component/Page_Videos/GridVideos/GridVideos'
import { SlotAds } from 'component/global/AdsManager/SlotAds'
import { MgId } from 'component/global/Mgid'
import { ShowMoreButton } from 'component/global/ShowMoreButton/ShowMoreButton'
import { TitleSection } from 'component/global/TitleSection/TitleSection'
import { getArticlesList } from 'helpers/lastNews/lastNews'
import withVideoSection from 'hocs/videos/withVideoSection'
import { useEffect, useState } from 'react'

const VideoSection = ({
    section_data,
    section_about,
    analyticsSeccion,
    subMenuSpotlight,
    mainMenu,
    footerMenu,
    topicsMenu,
    adsPage
}) => {
    const limit = 24;
    const sectionArticles = section_data?.articles?.data.slice(0, limit) || [];
    const [dataSection, setDataSection] = useState(sectionArticles);
    const [numPage, setNumPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [lastPage, setLastPage] = useState(sectionArticles.length < limit);
    const handler = function () {
        const num = numPage + 1
        setNumPage(num)
    }
    const sectionSlug = section_about.category.slug

    useEffect(async function () {
        if (numPage > 1) {
            setLoading(true);
            const category_slug = sectionSlug.replace("/", "")
            const params = { category_slug, limit, page: numPage, order_by: "update_date" };
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
    let interlinking,
        dataSpotlight,
        dataGrid,
        dataList;
    if (subMenuSpotlight?.spotlight?.data?.length > 0) {
        const { section_item_link } = subMenuSpotlight.spotlight.data;
        let dataSubMenu = section_item_link?.filter((submenuItem) => submenuItem.section.some(section => section.slug == sectionSlug));
        if (dataSubMenu?.length > 0) {
            interlinking = <InterlinkingSection data={dataSubMenu} />;
        }
    }
    if (dataSection?.length > 0) {
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
            <TitleSection name={`ÚLTIMAS NOTICIAS SOBRE ${section_about.category.name}`} tag="h1" center={true} />
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
            <div className="container__columns">
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
            </div>

        </Layout>
    )
}

export default withVideoSection(VideoSection)