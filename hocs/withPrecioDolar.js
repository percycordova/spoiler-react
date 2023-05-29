import fetchApi from "services/api/fetchApi";
import { portadas } from "util/portadas";

const WithPrecioDolar = (WrapperComponent) => {
    const hocComponent = ({ ...props }) => <WrapperComponent {...props} />;

    hocComponent.getInitialProps = async () => {

        // const slug_article = asPath + "/";
        const section = "economia"
        const slug = `economia/precio-del-dolar`

        const section_about =
            await fetchApi("category", {
                slug: slug,
            });
        if (section_about.category) {
            const idPortada = portadas[section];

            const precio_dolar = await fetchApi("spotlight", {
                id: "5fb6967d85db384e9933ba99",
            });

            const spotlight_general = await fetchApi("spotlight", {
                id: "61f9538bcae98460f475007a",
            });
            const analyticsSeccion = await fetchApi("external", {
                limit: 6,
                category_slug: slug,
            });

            const section_data = await fetchApi("articles", {
                limit: 50,
                order_by: "update_date",
                view: "section",
                category_slug: slug,
            });
            const portada = await fetchApi("spotlight", {
                id: idPortada,
            });
            const typePage = "section";
            return {
                typePage,
                spotlight_general,
                section_data,
                section_about,
                analyticsSeccion,
                portada,
                precio_dolar
            };
        }
        return {
            error: 404,
            typePage: "otros"
        };
    };

    return hocComponent;
};

export default WithPrecioDolar;
