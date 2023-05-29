import style from "component/Page_Home/ThreeColumnContainer/ThreeColumnContainer.module.scss";
const ThreeColumnContainer = ({ variant, children }) => {
    return (
        <div className={`${style["three-column__container"]} ${style[variant]}`}>
            {children}
        </div>
    );
};

export { ThreeColumnContainer };
