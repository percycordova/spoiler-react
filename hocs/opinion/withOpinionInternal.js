import fetchApi from "services/api/fetchApi";

const WithOpinionInternal = (WrapperComponent) => {
    const hocComponent = ({ ...props }) => <WrapperComponent {...props} />;

    hocComponent.getInitialProps = async ({ query, res }) => {
        const { article } = query;
        const articleSlug = article.join("/");
        if (article.length <= 5) {
            const slug = `/opinion/${articleSlug}`;
            const article_internal = await fetchApi("article", { slug: slug })
            if (article_internal?.article && article_internal.article.data?.authors?.length > 0) {
                const article_author = article_internal.article.data.authors[0]
                const articlesByAuthor = await fetchApi("articles", {
                    author_id: article_author?._id,
                    limit: 5,
                    sitemap: true
                })
                const typePage = "internal_note";
                return { article_internal, articlesByAuthor, typePage }
            }
        }
        return {
            error: 404,
            typePage: "otros"
        };
    };

    return hocComponent;
};

export default WithOpinionInternal;
