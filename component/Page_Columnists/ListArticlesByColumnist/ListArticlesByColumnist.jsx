import style from "component/Page_Columnists/ListArticlesByColumnist/ListArticlesByColumnist.module.scss";
const ListArticlesByColumnist = ({ data }) => {
    return (
        <div className={style["list-articles-columnist"]}>
            <div className={style["list-articles"]}>
                {data.map((article) => {
                    const articleTitle = article?.title ?? "";
                    const nameColumnnits = article?.data?.authors[0]?.fullname ?? "";
                    const slug = article?.slug ?? "#";
                    return (
                        <div key={article?._id} >
                            <h2 className={style["title-article"]}>
                                <a href={slug}>{articleTitle}</a>
                            </h2>
                            <h3 className={style["name-columnist"]}>{nameColumnnits}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export { ListArticlesByColumnist };