import fetchApi from "services/api/fetchApi";

const WithTag = (WrapperComponent) => {
    const hocComponent = ({ ...props }) => <WrapperComponent {...props} />;

    hocComponent.getInitialProps = async ({ query, apolloClient,req }) => {
        const { tag } = query;
        const tag_about = await fetchApi("tag", {
            slug: tag,
        },apolloClient);
        if (tag_about?.tag) {
            const analyticsSeccion = await fetchApi("external", {
                limit: 30,
            },apolloClient);
            const tag_data = await fetchApi("articles", {
                limit: 50,
                order_by: "update_date",
                tag_slug: tag,
            },apolloClient);
          
            const typePage = "internal_tag"
            return {
                typePage,
                tag_data,
                tag_about,
                analyticsSeccion,
            };
        }
        return { error: 404,
            typePage: "otros" };

    };

    return hocComponent;
};

export default WithTag;
