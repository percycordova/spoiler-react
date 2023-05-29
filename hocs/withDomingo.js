import fetchApi from "services/api/fetchApi";

const WithDomingo = (WrapperComponent) => {
    const hocComponent = ({ ...props }) => <WrapperComponent {...props} />;

    hocComponent.getInitialProps = async ({ query }) => {
        let authorArticle = null;

        const mainSpotlight = await fetchApi("spotlight", {
            id: "5f3aaf1b369e781df84e3d32",
        });

        const domingoData = await fetchApi("articles", {
            limit: 16,
            order_by: "update_date",
            category_slug: "domingo",
        });

        const analyticsGral = await fetchApi("external", {
            limit: 30,
        });

        const trendingTopic = await fetchApi("articles", {
            limit: 1,
            order_by: "update_date",
            tag_slug: "trending-topic",
        });

        const authorDomingo = await fetchApi("author", {
            slug: "autor/jose-rodriguez-elizondo",
        });

        const authorId = authorDomingo.author?._id;

        if (authorDomingo.author?._id) {
            authorArticle = await fetchApi("articles", {
                author_id: authorId,
                limit: 1,
            });
        }

        const tagEntrevistaDomingo = await fetchApi("articles", {
            limit: 1,
            order_by: "update_date",
            tag_slug: "entrevistas-domingo",
        });

        const molina = await fetchApi("articles", {
            category_slug: "molina",
            limit: 1,
        });

        const tagEnFoco = await fetchApi("articles", {
            limit: 1,
            order_by: "update_date",
            tag_slug: "en-foco",
        });

        const printedDomingo = await fetchApi("printeds", {
            category_slug: "/domingo",
            limit: 1,
        });

        const typePage = "section";

        if (!domingoData) {
            return { error: 404,
                typePage: "otros" };
        }

        return {
            typePage,
            analyticsGral,
            mainSpotlight,
            trendingTopic,
            domingoData,
            authorDomingo,
            authorArticle,
            tagEntrevistaDomingo,
            molina,
            tagEnFoco,
            printedDomingo,
        };
    };

    return hocComponent;
};

export default WithDomingo;
