import React, { useState } from "react";
import style from "./HeaderVerificador.module.scss";

const HeaderVerificador = (props) => {

    const [show, setShow] = useState(false);

    return (
        <header className={`${style.header__verificador} ${show ? style.header__verificador__mobile : ""}`}>
            {/* {showAdsTop} */}
            <div>
                <nav>
                    <svg
                        onClick={() => setShow(!show)}
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ fill: "rgb(60, 60, 59)", width: "20px" }}
                    >
                        <path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45z"></path>
                    </svg>
                    <a href="/verificador">
                        <img src="/static/logos/logo-verificador.svg" alt="logo" />
                    </a>

                    <ul className={show ? style.nav__ul__li__mobile : style.nav__ul__li}>
                        <li>
                            <a href="/verificador/2019/09/10/sobre-nosotros">NOSOTROS</a>
                        </li>
                        <li>
                            <a href="/verificador">NOTICIAS</a>
                        </li>
                        <li>
                            <a href="/verificador/2019/10/19/correcciones">CORRECCIONES</a>
                        </li>
                        <li>
                            <a href="/verificador/2019/09/10/metodologia">METODOLOGÍA</a>
                        </li>
                        <li>
                            <a href="/verificador/2019/09/11/contacto">CONTACTO</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export { HeaderVerificador };
