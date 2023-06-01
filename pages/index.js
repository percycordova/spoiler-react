import { Layout } from "Layouts/Layouts";

import MainGrid from "component/Page_Home/MainGrid/MainGrid";
import { SlotAds } from "component/global/AdsManager/SlotAds";
import SectionGrid from "component/Page_Home/SectionGrid/SectionGrid";
import SectionGridDegradedColors from "component/Page_Home/SectionGridDegradedColors/SectionGridDegradedColors";
import SectionGridDoubleTypeSmall from "component/Page_Home/SectionGridDoubleTypeSmall/SectionGridDoubleTypeSmall";
import SectionGridLastNews from "component/Page_Home/SectionGridLastNews";
import WithHome from "hocs/withHome";

const Home = (props) => {
    const { metaSite, adsPage, mainMenu, footerMenu, topicsMenu, newsWorld, newsSociety, newsSports, newsMovies, newsLast, mainGrid } = props;
    return (
        <Layout
            data={metaSite}
            hideAdTop
            dataHeader={mainMenu}
            dataFooter={footerMenu}
            topicMenu={topicsMenu}
            prebid={"HOME"}
            adsPage={adsPage}
            listNote={[]}
        >
            
        </Layout >
    );
};

export default WithHome(Home);
