import ALL_ADS_QUERY from "graphql/queries/ads.query";
export const getAds = ({ params }) => {
    if (params.limit) {
        /* DEFINO LOS VALORES OBLIGATORIOS */
        const variables = {
            _limit: parseInt(params.limit),
        };
        const query = ALL_ADS_QUERY
        return { variables, query };
    } else {
        throw Error("parameter limit is required");
    }
};