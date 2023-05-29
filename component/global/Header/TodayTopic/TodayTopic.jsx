import { useRef } from "react";

const TodayTopic = ({ data, type, styleClass }) => {
    /* const { menu } = data; */
    let isAmp = false;
    const ref = useRef();
    const moveLeft = () => {
        ref.current.scrollLeft -= 50;
    };
    const moveRight = () => {
        ref.current.scrollLeft += 50;
    };

    if (type && type === "amp") isAmp = true;

    if (data?.menu?.links?.length > 0) {
        const { menu } = data;
        let setItem = menu?.links?.map((item, key) => {
            const { path, title } = item;

            return (
                <li itemProp="name" key={`anchor-${key}`} style={{ display: "inline-block" }}>
                    <a
                        itemProp="url"
                        href={path || "https://larepublica.pe"}
                        style={isAmp ? { padding: "12px" } : { padding: "0 12px" }}
                        className="nav__inside"
                    >
                        {title || "LR"}
                    </a>
                    <span>.</span>
                </li>
            );
        });
        return (
            <>
                <div className={`wrapper-nav ${styleClass || ""}`} id="menu__today">
                    <a href="/ultimas-noticias" className="nav__side-left">HOY</a>
                    {(isAmp && (
                        <ul className="nav__side-right">
                            <amp-carousel height="14" type="carousel">
                                {setItem}
                            </amp-carousel>
                        </ul>
                    )) || (
                        <>
                            <div className="icon-left" onClick={moveLeft}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C8.68678 20 7.38642 19.7413 6.17317 19.2388C4.95991 18.7362 3.85752 17.9997 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C11.3132 0 12.6136 0.258658 13.8268 0.761205C15.0401 1.26375 16.1425 2.00035 17.0711 2.92893C17.9997 3.85752 18.7362 4.95991 19.2388 6.17317C19.7413 7.38642 20 8.68678 20 10ZM5 10L10 15V12H14V8H10V5L5 10Z"
                                        fill="#AAAAAA"
                                    />
                                </svg>
                            </div>
                            <div className="icon-right" onClick={moveRight}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C11.3132 0 12.6136 0.258658 13.8268 0.761205C15.0401 1.26375 16.1425 2.00035 17.0711 2.92893C17.9997 3.85752 18.7362 4.95991 19.2388 6.17317C19.7413 7.38642 20 8.68678 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C8.68678 20 7.38642 19.7413 6.17317 19.2388C4.95991 18.7362 3.85752 17.9997 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10ZM15 10L10 5V8H6V12H10V15L15 10Z"
                                        fill="#535353"
                                    />
                                </svg>
                            </div>
                            <ul ref={ref} className="nav__side-right" style={{ padding: 0, margin: 0 }}>
                                {setItem}
                            </ul>
                        </>
                    )}
                </div>
                {!isAmp && (
                    <style>{`
                        .wrapper-nav {
                            height: 30px;
                            background-color:#FFF!important;
                            font-size: 9px;
                            font-weight: 500;
                            padding:0 15px;
                            display:flex;
                            align-items:center;
                            font-family: Robot, sans-serif;
                            position: relative;
                        }
                        .nav__side-left {
                            width:30px;
                            overflow:hidden;
                            font-weight: 700;
                            font-size: 12px;
                        }
                        .nav__side-right {
                            width:calc(100% - 105px);
                            overflow-x:scroll;
                            white-space:nowrap;
                            text-transform:uppercase;
                            margin-left: 35px !important;
                            color: #535353;
                            font-weight: 700;
                        }
                        .nav__inside {
                            white-space:nowrap;
                            position:relative;
                            text-decoration: none;
                            color: #242424;
                            font-weight: 500;
                        }
                        .nav__inside:hover {
                            color:#ff0102;
                        }
                        @media(min-width: 999px) {
                            .wrapper-nav {
                                font-size:11px;
                            }
                            .nav__side-right::-webkit-scrollbar-track {
                                background-color:#F5F5F5;
                            }
                            .nav__side-right::-webkit-scrollbar-thumb {
                                background:#ddd;
                            }
                            .nav__side-right::-webkit-scrollbar {
                                height:4px;
                            }
                        }
                        .icon-left {
                            position: absolute;
                            left: 5rem;
                            top: 3.5px;
                            cursor: pointer;
                        }
                        .icon-right {
                            position: absolute;
                            right: 2rem;
                            top: 3.5px;
                            cursor: pointer;
                        }
                    `}</style>
                )}
            </>
        );
    }

    return null;
};

export { TodayTopic };
