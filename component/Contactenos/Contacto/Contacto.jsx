import style from "./Contacto.module.scss";
const Contacto = ({ title, data }) => {
    return (
        <div className={style.header__contacto}>
            <div className={style.title__contacto}>
                <h1>Contáctenos</h1>
            </div>
            <div className={style.info__GLR}>
                <div >
                    <div className={style.imageLogo}>
                        <img src={`https://cdn.larepublica.pe/images/images/content/default/logo_glr_contact_section.png`} />
                    </div>
                </div>
                <p className="direccion">Jr. Camaná 320, Cercado de Lima - Perú</p>
                <p className="telf">711 6000</p>
            </div>
        </div>
    );
};

export { Contacto };
