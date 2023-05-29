import { FooterContainer } from "./Footer.module.scss"
const ViviendaFooter = () => {
    return (
        <div className={FooterContainer}>
            <div className="footer-logo">
                <img src="/static/logos/logo-lr-footer.svg" alt="La República logo footer" />
            </div>
            <span>Área de publicidad: Julissa Lojas Sánchez</span>
            <span>
                <a href="mailto:julissa.lojas@glr.pe" target="_blank">julissa.lojas@glr.pe</a> | <a href="https://api.whatsapp.com/send?phone=+51979724698&text=Buen%20d%C3%ADa,%20Julissa%20Rojas">979724698</a>
            </span>
            <span>Supervisora de publicidad: Jennifer Sernaqué</span>
            <span>
                <a href="mailto:jennifer.sernaque@glr.pe" target="_blank">jennifer.sernaque@glr.pe</a> | <a href="https://api.whatsapp.com/send?phone=+51961811094&text=Buen%20d%C3%ADa,%20Jennifer%20Sernaqué">961811094</a>
            </span>
            © Grupo La República <br />
            Todos los derechos reservados
        </div>
    )
}

export default ViviendaFooter
