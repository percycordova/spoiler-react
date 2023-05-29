import fetchApi from "services/api/fetchApi";
// import { portadas } from "util/portadas";

const WithHoroscopo = (WrapperComponent) => {
    const hocComponent = ({ ...props }) => <WrapperComponent {...props} />;

    hocComponent.getInitialProps = async function () {

        const section_about =
            await fetchApi("category", {
                slug: 'horoscopo',
            });
        if (section_about.category) {
            // const idPortada = portadas[section];

            const horoscopo = await fetchApi("spotlight", {
                id: "600863edae8c7e50bd428c64",
            });
            const horoscopo_mas = await fetchApi("spotlight", {
                id: "61c9f4daa68f07752c4c01d1",
            });
            const horoscopo_chino = await fetchApi("spotlight", {
                id: "61c9f50eeb931a2def5d1ff5",
            });
            const portada_horoscopo = await fetchApi("spotlight", {
                id: "5f3b40d8d7208a1d8951fc22",
            });
            const spotlight_general = await fetchApi("spotlight", {
                id: "61f9538bcae98460f475007a",
            });
            const analyticsSeccion = await fetchApi("external", {
                limit: 6,
                category_slug: 'horoscopo',
            });

            const section_data = await fetchApi("articles", {
                limit: 50,
                order_by: "update_date",
                view: "section",
                category_slug: "horoscopo",
            });

            // const portada = await fetchApi("spotlight", {
            //     id: idPortada,
            // });
            const typePage = "section";
            return {
                typePage,
                spotlight_general,
                section_data,
                section_about,
                analyticsSeccion,
                horoscopo,
                horoscopo_mas,
                horoscopo_chino,
                portada_horoscopo,
            };
        }
        return {
            error: 404,
            typePage: "otros"
        };
    };

    return hocComponent;
};

export default WithHoroscopo;
