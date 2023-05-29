import { FormInputCheckboxNewsLetter } from "component/Newsletters/FormInputCheckboxNewsLetter/FormInputCheckboxNewsLetter"
import style from "component/Newsletters/ItemNewsletter/ItemNewsletter.module.scss";

const ItemNewsletter = ({ category, image, title, horario, tagname, color, key }) => {
  return (
    <div key={key}>
            <div
              className={style["wrapper-card"]}
              style={{
                padding: "16px 11px",
                textAlign: "center",
                "--colorcard": `${color}`,
                borderRadius: "5px",
                maxWidth: "301px"
              }}
            >
              <div>
                <img
                  src={image}
                  alt={title || "Newsletter LR"}
                  height="125"
                  width="100%"
                  className={style["card__image"]}
                />
                <h2
                  className={style["card-tagname"]}
                  style={{
                    fontSize: "1.7rem",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    margin: "14px 0"
                  }}
                >
                  {tagname ? tagname : "Noticias"}
                </h2>
                <p className={style["card-title"]}>{title || ""}</p>
                <span
                  className={style["card-horario"]}
                  style={{ fontSize: "1.3rem","--colorcard": `${color}` }}
                >
                  {horario || ""}
                </span>
              </div>
              <FormInputCheckboxNewsLetter category={category} />
            </div>
          </div>
  )
}

export { ItemNewsletter }