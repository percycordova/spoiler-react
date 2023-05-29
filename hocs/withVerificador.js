import fetchApi from "services/api/fetchApi";

const WithVerificador = (WrapperComponent) => {
    const hocComponent = ({ ...props }) => <WrapperComponent {...props} />;

    hocComponent.getInitialProps = async ({ query, asPath }) => {


        const section_about = await fetchApi("category", {
            slug: "verificador",
        });
        if (section_about.category) {
            const section_data = await fetchApi("articles", {
                limit: 25,
                order_by: "update_date",
                view: "section",
                category_slug: "verificador",
            });
            const typePage = "section_especial"
            return {
                typePage,
                section_data,
                section_about,
            };
        }
        return {
            error: 404,
            typePage: "otros"
        };
    };

    return hocComponent;
};

export default WithVerificador;
