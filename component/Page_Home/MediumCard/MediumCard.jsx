import { colorSection } from "../../../util/colorSection";
import styles from "../MediumCard/MediumCard.module.scss";
import resizePrototype from "../../../util/resizePrototype";

const newResize = new resizePrototype();

const MediumCard = ({ sectionName = "", altImg = "", urlImg = "/static/images/placeholder.png", title = "", urlNote = "" }) => {
  const showSection = (
    <h3
      className={` ${styles["mediumCard__section"]}`}
      style={{
        backgroundColor: colorSection(sectionName),
        display: "inline-flex",
        color: "white",
        padding: "4px 12px",
        borderRadius: "2px",
        marginBottom: "8px",
      }}
    >
      {sectionName}
    </h3>
  );
  return (
    <div className={`${styles["mediumCard__container"]} extend-link--outside`}>
      <img className={`${styles["mediumCard__image"]}`} src={newResize.resizeWapa(urlImg, 430, 329)} alt={altImg} />
      <section className={`${styles["mediumCard__content"]}`}>
        {sectionName && showSection}
        <a className={`${styles["mediumCard__title--anchor"]} extend-link`} href={urlNote}>
          <h2 className={styles["mediumCard__title"]}>{title}</h2>
        </a>
      </section>
    </div>
  );
};

export default MediumCard;
