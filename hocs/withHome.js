import fetchApi from "services/api/fetchApi";
import fetchContent from "services/api/fetchContent";
import { transform } from "util/transformData";

const WithHome = (WrapperComponent) => {
    const hocComponent = ({ ...props }) => <WrapperComponent {...props} />;

    hocComponent.getInitialProps = async ({ query, asPath }) => {
        const inlive = await fetchApi("spotlight", {
            id: "63862bdbfae1b358c5202a66",
        });

        //Portada con tipo
        const mainSpotlightByType = await fetchApi("spotlight", {
            id: "639a1088a630535f8b462406",
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
        const newsTechnology = await fetchApi("articles", {
            category_slug: "tecnologia",
            limit: 4,
            view: "home",
        });
        const newsMoveAndSeries = await fetchApi("articles", {
            category_slug: "cine-series",
            limit: 4,
            view: "home",
        });
        const lrSostenible = await fetchApi("spotlight", {
            id: "62698a9048801b11950d3111",
            site: "comercial",
        });
        const peruLegal = await fetchApi("spotlight", {
            id: "627e700f883c711a6c47c2d8",
            site: "perulegal",
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
        const latestMolina = await fetchApi("articles", {
            category_slug: "molina",
            limit: 1,
        });
        const latestCarlincatura = await fetchApi("articles", {
            category_slug: "carlincatura",
            limit: 1,
        });
        const latestHeduardicidios = await fetchApi("articles", {
            category_slug: "heduardicidios",
            limit: 1,
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
        const announcementsResp = await fetchContent("https://comercial.glr.pe/api/v1/anuncios");
        const dataAnnouncements = transform(announcementsResp);
        const editorial = await fetchApi("articles", {
            limit: 1,
            tag_slug: "editorial",
        });
        const metaSite = await fetchApi("meta", {});
        const spotlightPrestamype = await fetchApi("spotlight", {
            id: "63c8552efe71af5ac8328235", //prod
            // id: "63cead96e18c873f2d5da6ba", //qa
        });
        const firstAutomaticSpotlight = await fetchApi("spotlight", {
            id: "60d4a53e57608774003cb4f1", //prod
            //    id: "63ced22ad41291520f0a28a8", //qa
        });
        const thirdAutomaticSpotlight = await fetchApi("spotlight", {
            id: "64089deed4b045667827d0ac", //prod
            //    id: "63ced275e18c873f2d5da6cc", //qa
        });
        const secondAutomaticSpotlight = await fetchApi("spotlight", {
            id: "63c85516ceb962231b5592bf", //prod
            //    id: "63ced275e18c873f2d5da6cc", //qa
        });
        //List Notes para los shemas del home
        const listNote = await fetchApi("articles", {
            category_slug: "",
            limit: 50,
            view: "home",
        });
        const newsJudicialidad = await fetchApi("articles", {
            category_slug: "judicialidad",
            limit: 6,
        });
        const typePage = "home";
        return {
            typePage,
            listNote,
            metaSite,
            inlive,
            mainSpotlightByType,
            firstAutomaticSpotlight,
            secondAutomaticSpotlight,
            thirdAutomaticSpotlight,
            lastNews,
            newsPolicy,
            newsEconomy,
            newsSociety,
            newsSports,
            newsWorld,
            newsShow,
            newsTrends,
            newsScience,
            newsTechnology,
            newsMoveAndSeries,
            lrSostenible,
            peruLegal,
            dataLrMas,
            columnists,
            interestContent,
            newsAtemporal,
            moreseen,
            printedsByRegion,
            printedDomingo,
            podcasts,
            latestHumor: {
                latestMolina: latestMolina?.articles?.data[0],
                latestCarlincatura: latestCarlincatura?.articles?.data[0],
                latestHeduardicidios: latestHeduardicidios?.articles?.data[0],
            },
            suplement,
            brandingContentHomeSpecial,
            brandingContentMinisite,
            podcasts,
            dataAnnouncements,
            editorial: editorial?.articles?.data,
            spotlightPrestamype,
            newsJudicialidad
        };
    };

    return hocComponent;
};

export default WithHome;
