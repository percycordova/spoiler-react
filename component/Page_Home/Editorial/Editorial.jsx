import style from "component/Page_Home/Editorial/Editorial.module.scss";

const Editorial = ({ data, large }) => {
    if (data && data[0] && Object.keys(data[0]).length > 0) {
        const editorial = data[0];

        return (
            <div className={`${style["editorial"]} ${large ? style["editorial__large"] : ""}`}>
                <div className={`${style["editorial__content"]}`}>
                    <a href={editorial.slug} className={`${style["editorial__link"]}`}>
                        <h2 className={style["editorial__title"]}>{editorial.title}</h2>
                        <p className={style["editorial__description"]}>{editorial.data.teaser}</p>
                        {
                            large && (
                                <div className={style["editorial__largeButton"]}>Ver más</div>
                            ) || <div className={style["editorial__tag"]}>
                                EDITORIAL
                            </div>
                        }
                    </a>
                    <img height="66"
                        loading="lazy"
                        alt="mohme-editorial"
                        src={"/static/editorial/bg-opinion.webp"}
                        className={`${style["editorial__image"]}`}
                    />
                </div>
            </div >
        );
    }
    return null;
};

export { Editorial };
