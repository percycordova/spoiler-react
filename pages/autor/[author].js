
import WithAuthorInternal from "hocs/author/withAuthorInternal";
import { Layout } from "Layouts/Layouts";
import React, { useEffect, useState } from "react";
import { AuthorInternalComp } from "component/Page_Author_Internal/AuthorInternal/AuthorInternal";
import { getArticlesList } from "helpers/lastNews/lastNews";

const AuthorInternal = (props) => {
    const {
        footerMenu,
        topicsMenu,
        mainMenu,
        newsAtemporal,
        analyticsGral,
        adsPage,
        perPage,
        firstAlertWeb,
        author_data,
        articlesByAuthor,
    } = props;

    const limit = 30;
    const authorId = author_data.author?._id;
    const authorArticles = articlesByAuthor?.articles?.data.slice(0, limit) || [];
    const [dataAuthor, setDataAuthor] = useState(authorArticles);
    const [lastPage, setLastPage] = useState(authorArticles.length < limit);
    const [numPage, setNumPage] = useState(1);
    const [loading, setLoading] = useState(false);




    const showMore = () => {
        setNumPage(numPage + 1);
    };

    useEffect(async function () {
        if (numPage > 1) {
            setLoading(true);
            const params = { author_id: authorId, limit, page: numPage, order_by: "update_date" };
            let data = await getArticlesList("articles", params);
            setLastPage(data.length < limit)
            data = data.filter(article => !dataAuthor.some(data => data._id == article._id));
            setDataAuthor([
                ...dataAuthor,
                ...data
            ])
            setLoading(false);
        }
        return () => null
    }, [numPage]);;

    return (
        <Layout
            adsPage={adsPage}
            data={author_data?.author}
            articlesData={dataAuthor}
            dataHeader={mainMenu}
            dataFooter={footerMenu}
            topicMenu={topicsMenu}
            firstAlertWeb={firstAlertWeb}
            prebid={"INTERNA"}
        >
            <AuthorInternalComp
                author={author_data?.author || []}
                articlesData={dataAuthor}
                showMore={showMore}
                loading={loading}
                showBtn={lastPage}
                newsAtemporal={newsAtemporal}
                analyticsGral={analyticsGral}
                adsPage={adsPage}
            />
        </Layout>
    );
};

export default WithAuthorInternal(AuthorInternal);
