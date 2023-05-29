import fetchApi from "services/api/fetchApi";

const WithVerificadorInterna = (WrapperComponent) => {
    const hocComponent = ({ ...props }) => <WrapperComponent {...props} />;

    hocComponent.getInitialProps = async ({ query }) => {


        const { article } = query;
        const slug_article = `/verificador/${article.join("/")}`;

        const article_internal = await fetchApi("article", {
            slug: slug_article || "",
        });
        
        if (article_internal?.article) {
        
        const typePage = "section_especial"
            return {
                typePage,
                article_internal,
            };
        }
        return {
            error: 404,
            typePage: "otros"
        };
    };

    return hocComponent;
};

export default WithVerificadorInterna;
