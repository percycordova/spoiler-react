import style from "./HumorInternalLightbox.module.scss";


const HumorInternalLightbox = ({ image, setImage }) => {
  function closeLightbox(ev) {
    if (ev.target.tagName !== "IMG")
      setImage(null)
  }
  return (
    <div className={style.lightboxContainer} onClick={closeLightbox}>
      <div className={style.lightboxInner}>
        <img src={image} />
        <div className={style.lightboClose}></div>
      </div>
    </div>
  )
}

export { HumorInternalLightbox }