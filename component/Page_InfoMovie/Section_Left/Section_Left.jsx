import styles from "./Section_left.module.scss";

const SectionLeft = () => {
  return (
    <section className={styles["containerInfo_left"]}>
      <img src="/static/prueba_spoiler/info_left.png" alt="" />
      <h5 className={styles["containerInfo_ratings"]}>Ratings:</h5>
      <div className={styles["container_iconStars"]}>
        <img src="/static/prueba_spoiler/FA.svg" alt="" />
        <img src="/static/prueba_spoiler/stars.svg" alt="" />
      </div>
      <div className={styles["container_iconStars"]}>
        <img src="/static/prueba_spoiler/IMDB.svg" alt="" />
        <img src="/static/prueba_spoiler/stars.svg" alt="" />
      </div>
      <div className={styles["container_iconStars"]}>
        <img src="/static/prueba_spoiler/RT.svg" alt="" />
        <img src="/static/prueba_spoiler/stars.svg" alt="" />
      </div>
      <div className={styles["container_titleInfo"]} style={{ marginTop: "30px" }}>
        <p>Fecha de estreno:</p> <p>23 de Marzo de 2023</p>
      </div>
      <div className={styles["container_titleInfo"]}>
        <p>Duración: </p> <p>2h 49m</p>
      </div>
      <div className={styles["container_titleInfo"]}>
        <p>Director: </p> <p>Chad Stahelski</p>
      </div>
      <div className={styles["container_titleInfo"]}>
        <p>País de origen: </p> <p>Estados Unidos</p>
      </div>
      <div className={styles["container_titleInfo"]}>
        <p>Género: </p> <p>Acción, Aventura, Suspenso</p>
      </div>
    </section>
  );
};

export default SectionLeft;
