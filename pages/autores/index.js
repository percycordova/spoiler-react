import WithAuthor from "hocs/author/withAuthor";
import { Layout } from "Layouts/Layouts";
import React, { useEffect, useState } from "react";
import { MainAuthors } from "component/Page_Authors/MainAuthors/MainAuthors";
import { getArticlesList } from "helpers/lastNews/lastNews";

const metadataAuthor = {
    slug: "/autor",
    type: "section",
    name: "Autor",
    site: {
        _id: "larepublica",
        name: "La República",
        domain: "https://larepublica.pe",
        __typename: "SiteType",
    },
    metadata_seo: {
        keywords: "Columnista",
        seo_description:
            "Conoce todos los periodistas, autores y escritores de todas las noticias de la actualidad de Perú y el mundo en La República.",
        seo_title: "Periodistas y Autores de las últimas noticias | La República",
        __typename: "MetadataSeoType",
    },
    metadata: [
        { key: "censored", value: "0", __typename: "MetadataType" },
        { key: "sponsored", value: null, __typename: "MetadataType" },
        { key: "color", value: null, __typename: "MetadataType" },
        { key: "logo", value: null, __typename: "MetadataType" },
        { key: "logo_thumb", value: null, __typename: "MetadataType" },
    ],
    __typename: "CategoryType",
};

const Authors = (props) => {
    const { footerMenu, topicsMenu, mainMenu, authors, analyticsSeccion, adsPage, perPage, firstAlertWeb, newsAtemporal, analyticsGral } =
        props;

    const limit = 20;
    const authorArticles = authors?.authors?.data?.slice(0, limit) || [];
    const [authorsData, setAuthorsData] = useState(authorArticles);
    const [lastPage, setLastPage] = useState(authorArticles.length < limit);
    const [numPage, setNumPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const showMore = () => {
        setNumPage(numPage + 1);
    };

    useEffect(async function () {
        if (numPage > 1) {
            setLoading(true);
            const params = { limit, page: numPage, order_by: "update_date" };
            let data = await getArticlesList("authors", params);
            setLastPage(data.length < limit);
            data = data.filter(author => !authorsData.some(data => data._id == author._id));
            setAuthorsData([
                ...authorsData,
                ...data
            ]);
            setLoading(false);
        }
        return () => null
    }, [numPage]);

    return (
        <Layout
            data={metadataAuthor}
            dataHeader={mainMenu}
            dataFooter={footerMenu}
            topicMenu={topicsMenu}
            firstAlertWeb={firstAlertWeb}
            adsPage={adsPage}
            prebid={"SECTION"}
        >
            <MainAuthors
                authorsData={authorsData}
                loading={loading}
                showBtn={lastPage}
                showMore={showMore}
                dataAds={adsPage?.ads?.data}
                analyticsGral={analyticsGral}
            />
        </Layout>
    );
};

export default WithAuthor(Authors);
