import React, { useState } from "react";
import style from "./Acordeon.module.scss";
const Acordeon = ({ title, data }) => {
    const [show, setShow] = useState(false);
    return (
        <article className={style.accordion}>
            <label
                className={style.accordion__link}
                onClick={() => {
                    setShow(!show);
                }}
            >
                {title}
            </label>

            <div className={show ? style.accordion__item : style.accordion__hidden}>
                <div>
                    {data.map((item) => (
                        <div className={style.accordion__box}>
                            <p>{item?.name}</p>
                            <p>{item?.position}</p>
                            <p>{item?.number}</p>
                            <p className={style.p__red}>{item?.email}</p>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
};

export { Acordeon };
