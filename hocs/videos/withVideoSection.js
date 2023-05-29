import React from 'react'
import fetchApi from 'services/api/fetchApi';

const withVideoSection = (WrappedComponent) => {
    const hocComponent = ({ ...props }) => <WrappedComponent {...props} />

    hocComponent.getInitialProps = async function ({ query }) {
        const { section } = query
        const slug = `videos/${section}`;

        const section_about = await fetchApi("category", {
            slug,
        });
        if (section_about?.category) {
            const typePage = "section";
            const subMenuSpotlight = await fetchApi("spotlight", {
                id: "61f9538bcae98460f475007a",
            });
            const spotlight_general = await fetchApi("spotlight", {
                id: "61f9538bcae98460f475007a",
            });
            const analyticsSeccion = await fetchApi("external", {
                limit: 6,
                category_slug: 'videos',
            });

            const section_data = await fetchApi("articles", {
                limit: 50,
                order_by: "update_date",
                view: "section",
                category_slug: slug,
            });

            return {
                typePage,
                spotlight_general,
                section_data,
                section_about,
                analyticsSeccion,
                subMenuSpotlight,
            };
        }
        return { error: 404 }
    }

    return hocComponent
}
export default withVideoSection