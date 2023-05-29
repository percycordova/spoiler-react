import LIST_AUTHORS from "graphql/queries/listAuthors.query";
import AUTHOR_QUERY from "graphql/queries/author.query";


export const getAuthor = ({ params }) => {
    if (params.slug) {
        /* DEFINO LOS VALORES OBLIGATORIOS */
        const variables = {
            _authorSlug: params.slug ? "/" + params.slug : "",
        };
        const query = AUTHOR_QUERY;
        return { variables, query }
    } else {
        throw Error("Parameter slug is required");
    }
};

export const getAuthors = ({ params }) => {
    if (params.limit) {
        /* DEFINO LOS VALORES OBLIGATORIOS */
        const variables = {
            _limit: parseInt(params.limit),
            _page: parseInt(params.page),
            _type: params.type
        };
        const query = LIST_AUTHORS
        return { variables, query };
    } else {
        throw Error("Parameter limit is required");
    }
};
