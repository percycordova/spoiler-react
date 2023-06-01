import { memoized, memoizedArticle, memoizedLive } from "services/cache/memoized";
import { getData } from "services/graphql/getData";

/* 
    @params:
        entity: (ads. article, artices, author, authors, category, tag, spotlght, menu, setting, meta, external)
        params: ...others params (params used for query)
*/

const fetchApi = (entity, params, client) => {
    function getDataResult(query) {
        const dataApi = getData(query, client)
        return dataApi.result;
    }

    let cache;
    if (entity == "article") {
        cache = memoizedArticle
    } else if (entity == "live") { 
        cache = memoizedLive
    } else {
        cache = memoized
    }
    const query = { entity, ...params };
    if (!cache.has([JSON.stringify(query)])) {
        const promiseData = getDataResult(query)
        cache(JSON.stringify(query), promiseData)
    }
    return cache.get([JSON.stringify(query)])
};
export default fetchApi;
