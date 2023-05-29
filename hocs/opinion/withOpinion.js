import fetchApi from "services/api/fetchApi";

const WithOpinion = (WrapperComponent) => {
    const hocComponent = ({ ...props }) => <WrapperComponent {...props} />;

    hocComponent.getInitialProps = async ({ query, req }) => {
        const columnists = await fetchApi("spotlight", {
            id: "611199493b673143812ee415",
        });

        const editorial = await fetchApi("articles", {
            limit: 1,
            tag_slug: "editorial",
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
        const typePage = "section";
        return {
            typePage,
            columnists,
            editorial: editorial?.articles?.data,
            latestHumor: {
                latestMolina: latestMolina?.articles?.data[0],
                latestCarlincatura: latestCarlincatura?.articles?.data[0],
                latestHeduardicidios: latestHeduardicidios?.articles?.data[0],
            },
        };
    };

    return hocComponent;
};

export default WithOpinion;
