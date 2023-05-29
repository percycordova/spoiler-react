import style from "./RightSide.module.scss";

const RightSide = ({ children }) => {
    return (
        <div className={style.right_side}>
            {children}
        </div>
    );
}

export { RightSide }