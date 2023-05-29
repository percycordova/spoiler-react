import fetchApi from "services/api/fetchApi";

const WithElecciones = (WrapperComponent) => {
    const hocComponent = ({ ...props }) => <WrapperComponent {...props} />;

    hocComponent.getInitialProps = async ({ query, asPath }) => {

        const mainSpotlight = await fetchApi("spotlight", {
            id: "5f8e123147c4ba36d4048225"
        });
        const menuElecciones = await fetchApi("menu", {
            id: "5f8e11cb4aeba433b11537a3"
        });
        const electoralGuide = await fetchApi("spotlight", {
            id: "5f99f7bd1a310c1baf41ed9e"
        });
        const reportsElections = await fetchApi("spotlight", {
            id: "5f8e124f6f270f071a2e4914"
        });
        const relatedTags = await fetchApi("spotlight", {
            id: "631b9f5ae8b3d9727e091702"
        });

        const eleccionesNews = await fetchApi("articles", {
            category_slug: "elecciones",
            limit: 5,
        });

        const verificadorNews = await fetchApi("articles", {
            category_slug: "verificador",
            limit: 5,
        });
        const about_elections = await fetchApi("category", {
            slug: "elecciones",
        });
        const typePage = "section_especial"
        return {
            typePage,
            menuElecciones,
            mainSpotlight,
            electoralGuide,
            reportsElections,
            eleccionesNews,
            relatedTags,
            verificadorNews,
            about_elections
        };
    };

    return hocComponent;
};

export default WithElecciones;
