export const getArticlesList = async (entity, params) => {
    try {
        const queryParams = Object.keys(params).map(paramKey => `${paramKey}=${params[paramKey]}`).join("&")
        const fetchEndpoint = process.env.SITE_DOMAIN_URL;
        const fetchRoute = `${fetchEndpoint}/api/search/${entity}?${queryParams}`;
        const dataLastNews = await fetch(fetchRoute).then(res => res.json())
            .then(res => res[entity].data, error => ([]));
        return dataLastNews;
    } catch (err) {
        console.log("error", err);
    }
};
