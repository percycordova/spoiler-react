import INTERNAL_QUERY from "graphql/queries/article.query";
import ALL_ARTICLES_QUERY from "graphql/queries/listArticles.query";
import LIST_ARTICLES_QUERY_SITEMAPS from "graphql/queries/listArticlesSitemap.query";
import LIST_ARTICLES_QUERY_SITEMAPS_LIGHT from "graphql/queries/listArticlesSitemapLight.query";
import { convertirFecha } from "util/convertirFecha";
export const getArticle = ({ params }) => {
    const query = INTERNAL_QUERY
    if (params.slug) {
        /* DEFINO LOS VALORES OBLIGATORIOS */
        const variables = {
            internalSlug: params.slug,
        };
        return { variables, query };
    } else {
        throw Error("Parameter slug is required");
    }
};

export const getArticles = ({ params }) => {
    if (params.limit) {
        let variables = {
            _limit: parseInt(params.limit),
            _orderField: params.order_by || "",
            _categorySlug: params.category_slug ? "/" + params.category_slug : "",
            _view: params.view,
            _tagSlug: params.tag_slug ? "/tag/" + params.tag_slug : "",
            _authorId: params.author_id || "",
            _page: parseInt(params.page) || 1,
            _dateLimit: params.date
        };
        let query = ALL_ARTICLES_QUERY;
        if (params.date) {
            const date = new Date();
            const nowDate = convertirFecha(date, "iso-sitemap");
            variables._dateEnd = nowDate;
        }
        if (params.sitemap) {
            query = LIST_ARTICLES_QUERY_SITEMAPS;
        }
        if (params.sitemap_light) {
            query = LIST_ARTICLES_QUERY_SITEMAPS_LIGHT;
        }


        return { variables, query };
    } else {
        throw Error("Parameter limit is required");
    }
};
