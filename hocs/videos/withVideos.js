import fetchApi from "services/api/fetchApi";

const WithVideos = (WrapperComponent) => {
    const hocComponent = ({ ...props }) => <WrapperComponent {...props} />;

    hocComponent.getInitialProps = async ({ query, asPath }) => {

        const section_about = await fetchApi("category", {
            slug: 'videos'
            });
        if (section_about.category) {
            const subMenuSpotlight = await fetchApi("spotlight", {
                id: "61f9538bcae98460f475007a",
            });
            const spotlight_general = await fetchApi("spotlight", {
                id: "61f9538bcae98460f475007a",
            });
            const analyticsSeccion = await fetchApi("external", {
                limit: 30,
                category_slug: `videos`,
            });
            
            const section_data = await fetchApi("articles", {
                limit: 50,
                order_by: "update_date",
                view: "section",
                category_slug: 'videos',
            });
            
            const typePage = "section"
            return {
                typePage,
                spotlight_general,
                section_data,
                section_about,
                analyticsSeccion,
                subMenuSpotlight,
            };
        }
        return {
            error: 404,
            typePage: "otros"
        };
    };

    return hocComponent;
};

export default WithVideos;
