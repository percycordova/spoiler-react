import MENU_QUERY from "graphql/queries/menu.query";
export const getMenu = ({ params }) => {
    if (params.id) {
        /* DEFINO LOS VALORES OBLIGATORIOS */
        const variables = {
            _id: params.id,
        };
        const query = MENU_QUERY;

        return { variables, query };
    } else {
        throw Error("parameter id is required");
    }

};