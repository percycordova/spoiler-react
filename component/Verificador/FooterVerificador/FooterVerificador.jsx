import style from "./FooterVerificador.module.scss";

const FooterVerificador = () => {
    return (
        <footer className={style["main-footer"]}>
            <div className={style["main-logo"]}>
                <figure>
                    <img
                        src="https://cdn.larepublica.pe/images/content/default/verificador/logoAuspiciador_verificador.png"
                        loading="lazy"
                        alt="auspiciador"
                    />
                </figure>
                <figure>
                    <img src="https://cdn.larepublica.pe/images/content/default/verificador/badge-fact-checkers.png" 
                        loading="lazy"
                        alt="meta" />
                </figure>
            </div>

            <figure className={style.logo__img}>
                <img
                    src="https://cdn.larepublica.pe/images/content/default/verificador/logo-footer-verificador.svg"
                    loading="lazy"
                    alt="logo"
                    width={192}
                    height={52}
                />
            </figure>
            <p>La unidad de verificación de datos de La República</p>
            <p className={style.p__footter}>© Grupo La República</p>
            <p>Todos los derechos reservados.</p>
        </footer>
    );
};

export { FooterVerificador };
