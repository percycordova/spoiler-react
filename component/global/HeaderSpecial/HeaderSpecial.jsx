import { useState, useEffect } from "react";
import style from "component/global/HeaderSpecial/HeaderSpecial.module.scss";
import { SlotAds } from "component/global/AdsManager/SlotAds/index";
import { IconTwitter } from "component/global/Icon/IconTwitter";
import { IconFacebook } from "component/global/Icon/IconFacebook";

const HeaderSpecial = ({ menuData, dataAds, hideAdTop }) => {
    const [activeMenu, setActiveMenu] = useState(false);
    const links = menuData?.menu?.links;

    let showItemsMenu = null,
        btnMenuBurguer = null,
        showLateralMenu = null,
        showLogoSpecials = null,
        showListMenuAndRS = null,
        showReturnButton = null,
        iconReturn = `/static/special/back_button.svg`,
        logoRedLr = '/static/special/logo-lr_back.svg';

    let LogoSpecials = "/static/special/elecciones-2022.png",
        urlEspecial = "https://larepublica.pe/elecciones";

    const openMenu = () => {
        if (activeMenu) setActiveMenu(false);
        else setActiveMenu(true); 
    }


    if(links && links.length > 0) {
        showItemsMenu = links.map((item, key) => {
            const {path, title} = item;
            
            return <span itemProp="name" key={`item-elecciones-${key}`}>
                <a itemProp="url" className={style["specials__lateralMenu--item"]} href={path || 'https://larepublica.pe/'}>{title || 'LR'}</a>  
            </span>
        }) 
    }


    showReturnButton = (
        <div className={style["header__return"]}>
            <span>Regresar a</span>
            <a href={`/`}>
                <img 
                    src={logoRedLr} 
                    alt="Logo La República"
                    width="90" 
                    height="14"
                    className={style["header__return--lrRed"]}
                />
                <img 
                    src={iconReturn}
                    alt="Volver a LaRepublica.pe"
                    width="13" 
                    height="14"
                    className={style["header__return--lrBack"]}
                />
            </a>
            
        </div>
    )

    btnMenuBurguer = (
        <button
            className={style["specials__btnBurguer"]}
            role="button"
            aria-label="none"
            aria-hidden="true"
            onClick={openMenu}>
            <span/>
            <span/>
            <span/>
        </button>
    )

    showLogoSpecials = (
        <a className={style["specials__logo"]} href={urlEspecial}
            aria-label="LaRepublica.pe">
            <img src={LogoSpecials} alt="Últimas Noticias del Perú y el Mundo en larepublica.pe" title='La República' width="146" height="35"/>
        </a>
    )

    showLateralMenu =(
        <div className={style["specials__lateralMenu"]} style={{position: "relative"}}>
            <div className={style["specials__lateralMenu--opacity"]}></div>
            <div className={style["specials__lateralMenu--wrapperList"]} style={{display:"none"}}>
                {showItemsMenu}
            </div>
        </div>
    )

    showListMenuAndRS = (
        <div className={style["specials__wrapperListMenuRS"]} style={{display:"none"}}>
            <div itemScope itemType="http://www.schema.org/SiteNavigationElement" className={style["specials__listMenu"]}>
                {showItemsMenu}
            </div>
            <div className={style["specials__btnSocial"]}>
                <a
                    href={"https://www.facebook.com/sharer.php?u=https://larepublica.pe/elecciones"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"compartir la nota por facebook"}
                    className={`${style["social__fb"]}`}>
                        <IconFacebook height="20" width="20"/>
                        
                </a>
                <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURI("Conoce las principales noticias de Elecciones 2022")} https://www.facebook.com/sharer.php?u=https://larepublica.pe/elecciones/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"compartir la nota por twitter"}
                    className={`${style["social__tw"]}`}>
                        <IconTwitter height="20" width="20"/>
                        
                </a>
            </div>
        </div>
    )
    


    const showAdsTop = <SlotAds hideAdTop={hideAdTop} type="Top" data={dataAds} />;

    useEffect(() => {
        document.addEventListener('scroll', function (){
            var elementHeader = document.getElementById('special-header');
            var elementRef = document.getElementById('refviability');
            
            if(elementHeader && elementRef) {
                elementHeader.classList.toggle("hide-ad-top", elementRef.getBoundingClientRect().top < 0);
            }
        })
    }, []);

    return (
        <header className={`${style["specials__header"]} ${style["box-header"]} ${activeMenu ? style["styleActiveMenu"] : ""}`} id="special-header">
            {showAdsTop}
            {showReturnButton}
            <div className={style["specials__container"]}>
                {btnMenuBurguer}
                {showLogoSpecials}
                {showListMenuAndRS}
            </div>
            {showLateralMenu}
        </header>
    );
};

export { HeaderSpecial };
