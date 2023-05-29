import style from "./TitleSection.module.scss";

const TitleSection = (data) => {
    const { tag } = data;
    const TAG = tag ?? "h1";
    return (
        <div className={style.titleSection__wrapper}>
            <TAG className={style.titleSection__main}>{data.name}</TAG>
        </div>
    );
};

export { TitleSection };
