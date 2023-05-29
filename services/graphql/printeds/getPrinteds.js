import PRINTEDS_QUERY from "graphql/queries/printeds.query";

export const getPrinteds = ({ params }) => {

    if (params?.category_slug) {
        const variables = {
            category_slug: params.category_slug,
            limit: parseInt(params.limit || 1)
        };
        
        const query = PRINTEDS_QUERY;
        return { variables, query }
    } else {
        throw Error("parameter categorySlug is required");
    }
}