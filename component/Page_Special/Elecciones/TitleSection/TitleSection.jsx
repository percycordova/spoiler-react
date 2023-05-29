import style from "component/Page_Special/Elecciones/TitleSection/TitleSection.module.scss";

const TitleSection = ({ title, verificador = false }) => {
    return (
        <h3 className={`${style["titleSection"]} ${verificador && style["title__verificador"]}`}>
            {verificador 
            ? <img src="/static/logos/logo-verificador.svg" alt="logo verificador" height="52" width="192" /> 
            : title}
        </h3>
    );
};

export { TitleSection };
