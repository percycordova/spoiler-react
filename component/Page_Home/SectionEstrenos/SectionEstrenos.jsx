import { useRef } from "react";
import styles from "../SectionEstrenos/SectionEstrenos.module.scss";
import { Title } from "component/global/Title/Title";

const SectionEstrenos = ({sectionTitle,linkTo}) => {
    
    return (
        <div className={styles["sectionEstrenos"]}>

            <div className={styles["container__estrenos"]}>

            <div className={`${styles["sectionGrid__head"]}`}
                    style={{
                        borderBottom: `1px solid #fff`,
                    }}
                >
                    <Title title={sectionTitle} type="h2" />
                    <p className={`${styles["sectionGrid__head__separator"]}`}>{}</p>
                    <a href={linkTo} className={`${styles["sectionGrid__head__linkTo"]} extend-link`}>
                        VER MÁS
                    </a>

                </div>
            

                <div className={styles["grid__estrenos"]}>
                    <div>
                        <img src="/static/prueba_spoiler/estrenos_01.png" alt="cinema_01" className={styles["estrenos__img"]}/>
                        <p className={styles["title__poster"]}>Fecha de estreno: 20 de Abril</p>
                        <div className={styles["logo__empresas__online"]}>
                            <img src="/static/icon/logo_cine.svg" alt="cinema" className={styles[""]}/>
                            <img src="/static/icon/logo_netflix.svg" alt="netflix" className={styles[""]}/>
                            <img src="/static/icon/logo_hbo.svg" alt="hbo" className={styles[""]}/>
                        </div>
                    </div>
                    <div>
                        <img src="/static/prueba_spoiler/estrenos_02.png" alt="cinema_02" className={styles["estrenos__img"]}/>
                        <p className={styles["title__poster"]}>Fecha de estreno: 20 de Abril</p>
                        <div className={styles["logo__empresas__online"]}>
                            <img src="/static/icon/logo_cine.svg" alt="cinema" className={styles[""]}/>
                            <img src="/static/icon/logo_paramount.svg" alt="paramount" className={styles[""]}/>
                            <img src="/static/icon/logo_star.svg" alt="star" className={styles[""]}/>
                        </div>
                    </div>
                    <div>
                        <img src="/static/prueba_spoiler/estrenos_03.png" alt="cinema_03" className={styles["estrenos__img"]}/>
                        <p className={styles["title__poster"]}>Fecha de estreno: 20 de Abril</p>
                        <div className={styles["logo__empresas__online"]}>
                            <img src="/static/icon/logo_cine.svg" alt="cinema" className={styles[""]}/>
                            <img src="/static/icon/logo_paramount.svg" alt="paramount" className={styles[""]}/>
                            <img src="/static/icon/logo_disney.svg" alt="disney" className={styles[""]}/>
                            <img src="/static/icon/logo_star.svg" alt="star" className={styles[""]}/>
                        </div>
                    </div>
                    <div>
                        <img src="/static/prueba_spoiler/estrenos_04.png" alt="cinema_04" className={styles["estrenos__img"]}/>
                        <p className={styles["title__poster"]}>Fecha de estreno: 20 de Abril</p>
                        <div className={styles["logo__empresas__online"]}>
                            <img src="/static/icon/logo_netflix.svg" alt="netflix" className={styles[""]}/>
                            <img src="/static/icon/logo_disney.svg" alt="disney" className={styles[""]}/>
                        </div>
                    </div>
                    <div>
                        <img src="/static/prueba_spoiler/estrenos_05.png" alt="cinema_05" className={styles["estrenos__img"]}/>
                        <p className={styles["title__poster"]}>Fecha de estreno: 20 de Abril</p>
                        <div className={styles["logo__empresas__online"]}>
                            <img src="/static/icon/logo_cine.svg" alt="cine" className={styles[""]}/>
                            <img src="/static/icon/logo_anime.svg" alt="anime" className={styles[""]}/>
                        </div>
                    </div>
                    <div>
                        <img src="/static/prueba_spoiler/estrenos_06.png" alt="cinema_06" className={styles["estrenos__img"]}/>
                        <p className={styles["title__poster"]}>Fecha de estreno: 20 de Abril</p>
                        <div className={styles["logo__empresas__online"]}>
                            <img src="/static/icon/logo_disney.svg" alt="disney" className={styles[""]}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SectionEstrenos;
