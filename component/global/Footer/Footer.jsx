import { useState } from 'react';
import IconTikTok from '../Icon/IconTikTok';
import { IconWhatsapp } from '../Icon/IconWhatsapp';
import style from "component/global/Footer/Footer.module.scss";

const date = new Date();

const setLogos = [
    {
        href: 'https://larepublica.pe/',
        name: 'larepublica.pe',
        height: '13',
        img: '/static/logos/logo-LR.svg'
    },
    {
        href: 'https://podcast.larepublica.pe',
        name: 'podcast.larepublica.pe',
        height: '13',
        img: '/static/logos/logo-LR.svg'
    },
    {
        href: 'https://elpopular.pe/',
        name: 'elpopular.pe',
        height: '13',
        img: '/static/logos/logo_elpopular.svg'
    },
    {
        href: 'https://libero.pe/',
        name: 'libero.pe',
        height: '13',
        img:'/static/logos/logo-libero.svg'
    },
    {
        href: 'https://libero.pe/esports',
        name: 'libero.pe/esports',
        img: '/static/logos/logo-liberoEsports.svg',
        height: '36'
    },
    {
        href: 'https://wapa.pe/',
        name: 'wapa.pe',
        height: '16',
        img: '/static/logos/logo_wapa.svg'
    },
    {
        href: 'https://lol.larepublica.pe/',
        name: 'lol.larepublica.pe',
        height: '16',
        img:'/static/logos/logo-aweita.svg'
    },
    {
        href: 'https://buenazo.pe/',
        name: 'buenazo.pe',
        img: '/static/logos/logo-buenazo.svg',
        height: '27'
    },
    {
        href: 'https://larepublica.pe/verificador',
        name: 'larepublica.pe/verificador',
        img: '/static/logos/logo-verificador.svg',
        height: '14'
    },
    {
        href: 'https://perulegal.larepublica.pe',
        name: 'perulegal.larepublica.pe',
        img: '/static/logos/logo-peruLegal.svg',
        height: '18'
    },
    {
        href: 'https://lrmas.larepublica.pe',
        name: 'lrmas.larepublica.pe',
        img: '/static/logos/logo-lrmas.svg',
        height: '25'
    },
    {
        href: 'https://perubazar.pe/',
        name: 'perubazar.pe',
        img: '/static/logos/logo-peruBazar.svg',
        height: '25'
    },
    {
        href: 'https://cuponidad.pe/',
        name: 'cuponidad.pe',
        img: '/static/logos/logo-cuponidad.svg',
        height: '13'
    }
];

const Footer = ({ data }) => {
    const [resultSearch, setresultSearch] = useState(null);

    let data_menu;
    let contentTags = null;
    if (data && data.menu && data.menu.links && Object.keys(data.menu.links)) {
        data_menu = data.menu.links;
    }

    const debounce = (callback, wait) => {
        let timerId;
        return (...args) => {
          clearTimeout(timerId);
          timerId = setTimeout(() => {
            callback(...args);
          }, wait);
        };
    };
    
    const onSearch = (event) => {
        event.preventDefault();
        if (resultSearch !== '') {
            window.location.href = `/buscador?buscando=${resultSearch}`;
        }
    };

    const onKeyUp = (e) => {

        e.persist();
        const result = e.target.value;

        if (result !== '') {
            debounce(() => {
                setresultSearch(result);
            }, 100)();
        } else {
            debounce(() => {
                setresultSearch('');
            }, 100)();
        }
    };
    const onKeyDown = (e) => {
        e.persist();
        const result = e.target.value;

        if (result !== '') {
            debounce(() => {
                setresultSearch(result);
            }, 100)();
        } else {
            debounce(() => {
                setresultSearch('');
            }, 100)();
        }
    };
      
    const scrollToTop = () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    }

    const contentMedios = <ul className={`${style["footer__logotipos"]} d-flex align-center`}>
        {
            setLogos.map((item, key) => {
                const { name, href, img, height } = item;
                return <li className={style["footer__item"]} key={`item-medio-informativo-${key}`}>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        {name}
                    </a>
                </li>
            })
        }    
    </ul>

    data_menu && 
    (contentTags = <ul className={`${style["footer__tags"]} d-flex flex-wrap`}>
            {
                data_menu.map((item, key) => {
                    const { title, path } = item;
                    return <li className={style["footer__item-tag"]} key={`item-tag-${key}`}>
                        <a href={path}>{title}</a>
                    </li>
                })
            }    
        </ul>)


    const siteLogo =  <a href="/" className={style["footer__mainLogo"]} aria-label={'redirect home'}>
                        <img src='/static/logos/logo-LR.svg' alt="Diario la República hoy portada" height="40" width="245" loading="lazy"/>
                    </a>

    const contactLinks = <div className={style["footer__contact--links"]}>
            <a className="" href="https://larepublica.pe/contactenos">Contáctanos</a>
            <a className="menulist_subscribe" href="https://larepublica.pe/newsletter">Suscríbete</a>
            <a className="" href="https://larepublica.pe/terminos-de-uso"> Términos y condiciones</a>
            <a className="" href="https://larepublica.pe/politicas-y-estandares">Políticas y Estándares</a>
    </div>

    const searchBlock = <form
                            className={style["footer__search"]}
                            onSubmit={onSearch}>
                            <div className={style["footer__search--items"]}>
                                <button role="button" style={{border:"none", marginRight: "10px"}} 
                                    id="btn-footer-search-icon"
                                    className={style["footer__search--btn"]}
                                    aria-label="buscar noticia" 
                                    data-content="menuBuscador">
                                    <span aria-hidden="true">
                                        <svg style={{width: "20px", fill:"#aaa", maxWidth: "20px"}} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z" />
                                        </svg>
                                    </span>
                                </button>
                                <input
                                    id="menuFocus"
                                    className={style["footer__search--input"]}
                                    type="search"
                                    onKeyUp={onKeyUp}
                                    onKeyDown={onKeyDown}
                                    placeholder="Buscar "
                                />
                                
                            </div>
                            <button role="button" style={{border:"none"}} 
                                id="btn-footer-search"
                                className={style["footer__search--btn2"]}
                                aria-label="buscar noticia" 
                                data-content="menuBuscador">
                                Buscar
                            </button>
                        </form>;

    const mediaLinks  = <ul className={`${style["footer__btnsocial"]} d-flex`}>
                                <li className={style["menulist-btn-social"]}>
                                    <a 
                                        className={`${style["media__fb"]} ${style["atm-menu-tsocial"]}`} href={process.env.SITE_FACEBOOK}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <span style={{padding:'8px'}} aria-hidden="true">
                                            <svg style={{width: '24px', fill: '#fff'}} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1343 12v264h-157q-86 0-116 36t24 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"/>
                                            </svg>
                                        </span>
                                    </a>
                                </li>
                                <li className={style["menulist-btn-social"]}>
                                    <a 
                                        className={`${style["media__tw"]} ${style["atm-menu-tsocial"]}`} href={process.env.SITE_TWITTER}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >
                                        <span style={{padding:'8px'}} aria-hidden="true">
                                            <svg style={{width: '24px', fill: '#fff'}} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"/>
                                            </svg>
                                        </span>
                                    </a>
                                </li>
                                <li className={style["menulist-btn-social"]}>
                                    <a 
                                        className={`${style["media__ig"]} ${style["atm-menu-tsocial"]}`} href={process.env.SITE_INSTAGRAM}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <span style={{padding:'8px'}} aria-hidden="true">
                                            <svg style={{width: '24px', fill: '#fff'}} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm138 0q0 164-115 279t-279 115-279-115-115-279 115-279 279-115 279 115 115 279zm108-410q0 38-27 65t-65 27-65-27-27-65 27-65 65-27 65 27 27 65zm-502-220q-7 0-76.5-.5t-105.5 0-96.5 3-103 10-71.5 18.5q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103-3 96.5 0 105.5.5 76.5-.5 76.5 0 105.5 3 96.5 10 103 18.5 71.5q20 50 58 88t88 58q29 11 71.5 18.5t103 10 96.5 3 105.5 0 76.5-.5 76.5.5 105.5 0 96.5-3 103-10 71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103 3-96.5 0-105.5-.5-76.5.5-76.5 0-105.5-3-96.5-10-103-18.5-71.5q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10-96.5-3-105.5 0-76.5.5zm768 630q0 229-5 317-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124t-124-322q-5-88-5-317t5-317q10-208 124-322t322-124q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z" />
                                            </svg>
                                        </span>
                                    </a>
                                </li>
                                <li className={style["menulist-btn-social"]}>
                                    <a 
                                        className={`${style["media__tk"]} ${style["atm-menu-tsocial"]}`} href="https://www.tiktok.com/@larepublica.pe"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <span style={{padding:'8px'}} aria-hidden="true">
                                            <IconTikTok fill="#fff" width="24px" />
                                        </span>
                                    </a>
                                </li>
                                <li className={style["menulist-btn-social"]}>
                                    <a 
                                        className={`${style["media__wp"]} ${style["atm-menu-tsocial"]}`} href="https://api.whatsapp.com/send?phone=+51924817399&text=Buen día,"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <span style={{padding:'8px'}} aria-hidden="true">
                                            <IconWhatsapp fill="#fff" width="24px" />
                                        </span>
                                    </a>
                                </li>
                            </ul>


    return <footer className={style["wrapper__footer"]}>
            <div className={style["backButton__wrapper"]}>
                <button className={style["backButton"]} onClick={scrollToTop}>
                    <img src="/static/lr/arrow_top.svg" loading="lazy" alt="Regresar al inicio" height="15" width="13" />
                    Regresar al inicio
                </button>
            </div>
            <div className={style["footer"]}>
                {siteLogo}
                <div className={style["footer__tags-media"]}>
                    <div className={style["footer__logos--items"]}>
                        <h3 className={style["footer__interested--title"]}>Enlaces de interés</h3>
                        {contentTags}
                        <div className={style["contactLinks__mobile"]}>
                            {contactLinks}
                        </div>
                    </div>
                    <div className={style["footer__media--items"]}>
                        <h3 className={style["footer__interested--title"]}>Nuestras Redes Sociales</h3>
                        {mediaLinks}
                        {searchBlock}
                        <div className={style["contactLinks__desktop"]}>
                            {contactLinks}
                        </div>
                    </div>
                </div>
                <p className={style["footer__moreMedios"]}>Visita también</p>
                {contentMedios}
                <p className={style["copyright"]}>©TODOS LOS DERECHOS RESERVADOS - {date.getFullYear()}</p>
            </div>  
        </footer>

}

export {Footer};