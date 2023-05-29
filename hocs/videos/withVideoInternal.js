import fetchApi from "services/api/fetchApi";

const withVideoInternal = (WrapperComponent) => {
    const hocComponent = ({ ...props }) => <WrapperComponent {...props} />;

    hocComponent.getInitialProps = async ({ query }) => {

        let liveBlogPosting = null;
        let slug;
        //console.log("slug_article............>>>>", slug_article)
        const { article, section } = query;
        const articleSlug = article.join("/");
        let typePage = "internal_note"
        if (article.length <= 4) {
            slug = `/videos/${section}/${articleSlug}`;
            const subseccion = `videos/${section}`
            const article_internal = await fetchApi("article", {
                slug
            });
            if (article_internal.article) {
                const category__article = article_internal?.article?.data?.categories[0]?.name;
                const title__article = article_internal?.article?.title;
                const meta = { ...article_internal.article, titleMeta: `${title__article} | ${category__article} | La República` };
                const slugInlive = article_internal?.article?.data?.related?.inlive?.slug;
                // tarer informacion del autor y sus ultimos articulos
                const id_author = article_internal?.article?.data?.authors[0]?._id;
                const author_data = article_internal?.article?.data?.authors

                const articlesByAuthor =
                    id_author?.length > 0
                        ? await fetchApi("articles", {
                            author_id: id_author,
                            limit: 5,
                        })
                        : {};
                const recomendedNotesEP = await fetchApi("spotlight", {
                    id: "61f7fa70d82d9e455531b728",
                    site: "elpopular",
                });
                const recomendedNotesWP = await fetchApi("spotlight", {
                    id: "62c326012a91c50c0c469351",
                    site: "wapa",
                });
                const recomendedNotesLB = await fetchApi("spotlight", {
                    id: "61f7faa5d82d9e455531b72a",
                    site: "libero",
                });
                const recomendedNotesLOL = await fetchApi("spotlight", {
                    id: "62f2c4ae05b1f8500a37598e",
                    site: "lol",
                });

                const interlinkingData = await fetchApi("spotlight", {
                    id: "603825201d5dd56e450b720b",
                    site: "larepublica",
                });
                const analyticsInternal = await fetchApi("external", {
                    limit: 30,
                    category_slug: 'videos',
                });

                // console.log("----------analyticsInternal---------", analyticsInternal)
                if (slugInlive && slugInlive.length > 0) {
                    typePage = "internal_note_live"
                    liveBlogPosting = await fetchApi("live", {
                        slug: slugInlive,
                    });
                    //   console.log("----------liveBlogPosting>>>>---------", liveBlogPosting)
                }
                //  console.log("---------->>>>>liveBlogPosting>>>>---------", liveBlogPosting)
                const section_data = await fetchApi("articles", {
                    limit: 50,
                    order_by: "update_date",
                    view: "section",
                    category_slug: subseccion,
                });
                // consumo de api de cuponidad
                const data_offers_today = await fetchApi("third-party", {
                    type: "cuponidad",
                });

                return {
                    typePage,
                    meta,
                    article_internal,
                    interlinkingData,
                    analyticsInternal,
                    liveBlogPosting,
                    author_data,
                    articlesByAuthor,
                    section_data,
                    article,
                    recommendedNotesByBrand: {
                        recomendedNotesLOL,
                        recomendedNotesLB,
                        recomendedNotesWP,
                        recomendedNotesEP,
                    },
                    data_offers_today,
                };
            }
        }
        return {
            error: 404,
        };
    };

    return hocComponent;
};

export default withVideoInternal;
