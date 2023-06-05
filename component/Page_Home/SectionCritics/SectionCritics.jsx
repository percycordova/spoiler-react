import { Title } from "component/global/Title/Title";
import styles from "../SectionCritics/SectionCritics.module.scss";
import MediumCard from "../MediumCard/MediumCard";

const SectionCritics = ({ data, sectionTitle, linkTo = "#", nColumnas = 2 }) => {
    let dataDefault = [];
    let dataMain = {};
    let listItem;

    if (data?.articles?.data && data?.articles?.data?.length > 0) {
        dataDefault = data?.articles?.data;
    }
    if (dataDefault.length > 0) {
        dataMain = dataDefault[0];

        listItem = (
            <div className={`${styles["listItem__container"]}`}>
                <div className={`n-columnas ${styles["listItem__container-secondaryCard"]}`}>
                    {dataDefault.map((item, index) => {
                        const title = item?.title ?? "";
                        const imgUrl =
                            item?.data?.multimedia.find((media) => media.type == "image")?.path ||
                            item?.data?.multimedia.find((media) => media.type == "video")?.data?.image_path ||
                            "/static/images/placeholder.png";
                        const urlNote = item?.slug ?? "";
                        return (
                            <MediumCard
                                urlNote={dataMain?.slug}
                                altImg={dataMain?.data?.multimedia[0]?.data?.title}
                                urlImg={imgUrl}
                                title={title}
                                key={`${title}-${index}`}
                            />
                        );
                    })}
                    <style jsx>{`
                        @media (min-width: 769px) {
                            .n-columnas {
                                display: grid;
                                grid-template-columns: repeat(${nColumnas}, 1fr);
                            }
                        }
                    `}</style>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className={`${styles["container__sectionGrid"]}`}>
                <div
                    className={`${styles["sectionGrid__head"]}`}
                    style={{
                        borderBottom: `1px solid #333333`,
                    }}
                >
                    <Title title={sectionTitle} type="h2" />
                    <p className={`${styles["sectionGrid__head__separator"]}`}>{}</p>
                    <a href={linkTo} className={`${styles["sectionGrid__head__linkTo"]} extend-link`}>
                        VER MÁS
                    </a>
                </div>
                {listItem}
            </div>
        </>
    );
};

export default SectionCritics;
