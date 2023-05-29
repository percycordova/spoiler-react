import SPOTLIGHT_QUERY from "graphql/queries/spotlight.query";
/* import PostQueryApi from "services/api/postQueryApi"; */
/* 
    @route: /api/search/spotlight&id={params.id}
    @params: {
        client: aṕolloClient,
        params: {
            id: String
        }
    }
*/
export const getSpotlight = ({ params }) => {
    if (params.id) {
        /* DEFINO LOS VALORES OBLIGATORIOS */
        const variables = {
            spotlightId: params.id,
            site: params.site
        };
        const query = SPOTLIGHT_QUERY;
        return { query, variables };
    } else {
        throw Error("parameter id is required");
    }
};