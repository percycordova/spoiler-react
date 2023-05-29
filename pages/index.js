import WithHome from "hocs/withHome";
import { Layout } from "Layouts/Layouts";
import { SectionGrid } from "component/Page_Home/SectionGrid/SectionGrid";
import { ColumnistsGrid } from "component/Page_Home/ColumnistsGrid/ColumnistsGrid";
import { LrMasGrid } from "component/Page_Home/LrMasGrid/LrMasGrid";
import { PodcastsGrid } from "component/Page_Home/PodcastsGrid/PodcastsGrid";
import { HumorGrid } from "component/Page_Home/HumorGrid/HumorGrid";
import { SuplementGrid } from "component/Page_Home/SuplementGrid/SuplementGrid";
import { AnnouncementsGrid } from "component/Page_Home/AnnouncementsGrid/AnnouncementsGrid";
import { MainSpotlight } from "component/Page_Home/MainSpotlight/MainSpotlight";
import { PrintEdition } from "component/Page_Home/PrintEdition/PrintEdition";
import { ThreeColumnContainer } from "component/Page_Home/ThreeColumnContainer/ThreeColumnContainer";
import { InterestContent } from "component/Page_Home/InterestContent/InterestContent";
import { MoreSeenGrid } from "component/Page_Home/MoreSeenGrid/MoreSeenGrid";
import { MoreLaRepublicaGrid } from "component/Page_Home/MoreLaRepublicaGrid/MoreLaRepublicaGrid";
import { SpecialBranding } from "component/Page_Home/SpecialBranding/SpecialBranding";
import { SlotAds } from "component/global/AdsManager/SlotAds";
import { VerticalSectionGrid } from "component/Page_Home/VerticalSectionGrid/VerticalSectionGrid";
import { SectionGridJudicialidad } from "component/Page_Judicialidad/SectionGridJudicialidad/SectionGridJudicialidad";

const Home = (props) => {
    const {
        metaSite,
        footerMenu,
        mainMenu,
        topicsMenu,
        firstAlertWeb,
        secondAlertWeb,
        inlive,
        adsPage,
        listNote
    } = props;
    let adsPageFiltered = {
        ads: {
            data: adsPage.ads?.data?.filter(adItem=>adItem.tag!=="Sticky")
        }
    }
    return (
        <Layout
            data={metaSite}
            hideAdTop
            dataHeader={mainMenu}
            dataFooter={footerMenu}
            topicMenu={topicsMenu}
            firstAlertWeb={firstAlertWeb}
            secondAlertWeb={secondAlertWeb}
            inlive={inlive}
            prebid={"HOME"}
            adsPage={adsPageFiltered}
            listNote={listNote?.articles?.data || []}
        >


            {/* <SlotAds type="webhome_inline8" data={adsPage?.ads?.data} /> */}
        </Layout>
    );
};

export default WithHome(Home);
