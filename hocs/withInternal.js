import fetchApi from "services/api/fetchApi";
const WithInternal = (WrapperComponent) => {
    const hocComponent = ({ ...props }) => <WrapperComponent {...props} />;

    hocComponent.getInitialProps = async ({ query, res }) => {

        let liveBlogPosting = null;
        let slug;
        //console.log("slug_article............>>>>", slug_article)
        const { section, article } = query;
        const pageSection = article.length === 1;
        const regExp = /([0-9]\d{4,6})\-.+/;
        const oldNote = pageSection ? regExp.test(article[0]) : false;
        const articleSlug = article.join("/");
        let typePage = "internal_note";
        if (article.length <= 5) {
            if (pageSection && !oldNote) {
                slug = `${section}/${articleSlug}`;

                const section_about = await fetchApi("category", {
                    slug: slug
                });
                if (section_about?.category) {
                    //Es una subsección
                    const spotlight_general = await fetchApi("spotlight", {
                        id: "61f9538bcae98460f475007a",
                    });

                    const section_data = await fetchApi("articles", {
                        limit: 50,
                        order_by: "update_date",
                        view: "section",
                        category_slug: slug,
                    });
                    const analyticsSeccion = await fetchApi("external", {
                        limit: 6,
                        category_slug: section,
                    });
                    typePage = "section";
                    return {
                        typePage,
                        pageSection,
                        analyticsSeccion,
                        section_about,
                        section_data,
                        spotlight_general,
                        article,
                    };
                }
            } else {
                slug = `/${section}/${articleSlug}`;
                const article_internal = await fetchApi("article", {
                    slug: slug || "",
                });
                if (article_internal.article) {
                    if (article_internal.article.redirect) {
                        const { url, code } = article_internal.article.redirect
                        if (url && !url.includes(slug)) {
                            res.writeHead(code || 301, {
                                Location: url,
                            });
                            return res.end();
                        }
                    }

                    const slugInlive = article_internal?.article?.data?.related?.inlive?.slug;
                    // tarer informacion del autor y sus ultimos articulos
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
                        limit: 6,
                        category_slug: section,
                    });
                    const everGreenArticles = await fetchApi("spotlight", {
                        id: "63ed620698e82028a238f718"
                    }).then(function (result) {
                        return result.spotlight.data.section_item.filter(function (articleItem) {
                            return articleItem.section.some((sectionItem) => sectionItem.slug == `/${section}`)
                        })
                    }).catch(() => ([]))
                    if (slugInlive && slugInlive.length > 0) {
                        typePage = "internal_note_live";
                        liveBlogPosting = await fetchApi("live", {
                            slug: slugInlive,
                        });
                        //   console.log("----------liveBlogPosting>>>>---------", liveBlogPosting)
                    }
                    //  console.log("---------->>>>>liveBlogPosting>>>>---------", liveBlogPosting)

                    // consumo de api de cuponidad
                    const data_offers_today = await fetchApi("third-party", {
                        type: "cuponidad",
                    });

                    return {
                        typePage,
                        article_internal,
                        interlinkingData,
                        analyticsInternal,
                        liveBlogPosting,
                        everGreenArticles,
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
        }
        return {
            error: 404,
            typePage: "otros"
        };
    };

    return hocComponent;
};

export default WithInternal;
