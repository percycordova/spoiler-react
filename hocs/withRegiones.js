import fetchApi from "services/api/fetchApi";
import fetchContent from "services/api/fetchContent";
import { transform } from "util/transformData";

const WithRegiones = (WrapperComponent) => {
    const hocComponent = ({ ...props }) => <WrapperComponent {...props} />;

    hocComponent.getInitialProps = async ({ query, asPath }) => {
        const dataByRegion = {
            "/internacional": {
                mainSpotlight: "639a1088a630535f8b462406",
            },
            "/peru": {
                mainSpotlight: "64555c3e33559665cf3ec52e",
            },
        };
        const regionData = dataByRegion[asPath];
        if (regionData) {
            const inlive = await fetchApi("spotlight", {
                id: "63862bdbfae1b358c5202a66",
            });
            //Portada principal
            const mainSpotlight = await fetchApi("spotlight", {
                id: regionData.mainSpotlight,
            });
            
            const discover = await fetchApi("spotlight", {
                id: "62d6c37fe77aa4044c4f5d95",
            });
            const lastNews = await fetchApi("articles", {
                category_slug: "",
                limit: 8,
                view: "home",
            });
            const newsPolicy = await fetchApi("articles", {
                category_slug: "politica",
                limit: 4,
                view: "home",
            });
            const newsEconomy = await fetchApi("articles", {
                category_slug: "economia",
                limit: 4,
                view: "home",
            });
            const newsSociety = await fetchApi("articles", {
                category_slug: "sociedad",
                limit: 4,
                view: "home",
            });
            const newsWorld = await fetchApi("articles", {
                category_slug: "mundo",
                limit: 4,
                view: "home",
            });
            const newsSports = await fetchApi("articles", {
                category_slug: "deportes",
                limit: 4,
                view: "home",
            });
            const newsTrends = await fetchApi("articles", {
                category_slug: "tendencias",
                limit: 4,
                view: "home",
            });
            const newsShow = await fetchApi("articles", {
                category_slug: "espectaculos",
                limit: 4,
                view: "home",
            });
            const newsScience = await fetchApi("articles", {
                category_slug: "ciencia",
                limit: 4,
                view: "home",
            });
            const dataLrMas = await fetchApi("spotlight", {
                id: "5ef1558107501049660bef22",
            });
            const columnists = await fetchApi("spotlight", {
                id: "611199493b673143812ee415",
            });
            const interestContent = await fetchApi("spotlight", {
                id: "5f3c048f7fcd2f1bb00b4c42",
            });
            const newsAtemporal = await fetchApi("spotlight", {
                id: "636bd600dc704f08c155f811",
            });
            const moreseen = await fetchApi("external", {
                limit: 30,
            });
            const printedsByRegion = await fetchApi("printeds", {
                category_slug: "/lima,/sur,/norte",
                limit: 3,
            });
            const printedDomingo = await fetchApi("printeds", {
                category_slug: "/domingo",
                limit: 1,
            });
            const podcasts = await fetchApi("podcasts", {
                limit: 3,
            });
            const suplement = await fetchApi("spotlight", {
                id: "60355cc6cc706803833d2f8b",
            });

            const brandingContentHomeSpecial = await fetchApi("spotlight", {
                id: "639cac4dc936b4258813c36f",
            });

            const brandingContentMinisite = await fetchApi("spotlight", {
                id: "61096efc2fd5e86750242bf0",
            });


            const editorial = await fetchApi("articles", {
                limit: 1,
                tag_slug: "editorial",
            });

            const metaSite = await fetchApi("meta", {});

            //List Notes para los shemas del home
            const listNote = await fetchApi("articles", {
                category_slug: "",
                limit: 50,
                view: "home",
            });
            const typePage = "home";
            return {
                typePage,
                listNote,
                metaSite,
                inlive,
                mainSpotlight,
                discover,
                lastNews,
                newsPolicy,
                newsEconomy,
                newsSociety,
                newsSports,
                newsWorld,
                newsShow,
                newsTrends,
                newsScience,
                dataLrMas,
                columnists,
                interestContent,
                newsAtemporal,
                moreseen,
                printedsByRegion,
                printedDomingo,
                podcasts,
                suplement,
                brandingContentHomeSpecial,
                brandingContentMinisite,
                podcasts,
                editorial: editorial?.articles?.data,
            };
        }
        return { error: 500 };
    };

    return hocComponent;
};

export default WithRegiones;
