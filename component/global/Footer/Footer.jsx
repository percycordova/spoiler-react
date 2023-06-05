import { useState } from 'react';
// import IconTikTok from '../Icon/IconTikTok';
// import { IconWhatsapp } from '../Icon/IconWhatsapp';
import style from "component/global/Footer/Footer.module.scss"
const LogoSpolier = "/static/icon/logo-spoiler.svg";
const LogoLR = "/static/icon/logo_lr.svg";


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
        href: 'https://perulegal.larepublica.pe/',
        name: 'perulegal.larepublica.pe',
        img: '/static/logos/logo-peruLegal.svg',
        height: '18'
    },
    {
        href: 'https://lrmas.larepublica.pe/',
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
            window.location.href = `/search?searching=${resultSearch}`;
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

    const contentMedios = <ul className={`${style['footer__logotipos']} ${style['d-flex']} ${style['align-center']}`}>
        {
            setLogos.map((item, key) => {
                const { name, href, img, height } = item;
                return <li className={`${style['footer__item']}`} key={`item-medio-informativo-${key}`}>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        {name}
                    </a>
                </li>
            })
        }    
    </ul>

    data_menu && 
    (contentTags = <ul className={`${style['footer__tags']} ${style['d-flex']} ${style['flex-wrap']}`}>
            {
                data_menu.map((item, key) => {
                    const { title, path } = item;
                    return <li className={`${style['footer__item-tag']}`} key={`item-tag-${key}`}>
                        <a href={path}>{title}</a>
                    </li>
                })
            }    
        </ul>)


    const siteLogo =  <a href="/" className={`${style['footer__mainLogo']}`} aria-label={'redirect home'}>
                        <img src={LogoSpolier} alt="Diario la República hoy portada" width="267" height="90" loading="lazy"/>
                      </a>

    const contactLinks = <div className={`${style['footer__contact--links']}`}>
            <a className="" href="#">Contáctanos</a>
            <a className="" href="#" >Suscríbete</a>
            <a className="" href="https://wapa.pe/terminos-de-uso"> Términos y condiciones</a>
            {/* <a className="" href="https://larepublica.pe/politicas-y-estandares">Políticas y Estándares</a> */}
    </div>

    const searchBlock = <div style={{margin:'auto 7px'}}><form
                            className={`${style['footer__search']}`}
                            onSubmit={onSearch}>
                            <div className={`${style['footer__search--items']}`}>
                                <button role="button" style={{border:"none", marginRight: "10px"}} 
                                    id="btn-main-menu-search"
                                    className={style["footer__search--btn"]}
                                    aria-label="buscar noticia" 
                                    data-content="menuBuscador">
                                    <span className={`${style['icon-span']} ${style['svg-baseline']}`} aria-hidden="true">
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
                                id="btn-main-menu-search"
                                className={style["footer__search--btn2"]}
                                aria-label="buscar noticia" 
                                data-content="menuBuscador">
                                Buscar
                            </button>
                        </form>
                        </div>

    const mediaLinks  = <ul className={`${style['footer__btnsocial']} ${style['d-flex']}`}>
                                <li className={style["menulist-btn-social"]}>
                                    <a 
                                        className={`${style['media__fb']} ${style['atm-menu-tsocial']}`} href={process.env.SITE_FACEBOOK}
                                        style={{backgroundColor:'#2D88FF'}}
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
                                        className={`${style['media__tw']} ${style['atm-menu-tsocial']}`} href={process.env.SITE_YOUTUBE}
                                        rel="noopener noreferrer"
                                        style={{backgroundColor:'#1DA1F2'}}
                                        target="_blank"
                                        >
                                        <span style={{padding:'8px'}} aria-hidden="true">
                                        <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M29 2.84123C27.9216 3.32308 26.7724 3.64246 25.5744 3.79754C26.8069 3.048 27.7476 1.87015 28.1898 0.450461C27.0407 1.14831 25.7719 1.64123 24.4198 1.91631C23.3287 0.732923 21.7736 0 20.0771 0C16.7856 0 14.1357 2.72123 14.1357 6.05723C14.1357 6.53723 14.1756 6.99877 14.2734 7.43815C9.33075 7.19262 4.95719 4.77969 2.01912 1.104C1.50619 2.01046 1.20531 3.048 1.20531 4.16492C1.20531 6.26215 2.26562 8.12123 3.84612 9.19754C2.89094 9.17908 1.95387 8.89662 1.16 8.45169C1.16 8.47015 1.16 8.49415 1.16 8.51815C1.16 11.4609 3.22081 13.9052 5.92325 14.4683C5.43931 14.6031 4.91187 14.6677 4.3645 14.6677C3.98388 14.6677 3.59962 14.6455 3.23894 14.5643C4.00925 16.9625 6.19513 18.7255 8.79425 18.7828C6.7715 20.3945 4.20319 21.3655 1.42281 21.3655C0.93525 21.3655 0.467625 21.3434 0 21.2825C2.63356 23.0123 5.75469 24 9.1205 24C20.0607 24 26.042 14.7692 26.042 6.768C26.042 6.50031 26.0329 6.24185 26.0203 5.98523C27.2002 5.13231 28.1916 4.06708 29 2.84123Z" fill="white"/>
                                        </svg>

                                        </span>
                                    </a>
                                </li>
                                <li className={style["menulist-btn-social"]} >
                                    <a 
                                        className={`${style['media__ig']} ${style['atm-menu-tsocial']}`} href={process.env.SITE_INSTAGRAM}
                                        style={{background:'#28A8EA'}}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <span style={{padding:'8px'}} aria-hidden="true">
                                        <svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.91488 9.87443C9.51584 6.63971 14.5256 4.42647 16.9441 3.40498C24.1995 0.510747 25.5815 0 26.618 0C26.7908 0 27.309 -3.29798e-07 27.6545 0.340497C28 0.510746 28 0.851245 28 1.02149C28 1.19174 28 1.70249 28 2.04299C27.6545 6.12896 25.927 15.8331 25.0633 20.4299C24.7178 22.3026 24.0268 22.9836 23.3358 22.9836C21.781 23.1538 20.7445 21.9621 19.1898 21.1109C16.9441 19.5786 15.5621 18.7274 13.4891 17.3654C10.8978 15.6629 12.6253 14.8117 14.0073 13.2794C14.3528 12.9389 21.09 6.9802 21.09 6.46946C21.09 6.46946 21.09 6.12896 20.9173 5.95871C20.7445 5.78846 20.5718 5.78846 20.399 5.95871C20.2263 5.95871 16.5986 8.3422 9.51584 13.1092C8.47935 13.7902 7.6156 14.1307 6.75186 14.1307C5.88811 14.1307 3.98787 13.6199 2.77863 13.1092C1.22389 12.5984 -0.158107 12.2579 0.014642 11.4067C0.014642 10.8959 0.705639 10.3852 1.91488 9.87443Z" fill="white"/>
                                        </svg>

                                        </span>
                                    </a>
                                </li>
                                <li className={style["menulist-btn-social"]} >
                                    <a 
                                        className={`${style['media__ig']} ${style['atm-menu-tsocial']}`} href={process.env.SITE_INSTAGRAM}
                                        style={{background:'#000000'}}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <span style={{padding:'8px'}} aria-hidden="true">
                                        <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.47 4.45C15.27 3.67 14.41 2.42 14.14 0.97C14.08 0.66 14.05 0.33 14.05 0H10.23V15.29C10.16 17 8.75002 18.38 7.02002 18.38C6.48002 18.38 5.98002 18.25 5.53002 18.01C4.51002 17.47 3.81002 16.4 3.81002 15.17C3.81002 13.4 5.25002 11.96 7.02002 11.96C7.35002 11.96 7.67002 12.01 7.97002 12.11V8.21C7.66002 8.17 7.35002 8.14 7.02002 8.14C3.15002 8.14 1.52588e-05 11.29 1.52588e-05 15.16C1.52588e-05 17.54 1.19002 19.64 3.00002 20.91C4.14002 21.71 5.53002 22.18 7.02002 22.18C10.89 22.18 14.04 19.03 14.04 15.16V7.42C15.54 8.49 17.37 9.13 19.35 9.13V5.31C18.28 5.31 17.29 4.99 16.46 4.45H16.47Z" fill="white"/>
                                        </svg>


                                        </span>
                                    </a>
                                </li>
                            </ul>


    return <footer className={style["wrapper__footer"]}>
            <div className={style["backButton__wrapper"]}>
                <button className={style["backButton"]} onClick={scrollToTop}>
                    <div className={`${style['d-flex']} ${style['item-center']} ${style['gap-10']}`}>
                        <div>                        
                            <img src="/static/icon/arrow_top.svg" loading="lazy" alt="Regresar al inicio" height="15" width="13" />
                        </div>
                        Regresar al inicio
                    </div>
                       
                </button>
            </div>
            <div className={style["footer"]}>
                {siteLogo}
                <div className={style["footer__tags-media"]}>
                    <div className={style["footer__logos--items"]}>
                        <p className={style["footer__interested--title"]}>Enlaces de interés</p>
                        {contentTags}
                        <div className={style["contactLinks__mobile"]}>
                            {contactLinks}
                        </div>
                    </div>
                    <div className={style["footer__media--items"]}>
                        <p className={style["footer__interested--title"]}>Nuestras Redes Sociales</p>
                        {mediaLinks}
                        {searchBlock}
                        <div className={style["contactLinks__desktop"]}>
                            {contactLinks}
                        </div>
                    </div>
                </div>
                <p className={style["footer__moreMedios"]}>Un sitio web de</p>
                <div className={style["footer__logo-lr"]}>
                <img src={LogoLR} alt="Diario la República hoy portada" width="150" height="25" loading="lazy" />
                </div>
                
                <p className={style["copyright"]}>©TODOS LOS DERECHOS RESERVADOS - {date.getFullYear()}</p>
            </div>  
        </footer>

}

export {Footer};