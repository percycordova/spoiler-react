import style from "component/Page_Home/ScrollbarContainer/ScrollbarContainer.module.scss";
const ScrollbarContainer = ({ children }) => {
    return <div className={style["scrollbar__container"]}>{children}</div>;
};

export { ScrollbarContainer };
