import { Layout } from "Layouts/Layouts";
import { HumorInternalSlider } from "component/Page_Internal/Humor/HumorInternalSlider/HumorInternalSlider";
import { MgId } from "component/global/Mgid";
import { TitleSection } from "component/global/TitleSection/TitleSection";
import WithHumorInternal from "hocs/humor/withHumorInternal";

const InternalCarlincatura = (props) => {
    const {
        article_internal,
        footerMenu,
        mainMenu,
        topicsMenu,
        adsPage,
        firstAlertWeb,
        secondAlertWeb,
        listNote,
        humorData,
    } = props;
    let humorDataByUrl;
    let slider;
    
    if (humorData) {
        humorDataByUrl = humorData
        if (humorDataByUrl && article_internal) {
            slider = <HumorInternalSlider
                selected={article_internal?.article}
                adsPage={adsPage}
                data={humorDataByUrl.articles?.data}
            />
        }
    }

    return (
        <Layout
            adsPage={adsPage}
            data={article_internal?.article}
            dataHeader={mainMenu}
            dataFooter={footerMenu}
            topicMenu={topicsMenu}
            prebid={"INTERNA"}
            firstAlertWeb={firstAlertWeb}
            hideAdTop
            secondAlertWeb={secondAlertWeb}
            internal={true}
            listNote={listNote?.articles?.data || []}
        >
            <TitleSection name={'Carlincatura'} tag="h2" />
            {slider}
            <MgId />
        </Layout>
    );
};

export default WithHumorInternal(InternalCarlincatura);
