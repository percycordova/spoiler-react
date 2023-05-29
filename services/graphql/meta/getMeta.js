import META from "graphql/queries/meta.query";
/* 
    @route: /api/search/meta
    @params: {
        client: aṕolloClient,
    }
*/
export const getMeta = () => {
    const query = META;
    return { query };
};
