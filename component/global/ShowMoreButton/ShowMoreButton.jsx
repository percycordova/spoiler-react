import style from "component/global/ShowMoreButton/ShowMoreButton.module.scss";

const ShowMoreButton =({ loading, onClick, text }) =>{
  let showText = text || "VER MÁS NOTICIAS";
  return (
    <button className={`${style["showMore__button"]} ${loading ? style["opacity-50"] : ""}`} disabled={loading} onClick={onClick}>
        {loading ? "CARGANDO..." : showText}
    </button>
  );
}

export {ShowMoreButton};