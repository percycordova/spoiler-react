import fetchApi from "services/api/fetchApi";

const WithHumorInternal = (WrapperComponent) => {

    const hocComponent = ({ ...props }) => <WrapperComponent {...props} />;

    hocComponent.getInitialProps = async ({ query, pathname }) => {
        let humorData = null;
        let slug;
        const { article } = query;
        const articleSlug = article.join("/");
        const section = pathname.split('/')[1]


        if (article.length <= 4) {
            slug = `/${section}/${articleSlug}`;

            const article_internal = await fetchApi("article", { slug: slug || "", });
            if (article_internal.article) {
                humorData = await fetchApi("articles", {
                    category_slug: section,
                    limit: 27,
                });
            
            const listNote = await fetchApi("articles", {
                limit: 50,
                order_by: "update_date",
                view: "section",
                category_slug: section,
            });
            const typePage = "internal_note_humor";
            return { article_internal, humorData, typePage,listNote };
            }
        }
        return { error: 404,
            typePage: "otros" };
    }
    return hocComponent;
};
export default WithHumorInternal;
