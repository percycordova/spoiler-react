import { useRef } from "react";
import styles from "../SectionPostersSlider/SectionPosters.module.scss";
import { Title } from "component/global/Title/Title";

const SectionPosters = ({
    background = "linear-gradient(180deg, rgba(9, 255, 255, 0.6) 0%, rgba(0, 0, 0, 0.8) 100%)",
    idClass = 1,
    linkTo = "#",
    urlImg=""
}) => {
    const ref = useRef();
    const moveLeft = () => {
        ref.current.scrollLeft -= 156;
    };
    const moveRight = () => {
        ref.current.scrollLeft += 156;
    };
    return (
        <section className={styles["sectionPosters"]}>
            <div
                className={`${styles["sectionGrid__head"]}`}
            >
                <Title title="MIRA EN" type="h2" />
                <img src={urlImg} alt="" />
                <p className={`${styles["sectionGrid__head__separator"]}`}>{}</p>
                <a href={linkTo} className={`${styles["sectionGrid__head__linkTo"]} extend-link`}>
                    VER MÁS
                </a>
            </div>
            <div className={`container__sectionPosters-${idClass}`}>
                <div className={styles["container__img"]} ref={ref}>
                    <img src="static/prueba_spoiler/test_01.png" alt="" />
                    <img src="static/prueba_spoiler/test_02.png" alt="" />
                    <img src="static/prueba_spoiler/test_03.png" alt="" />
                    <img src="static/prueba_spoiler/test_04.png" alt="" />
                    <img src="static/prueba_spoiler/test_05.png" alt="" />
                    <img src="static/prueba_spoiler/test_06.png" alt="" />
                    <img src="static/prueba_spoiler/test_01.png" alt="" />
                    <img src="static/prueba_spoiler/test_02.png" alt="" />
                    <img src="static/prueba_spoiler/test_03.png" alt="" />
                    <img src="static/prueba_spoiler/test_04.png" alt="" />
                    <img src="static/prueba_spoiler/test_05.png" alt="" />
                    <img src="static/prueba_spoiler/test_06.png" alt="" />
                </div>

                <img src="static/icon/arrow_right.svg" alt="" className={styles["arrowRight"]} onClick={moveRight} />
                <img src="static/icon/arrow_left.svg" alt="" className={styles["arrowLeft"]} onClick={moveLeft} />

                <style>
                    {`
            .container__sectionPosters-${idClass} {
                background:${background} ;
                padding: 24px;
                position: relative;            
            }
            `}
                </style>
            </div>
        </section>
    );
};

export default SectionPosters;
