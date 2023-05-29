import PODCASTS from "graphql/queries/podcasts.query";


export const getPodcasts = ({ params }) => {
    const variables = {
        _limit: parseInt(params.limit),
        _orderField: params.order_by || "",
    };

    const query = PODCASTS;
    return { query, variables };
};