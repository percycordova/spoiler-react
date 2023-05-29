import { HeaderContainer } from "./Header.module.scss"
const EducacionHeader = () => {
  return (
    <div className={HeaderContainer}>
      <div className="top-container">
        <div className="wrapper__content">
          <a href="/">Regresar a La República</a>
        </div>
      </div>
      <div className="header-content">
        <div className="wrapper__content">
          <a href="#"><img src="/static/special/logo-educativo.png" alt="Apunte Educativo" /></a></div>
      </div>
    </div>
  )
}

export { EducacionHeader }
