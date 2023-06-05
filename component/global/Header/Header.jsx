import React, { useState, useEffect } from "react";
import { TodayTopic } from "component/global/Header/TodayTopic/TodayTopic.jsx";
import { MenuMovil } from "component/global/Header/MenuMovil/MenuMovil.jsx";
import { SlotAds } from "../AdsManager/SlotAds";
import { InputSearch } from "component/global/InputSearch/InputSearch";
import style from "component/global/Header/Header.module.scss"
import { Networks } from "component/global/Header/Networks/Networks";
import { BtnShared } from "../BtnShared/BtnShared";
import { useRouter } from "next/router";

const LogoLR = "/static/icon/logo-spoiler.svg";

let styleMenuFixed = {};

const Header = (props) => {
    const { mainData, topicData, adsPage, hideAdTop, setShowSearch, data, showSearch, refBtnSearch, internal, type } = props;
 const {pathname} = useRouter()
    const [state, setState] = useState({
        items: null,
        menuMovil: {},
        menuBuscador: false,
        showFixMenu: false,
        colorHeader: null,
        resultSearch: "",
    });
    const [percentVisible, setPercentVisible] = useState(0);

    const [abrirMenu, setAbrirMenu] = useState(false);

    const obtenerMenuBuscador = mainData?.menu;

    useEffect(() => {
        setState({
            ...state,
            menuMovil: obtenerMenuBuscador,
        });
        document.addEventListener("scroll", trackScrolling);

        return () => {
            document.removeEventListener("scroll", trackScrolling);
        };
    }, []);
    
    const trackScrolling = () => {
        const wrappedElementHeader = document.getElementById("header");
        const headerHeight = wrappedElementHeader.offsetHeight;
        const adsContainer = document.querySelector(".bl-Ads");
        adsContainer.classList.toggle("bl-Ads--fixed", adsContainer.getBoundingClientRect().top < 0);
        adsContainer.classList.toggle("bl-Ads--headerFixed", wrappedElementHeader?.getBoundingClientRect().bottom < 0);
        // wrappedElementHeader.querySelector("#menu__today").classList.toggle("sticky", wrappedElementHeader?.getBoundingClientRect().bottom < 0);
        wrappedElementHeader.querySelector("#container__header").classList.toggle("sticky", wrappedElementHeader?.getBoundingClientRect().bottom < 0);
        wrappedElementHeader.querySelector("#container__header").classList.toggle("hide-top-news", document.body.getBoundingClientRect().top < -380);
        document.body.style.marginTop = headerHeight * "px";
        const containerColor = document.querySelector("#container__header");
        
        if (wrappedElementHeader && wrappedElementHeader.getBoundingClientRect().bottom < 0) {
            setState({
                ...state,
                showFixMenu: true,
                menuMovil: obtenerMenuBuscador,
            });
            containerColor.classList.toggle("container__fixed", document.body.getBoundingClientRect().top < -370);
        } else {
            setState({
                ...state,
                showFixMenu: false,
                menuMovil: obtenerMenuBuscador,
            });
            containerColor.classList.remove("container__fixed", document.body.getBoundingClientRect().top < -260);
        }
    };

    const openMenuFn = () => {
        if (abrirMenu) {
            closeAllSections();
        } else {
            setAbrirMenu(true);
        }
    };

    const closeAllSections = () => {
        setAbrirMenu(false);
        setState({
            ...state,
            menuBuscador: false,
        });
    };

    useEffect(() => {
        const handleScroll = () => {
        let interna_content = document?.getElementById('interna_content')
        if (!interna_content) return;
        let scrollTop = window.pageYOffset
        let scrollBottom = interna_content.offsetHeight - window.innerHeight
        let scrollPercent = scrollTop / scrollBottom * 100 ;
        
          setPercentVisible(scrollPercent);
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const { showFixMenu, menuMovil } = state;
    const showProgressBar = type ==='article' || type ==='article_live' || type ==='live' || type==='inlive' || false

    const showSubMenu = (
        <div
            className={`${style["container-header__mainMenu"]} ${style["container-header__menu-bg-gray"]}`}
            style={styleMenuFixed}
        >
            <MenuMovil open={abrirMenu} data={menuMovil?.links} refBtnSearch={refBtnSearch} styled={showFixMenu && { ...styleMenuFixed, maxWidth: "330px" }} />
        </div>
    );


    let imgLogo = (
        <img
            className={style["logo-kbeat"]}
            src={LogoLR}
            alt="Últimas Noticias del Perú y el Mundo en kbeat.pe"
            title="Kbeat"
            width="177"
            height="59"
        />
    );

    if (showFixMenu) {
        styleMenuFixed = {
            position: "fixed",
            top: "80px",
            left: 0,
            right: "0",
        };
    } else {
        styleMenuFixed = {
            top: 0,
            margin: 0,
            left: "0",
            right: "0",
        };
    }
    const showSearchIcon = (
        <div className={style['logo-header-search']}
            onClick={() => {
                setShowSearch(!showSearch);
                console.log('apretado')
            }}
        >
            <span aria-hidden="true">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.561 20.4388L17.328 15.2058C18.6406 13.3611 19.2121 11.0905 18.9293 8.8442C18.6465 6.59788 17.53 4.53982 15.8012 3.07798C14.0723 1.61613 11.8573 0.857235 9.59526 0.951719C7.33319 1.0462 5.18918 1.98717 3.58826 3.58809C1.98734 5.18902 1.04637 7.33302 0.951887 9.59509C0.857403 11.8572 1.6163 14.0722 3.07814 15.801C4.53999 17.5299 6.59805 18.6464 8.84437 18.9292C11.0907 19.2119 13.3613 18.6404 15.206 17.3278L20.439 22.5608C20.7204 22.8422 21.102 23.0003 21.5 23.0003C21.8979 23.0003 22.2796 22.8422 22.561 22.5608C22.8424 22.2794 23.0005 21.8978 23.0005 21.4998C23.0005 21.1019 22.8424 20.7202 22.561 20.4388ZM2.99999 9.99983C2.99999 8.61536 3.41054 7.26198 4.17971 6.11083C4.94888 4.95969 6.04213 4.06248 7.32121 3.53267C8.60029 3.00286 10.0078 2.86423 11.3656 3.13433C12.7235 3.40443 13.9708 4.07111 14.9497 5.05008C15.9287 6.02905 16.5954 7.27633 16.8655 8.63419C17.1356 9.99206 16.997 11.3995 16.4672 12.6786C15.9373 13.9577 15.0401 15.0509 13.889 15.8201C12.7378 16.5893 11.3845 16.9998 9.99999 16.9998C8.14413 16.9977 6.36488 16.2595 5.05259 14.9472C3.74029 13.6349 3.00211 11.8557 2.99999 9.99983Z" fill="#F7F7F7"/>
            </svg>

            </span>
        </div>
    )
    const menuList = [
        {
            title: "Inicio",
            slug:"/"
        },
        {
            title: "Lo Último",
            slug:"ultimas-noticias"
        },
        {
            title: "Estrenos",
            slug:"estrenos"
        },
        {
            title: "Para Maratonear",
            slug:"para-matonear"
        },
        {
            title: "Marvel",
            slug:"marvel"
        },
        {
            title: "DC",
            slug:"dc"
        },
        {
            title: "Netflix",
            slug:"netflix"
        },
        {
            title: "HBO Max",
            slug:"hbo-max"
        },
        {
            title: "Disney+",
            slug:"disney+"
        },
        {
            title: "Prime Video",
            slug:"prime-video"
        },
        {
            title: "Star+",
            slug:"star+"
        },
        {
            title: "Crunchyroll",
            slug:"crunchyroll"
        },
        {
            title: "Lionsgate+",
            slug:"lionsgate+"
        },
    ]

    const makeListMenu = menuList.map((item, key) => (
        <li className={style["container-header_menu-secciones-item"]} key={key}>
            <a
                className={`${style["container-header_menu-secciones-link"]} ${pathname === item.slug ? style["container-header_menu-secciones-link-active"] : '' }` }
                href={`https://larepublica.pe/${item.slug}`}
            >
                {item.title}
            </a>
        </li>
    ))

    return (
        <header id="header" className={style["box-header"]}>
            <SlotAds hideAdTop={hideAdTop} type="Top" data={adsPage} />
            <div itemScope itemType="http://www.schema.org/SiteNavigationElement" className={style["general__header"]}>
                {/* <TodayTopic data={topicData} styleClass="container-header" /> */}
                <div className="container-header" id="container__header">
                    <div className={style["container-color"]}>
                        <div className={style["container__content"]}>
                            <div className={style["container-btn-main-menu"]}>

                                <button
                                    className={`${style["btn-sandwich"]} ${abrirMenu ? style["activeMenu"] : ""}`}
                                    id="btn-menu-burguer"
                                    role="button"
                                    aria-label="none"
                                    aria-hidden="true"
                                    onClick={openMenuFn}
                                >
                                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23 9H1C0.448 9 0 8.553 0 8C0 7.447 0.448 7 1 7H23C23.552 7 24 7.447 24 8C24 8.553 23.552 9 23 9Z" fill="#F7F7F7"/>
                                    <path d="M23 2H12C11.448 2 11 1.553 11 1C11 0.447 11.448 0 12 0H23C23.552 0 24 0.447 24 1C24 1.553 23.552 2 23 2Z" fill="#F7F7F7"/>
                                    <path d="M12 16H1C0.448 16 0 15.553 0 15C0 14.447 0.448 14 1 14H12C12.552 14 13 14.447 13 15C13 15.553 12.552 16 12 16Z" fill="#F7F7F7"/>
                                    </svg>

                                </button>
                                {/* {!state.showFixMenu ? <Networks/> : internal ? <>
                                <BtnShared type="facebook" data={data} variant="primary" header />
                                <BtnShared type="whatsapp" data={data} variant="primary" header/>
                                <BtnShared type="twitter" data={data} variant="primary" header/>
                                </>:<></>} */}
                            </div>
                            <div className={style["logo-header-kbeat"]} >
                                <a
                                    href="/"
                                    aria-label="Últimas Noticias del Perú y el Mundo en larepublica.pe"
                                    >
                                    {imgLogo}
                                </a>
                            </div>
                            {showSearchIcon}
                        </div>

                    </div>
                    {internal && showProgressBar && <div className={style["bar"]} ><div className={style["loader"]} style={{ width: `${percentVisible}%`, maxWidth: '100%'}}></div></div>}
                     <InputSearch refBtnSearch={refBtnSearch} showSearch={showSearch} />
                    <div className="list__menu" id="list__menu">
                        {!showFixMenu && <div className={style["container"]}>
                            <ul className={style["container-header_menu-secciones"]}>
                                {makeListMenu}
                            </ul>
                        </div>}
                    </div>
                    <div className={`${style["container_subMenuHeader"]} ${abrirMenu ? style["activeMenuDropdown"] : ""}`}>{showSubMenu}</div>
                    <div className={style["hidden"]} style={{position: 'relative'}}>
                        {menuMovil && menuMovil?.links ? <MenuMovil open={abrirMenu} data={menuMovil?.links} /> : null}
                    </div>
                </div>
            </div>
        </header>
    );
};

export { Header };
