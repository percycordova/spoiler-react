import style from "component/Newsletters/Loader/Loader.module.scss";

const Loader = () => {
    return (
        <>
        <div className={style["loader-glr-container"]}>
            <div className={style["wrapper-line"]}>
                <div className={style["item-line"]} />
                <div className={style["item-line"]} />
                <div className={style["item-line"]} />
                <div className={style["item-line"]} />
                <div className={style["item-line"]} />
            </div>
        </div>
        </>
    )
}

export {Loader};