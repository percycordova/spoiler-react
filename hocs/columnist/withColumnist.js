import fetchApi from "services/api/fetchApi";

const WithColumnist = (WrappedComponent) => {
    const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

    hocComponent.getInitialProps = async ({ query }) => {
        const authors = await fetchApi("authors", {
            type: "columnist",
            limit: 20,
        });

        if (authors?.authors?.data?.length === 0) {
            return {
                error: 404,
                typePage: "otros"
            };
        }
        const newsAtemporal = await fetchApi("spotlight", {
            id: "636bd600dc704f08c155f811",
        });
        const columnists = await fetchApi("spotlight", {
            id: "611199493b673143812ee415",
        });
        const analyticsGral = await fetchApi("external", {
            limit: 30,
        });
        const typePage = "section"
        return {
            typePage,
            authors,
            newsAtemporal,
            analyticsGral,
            columnists,
        };
    };
    return hocComponent;
};

export default WithColumnist;
