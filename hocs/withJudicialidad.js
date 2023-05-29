import fetchApi from "services/api/fetchApi";
import { portadas } from "util/portadas";

const WithJudicialidad = (WrapperComponent) => {
    const hocComponent = ({ ...props }) => <WrapperComponent {...props} />;

    hocComponent.getInitialProps = async ({ query, asPath }) => {

        const section = "judicialidad"
        const slug = section + (query.slug ? `/${query.slug}` : "");

        const section_about =
            await fetchApi("category", {
                slug: slug
            });
        if (section_about.category) {
            // const idPortada = portadas['judicialidad'];

            const analyticsSeccion = await fetchApi("external", {
                limit: 6,
                category_slug: section,
            });

            const section_data = await fetchApi("articles", {
                limit: 24,
                order_by: "update_date",
                view: "section",
                category_slug: slug
            });
            // const portada = await fetchApi("spotlight", {
            //     id: idPortada,
            // });
            const portada = {}
            const typePage = "section";
            return {
                typePage,
                section_data,
                section_about,
                analyticsSeccion,
                portada,
            };
        }
        return {
            error: 404,
            typePage: "otros"
        };
    };

    return hocComponent;
};

export default WithJudicialidad;
