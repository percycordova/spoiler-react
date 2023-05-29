import SETTING_QUERY from "graphql/queries/setting.query";

/* 
    @route: /api/search/setting
    @params: {
        client: aṕolloClient,
        params: {
            type: String
        }
    }
*/
export const getSetting = ({ params }) => {
    if (params.type) {
        /* DEFINO LOS VALORES OBLIGATORIOS */
        const variables = {
            _type: params.type,
        };
        const query = SETTING_QUERY;
        return { query, variables };
    } else {
        throw Error("parameter type is required");
    }
};
