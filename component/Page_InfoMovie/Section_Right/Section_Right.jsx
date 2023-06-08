import { useRef } from "react";
import styles from "./Section_Right.module.scss";

const SectionRight = () => {
  const ref = useRef();
  const moveLeft = () => {
    ref.current.scrollLeft -= 108;
  };
  const moveRight = () => {
    ref.current.scrollLeft += 108;
  };
  return (
    <div className={styles["containerInfo_right"]}>
      <h1 className={styles["containerInfo_title"]}>John Wick 4</h1>
      <h5 className={styles["containerInfo_titleOriginal"]}>Título original: John Wick: Chapter 4</h5>
      <h4 className={styles["containerInfo_titleTrailer"]}>Sinopsis</h4>
      <p className={styles["containerInfo_description"]}>
        John Wick (Keanu Reeves) descubre un camino para derrotar a la Alta Mesa. Pero para poder ganar su libertad, Wick deberá enfrentarse
        a un nuevo rival con poderosas alianzas en todo el mundo, capaz de convertir a viejos amigos en enemigos.
      </p>
      <h4 className={styles["containerInfo_titleTrailer"]}>Trailer</h4>
      <div className={styles["containerTrailer"]}>
        <iframe
          className={styles["responsive-iframe"]}
          width="632"
          height="356"
          src="https://www.youtube.com/embed/gtlg3P2lrts"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <h4 className={styles["containerInfo_titleTrailer"]}>Reparto</h4>
      <div className={styles["container__actors"]}>
        <div className={styles["container__img"]} ref={ref}>
          <div className={styles["card_actor"]}>
            <img src="static/prueba_spoiler/actor_1.png" alt="" />
            <p className={styles["card_actor__name"]}> Keanu Reeves</p>
            <p className={styles["card_actor__character"]}> John Wick</p>
          </div>
          <div className={styles["card_actor"]}>
            <img src="static/prueba_spoiler/actor_2.png" alt="" />
            <p className={styles["card_actor__name"]}>Scott Adkins</p>
            <p className={styles["card_actor__character"]}>Killa</p>
          </div>
          <div className={styles["card_actor"]}>
            <img src="static/prueba_spoiler/actor_3.png" alt="" />
            <p className={styles["card_actor__name"]}>Lance Reddick</p>
            <p className={styles["card_actor__character"]}>Charon</p>
          </div>
          <div className={styles["card_actor"]}>
            <img src="static/prueba_spoiler/actor_4.png" alt="" />
            <p className={styles["card_actor__name"]}>Donnie Yen</p>
            <p className={styles["card_actor__character"]}>Caine</p>
          </div>
          <div className={styles["card_actor"]}>
            <img src="static/prueba_spoiler/actor_5.png" alt="" />
            <p className={styles["card_actor__name"]}>Bill Skarsgård</p>
            <p className={styles["card_actor__character"]}>Caine</p>
          </div>
          <div className={styles["card_actor"]}>
            <img src="static/prueba_spoiler/actor_6.png" alt="" />
            <p className={styles["card_actor__name"]}>Rina Sawayama</p>
            <p className={styles["card_actor__character"]}>Akira</p>
          </div>
          <div className={styles["card_actor"]}>
            <img src="static/prueba_spoiler/actor_3.png" alt="" />
            <p className={styles["card_actor__name"]}>Lance Reddick</p>
            <p className={styles["card_actor__character"]}>Charon</p>
          </div>
          <div className={styles["card_actor"]}>
            <img src="static/prueba_spoiler/actor_4.png" alt="" />
            <p className={styles["card_actor__name"]}>Donnie Yen</p>
            <p className={styles["card_actor__character"]}>Caine</p>
          </div>
        </div>

        <img src="static/icon/arrow_right.svg" alt="" className={styles["arrowRight"]} onClick={moveRight} />
        <img src="static/icon/arrow_left.svg" alt="" className={styles["arrowLeft"]} onClick={moveLeft} />
      </div>
    </div>
  );
};

export default SectionRight;
