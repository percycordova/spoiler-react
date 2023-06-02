import { Layout } from "Layouts/Layouts";
import SectionGrid from "component/Page_Home/SectionGrid/SectionGrid";
import SectionPosters from "component/Page_Home/SectionPostersSlider/SectionPosters";

import WithHome from "hocs/withHome";

const Home = (props) => {
    const { metaSite, adsPage, mainMenu, footerMenu, topicsMenu, newsWorld, newsSociety, newsSports, newsMovies, newsLast, mainGrid } = props;
    console.log("mainGrid", mainGrid);
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
            <div className="container-column-3">
                <SectionGrid data={mainGrid} sectionTitle="DISNEY+" linkTo="" nColumnas={1} />
                <SectionGrid data={mainGrid} sectionTitle="STAR+" linkTo="" nColumnas={1} />
                <SectionGrid data={mainGrid} sectionTitle="PRIME VIDEO" linkTo="" nColumnas={1} />
            </div>
            <SectionPosters idClass={1} urlImg="/static/prueba_spoiler/Disney_logo.svg" />
            <SectionPosters idClass={2} urlImg="/static/prueba_spoiler/Netflix_logo.svg" background="linear-gradient(180deg, rgba(184, 29, 36, 0.6) 0%, rgba(0, 0, 0, 0.7) 100%)" />
            <SectionPosters idClass={4} urlImg="/static/prueba_spoiler/HBO_logo.svg" background="linear-gradient(180deg, rgba(151,30,233, 0.75) 0%, rgba(0, 0, 0, 0.7) 100%)" />
            <SectionPosters idClass={3} urlImg="/static/prueba_spoiler/PrimeVideo_logo.svg"background="linear-gradient(180deg, rgba(0,168, 225, 0.6) 0%, rgba(0, 0, 0, 0.7) 100%)" />
            <div className="container-column-3">
                <SectionGrid data={mainGrid} sectionTitle="NETFLIX" linkTo="" nColumnas={1} />
                <SectionGrid data={mainGrid} sectionTitle="CRUNCHYROLL" linkTo="" nColumnas={1} />
                <SectionGrid data={mainGrid} sectionTitle="LIONSGATE+" linkTo="" nColumnas={1} />
            </div>


        </Layout >
    );
};

export default WithHome(Home);
