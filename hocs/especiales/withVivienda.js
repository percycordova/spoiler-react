import fetchApi from "services/api/fetchApi";

export const WithVivienda = (WrappedComponent) => {
    const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

    hocComponent.getInitialProps = async function () {
        const section_about = await fetchApi("category", { slug: "metro-cuadrado" });
        const main_slider = await fetchApi("spotlight", { id: "640214c08b166150564f6963" });
        const main_articles = await fetchApi("articles", { category_slug: "vivienda", view: "section", limit: 5 });
        const automatic_block_first = await fetchApi("spotlight", { id: "63ed61b47831280cbc5367cf" });
        const automatic_block_second = await fetchApi("spotlight", { id: "63ed61dfb56a69050d5e1fc5" });

        const typePage = "section";
        return {
            section_about,
            main_slider,
            main_articles,
            automatic_block_first,
            automatic_block_second,
            typePage,
        };
    };

    return hocComponent;
};

export default WithVivienda;
