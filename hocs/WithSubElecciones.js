import fetchApi from "services/api/fetchApi";

const WithSubElecciones = (WrapperComponent) => {
    const hocComponent = ({ ...props }) => <WrapperComponent {...props} />;

    hocComponent.getInitialProps = async ({ query, asPath }) => {
        const { subsection } = query;
        let dataSubsection = null

        if (subsection && subsection.length > 0){
            if(subsection === 'informes') {
                dataSubsection = await fetchApi("spotlight", {
                    id: "5f8e124f6f270f071a2e4914"
                });
            }
            if(subsection === 'ultimas-noticias') {
                const notes = await fetchApi("articles", {
                    category_slug: "elecciones",
                    limit: 15,
                });
                const mainSpotlight = await fetchApi("spotlight", {
                    id: "5f8e123147c4ba36d4048225"
                });
                dataSubsection  = {
                    mainSpotlight,
                    notes
                }
            }
        }

        const menuElecciones = await fetchApi("menu", {
            id: "5f8e11cb4aeba433b11537a3"
        });

        const about_elections = await fetchApi("category", {
            slug: "elecciones",
        });
        const typePage = "section_especial"
        return {
            typePage,
            menuElecciones,
            about_elections,
            dataSubsection,
        };
    };

    return hocComponent;
};

export default WithSubElecciones;