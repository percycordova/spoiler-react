import fetchApi from "services/api/fetchApi";

const WithLastNews = (WrappedComponent) => {
    const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

    hocComponent.getInitialProps = async ({ query }) => {
        const newsAtemporal = await fetchApi("spotlight", {
            id: "636bd600dc704f08c155f811",
        });

        const analyticsGral = await fetchApi("external", {
            limit: 30,
        });
        const data_lastNews = await fetchApi("articles", {
            limit: 30,
            order_by: "update_date",
            view: "section",
            category_slug: "",
        });
        const typePage = "section"
        return {
            typePage,
            newsAtemporal,
            analyticsGral,
            data_lastNews,
        };
    };
    return hocComponent;
};

export default WithLastNews;
