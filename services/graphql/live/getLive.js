import LIVE_QUERY from "graphql/queries/live.query";

export const getLive = ({ params }) => {
    if (params.slug) {
        /* DEFINO LOS VALORES OBLIGATORIOS */
        const variables = {
            slug: params.slug || "",
        };
        const query = LIVE_QUERY
        return { variables, query };
    } else {
        throw Error("parameter slug is required");
    }
};
