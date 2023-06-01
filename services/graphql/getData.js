import { getMenu } from "services/graphql/menu/getMenu";
import { getAds } from "services/graphql/ads/getAds";
import { getAuthor, getAuthors } from "services/graphql/author/getAuthors";
import { getCategory, getCategories } from "services/graphql/category/getCategory";
import { getTag, getTags } from "services/graphql/tag/getTag";
import { getPodcasts } from "services/graphql/podcasts/getPodcasts";
import { getArticle, getArticles } from "services/graphql/article/getArticle";
import { getSpotlight } from "services/graphql/spotlight/getSpotlight";
import { getMeta } from "services/graphql/meta/getMeta";
import { getExternal } from "services/graphql/external/getExternal";
import { getLive } from "services/graphql/live/getLive";
import { getSetting } from "services/graphql/setting/getSetting";
import { getThirdParty } from "./thirdParty/getThirdParty";
import apolloClient from "services/apollo-client/apolloClient";
import { getPrinteds } from "services/graphql/printeds/getPrinteds";
import getApiPrinteds from "services/api/getApiPrinteds";



export const getData = (query, client = apolloClient) => {
    const { entity } = query;
    const dataFetching = {
        params: query,
    };
    function runQuery(entity, data) {
        const { variables } = data;
        let apolloResult
        if (entity == "printeds") {
            apolloResult = getApiPrinteds(data)
        } else {
            apolloResult = client.query(data).then(res => res.data).catch(err => console.error("error en la consulta", err))
        }
        return { index: `${entity}-${JSON.stringify(variables)}`, result: apolloResult };
    }
    let data
    /* DETALLE ARTICULO */
    if (entity == "article") {
        data = getArticle(dataFetching);
    }
    /* LISTADO DE ARTICULOS*/
    if (entity == "articles") {
        data = getArticles(dataFetching);
    }
    /* PUBLICIDADES */
    if (entity == "ads") {
        data = getAds(dataFetching);
    }
    /* AUTORES */
    if (entity == "author") {
        data = getAuthor(dataFetching);
    }
    if (entity == "authors") {
        data = getAuthors(dataFetching);
    }


    /* MENU */
    if (entity == "menu") {
        data = getMenu(dataFetching);
    }
    /* CATEGORÍA */
    if (entity == "category") {
        data = getCategory(dataFetching);
    }
    /* CATEGORÍAS */
    if (entity == "categories") {
        data = getCategories(dataFetching);
    }
    /* ETIQUETA */
    if (entity == "tag") {
        data = getTag(dataFetching);
    }
    if (entity == "tags") {
        data = getTags(dataFetching);
    }
    /* SPOTLIGHT */
    if (entity == "spotlight") {
        data = getSpotlight(dataFetching);
    }
    /* SETTING */
    if (entity == "setting") {
        data = getSetting(dataFetching);
    }
    /* META */
    if (entity == "meta") {
        data = getMeta(dataFetching);
    }
    /* CHARBEAT */
    if (entity == "external") {
        data = getExternal(dataFetching);
    }
    /*LIVEBLOGPOSTING*/
    if (entity == "live") {
        data = getLive(dataFetching);
    }
    /* PODCASTS */
    if (entity == "podcasts") {
        data = getPodcasts(dataFetching);
    }
    /* PRINTEDS */
    if (entity == "printeds") {
        data = getPrinteds(dataFetching);
    }
    /* TERCEROS */
    if (entity == "third-party") {
        return getThirdParty(dataFetching)
    }
    if (data) {
        return runQuery(entity, data)
    }
    else {
        throw Error("There is not a valid entity");
    }
};
