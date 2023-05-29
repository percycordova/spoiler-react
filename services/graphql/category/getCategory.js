import SECTION_QUERY from "graphql/queries/section.query";
import LIST_SECTIONS from "graphql/queries/allSection.query";
/* import PostQueryApi from "services/api/postQueryApi"; */

/* 
    @route: /api/search/category&slug={params.slug}
    @params: {
        client: aṕolloClient,
        params: {
            slug: String,
        }
    }
*/
export const getCategory = ({ params }) => {
    if (params.slug) {
        /* DEFINO LOS VALORES OBLIGATORIOS */
        const variables = {
            slug: params.slug ? "/" + params.slug : "",
        };
        const query = SECTION_QUERY
        return { variables, query };
    } else {
        throw Error("parameter slug is required");
    }
};

export const getCategories = ({ params }) => {
    if (params.limit) {
        /* DEFINO LOS VALORES OBLIGATORIOS */
        const variables = {
            _limit: parseInt(params.limit),
            _type: "section",
            _parent: null,
        };
        // console.log("queryParams:::::::::::::::::::::::", queryParams);
        const query = LIST_SECTIONS
        return { variables, query };
    } else {
        throw Error("parameter slug is required");
    }
};
