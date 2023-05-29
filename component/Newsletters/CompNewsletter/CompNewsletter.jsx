import { FormNewsLetter } from "component/Newsletters/FormNewsLetter";
import style from "component/Newsletters/CompNewsletter/CompNewsletter.module.scss";

const CompNewsletter = ({showPopup, dataCategories, itemNewsletters, handleTogglePopup, selectInput }) => {
  return (
    <div className={style["wrapper-newsletters"]}>
        {showPopup ? (
          <FormNewsLetter data={dataCategories} />
        ) : (
          <>
            <h1 className={style["title-page"]}>NEWSLETTERS</h1>
            <h2 className={style["sub-title-page"]}>Selecciona los boletines que quieras recibir y sé el primero en enterarte de todos los acontecimientos.</h2>
            <div className={style["wrapper-list-newsletters"]}>{itemNewsletters}</div>

            <button
              onClick={handleTogglePopup}
              style={{
                backgroundColor: "#ff0b0b",
                color: "#FFF",
                padding: "10px",
                border: "none",
                display: "table",
                borderRadius: "4px",
                margin: "30px auto 0",
                fontSize: "14px"
              }}
            >
              Suscribirme
            </button>
            {selectInput && (
              <div>
                Recuerde seleccionar uno o más temas de interés para suscribirse
              </div>
            )}
          </>
        )}
      </div>
  )
}

export { CompNewsletter };