import WithTag from "hocs/withTag";
import { Layout } from "Layouts/Layouts";
import { MainTagContent } from "component/Page_Tag/MainTagContent";

const Tag = (props) => {
    const { analyticsGral, adsPage, footerMenu, mainMenu, topicsMenu, tag_data, tag_about, firstAlertWeb } = props;
    return (
        <Layout
            adsPage={adsPage}
            dataHeader={mainMenu}
            dataFooter={footerMenu}
            topicMenu={topicsMenu}
            firstAlertWeb={firstAlertWeb}
            prebid={"TAG"}
            data={tag_about?.tag}
            listNote={tag_data?.articles?.data || []}
        >
            <MainTagContent data={tag_data} about={tag_about} analyticsGral={analyticsGral} adsPage={adsPage} />
        </Layout>
    );
};

export default WithTag(Tag);
