import TAG_QUERY from "graphql/queries/tag.query";
import TAGS_QUERY from "graphql/queries/allTags.query";

export const getTag = ({ params }) => {
    if (params.slug) {
        /* DEFINO LOS VALORES OBLIGATORIOS */
        const variables = {
            tagSlug: params.slug ? "/tag/" + params.slug : "",
        };
        // console.log("queryParams:::::::::::::::::::::::", queryParams);
        const query = TAG_QUERY;
        return { query, variables };
    } else {
        throw Error("parameter slug is required");
    }
};
export const getTags = ({ params }) => {
    if (params.limit) {
        /* DEFINO LOS VALORES OBLIGATORIOS */
        const variables = {
            _limit: parseInt(params.limit),
        };
        // console.log("queryParams:::::::::::::::::::::::", queryParams);
        const query = TAGS_QUERY
        // console.log("query:::::::::::::::", query);
        return { query, variables };
    } else {
        throw Error("parameter slug is required");
    }
};
