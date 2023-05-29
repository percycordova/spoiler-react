import { HeaderContainer } from "./Header.module.scss"
const ViviendaHeader = () => {
  return (
    <div className={HeaderContainer}>
        <div className="top-container">
            <div className="wrapper__content">
                <a href="/">Regresar a La República</a>
            </div>
        </div>
        <div className="header-content">
            <div className="wrapper__content">
                <a href="#"><img src="https://cdn.larepublica.pe/images/content/default/minisite/metrocuadrado.svg" alt="Metro Cuadrado" /></a>
                {/* <div>
                    <a href="/vivienda">INICIO</a>
                    <a href="/vivienda/estilo-y-deco">ESTILO Y DECO</a>
                    <a href="/vivienda/mercado-inmobiliario">MERCADO INMOBILIARIO</a>
                    <a href="/vivienda/util-e-interesante">UTIL E INTERESANTE</a>
                    <a href="/vivienda/arquitectura">ARQUITECTURA</a>
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=+51994307664&text=Buen%20d%C3%ADa,%20Alex%20Ubalgo">CONTÁCTENOS</a>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default ViviendaHeader
