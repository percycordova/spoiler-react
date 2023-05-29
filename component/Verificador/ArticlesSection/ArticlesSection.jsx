import React, { useState, useEffect } from "react";
import style from "./ArticlesSection.module.scss";
import { ItemGrillaArticles } from "../ListItem/ListItem";
import { getArticlesList } from "helpers/lastNews/lastNews";

const ArticlesSection = ({ data }) => {
    const limit = 24;
    const sectionArticles = data?.articles?.data.slice(0, limit) || [];
    const [dataSection, setDataSection] = useState(sectionArticles);
    const [numPage, setNumPage] = useState(1);
    const [lastPage, setLastPage] = useState(sectionArticles.length < limit);

    function handler() {
        const num = numPage + 1
        setNumPage(num)
    }
    useEffect(async function () {
        if (numPage > 1) {
            const params = { category_slug: "verificador", limit, page: numPage, order_by: "update_date" };
            let data = await getArticlesList("articles", params);
            setLastPage(data.length < limit)
            data = data.filter(article => !dataSection.some(data => data._id == article._id));
            setDataSection([
                ...dataSection,
                ...data
            ]);
        }
        return () => null
    }, [numPage])

    const listSection = dataSection.slice(1, dataSection.length);

    let showList = listSection?.map((item, index) => <ItemGrillaArticles item={item} key={index} />);

    return (
            <div className={style["wrapper-articles"]}>
                <h1 className={style["wrapper-title"]}>NOTICIAS</h1>
                <div className={style["content-article"]}>{showList}</div>
                {!lastPage && (
                    <button className={style["btn-minisite"]} onClick={handler} aria-label="button more views article">
                        Ver más
                    </button>
                )}
            </div>
    );
};

export { ArticlesSection };
