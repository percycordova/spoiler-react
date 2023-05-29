import resizePrototype from "util/resizePrototype";
import style from "component/Page_Home/SpecialBranding/SpecialBranding.module.scss";

// TODO: agregar aspect-ratio en imagen

const newResize = new resizePrototype();

const configImage = {
    attrSpecial: (image, width, height) => ({
        src: newResize.resizeWapa(image || process.env.IMAGE_DEFAULT_1250x735, width, height),
        width,
        height
    })
};

const SpecialBranding = ({ data, variant = "" }) => {
    const dataBrandingContent = data?.spotlight?.data?.branding_item || [];
    const isMinisite = variant === "minisite";
    const specialBranding = isMinisite ? dataBrandingContent.slice(0, 6) : dataBrandingContent.slice(0, 2);
    if (specialBranding?.length > 0) {
        const item = specialBranding.map((item, key) => {
            const { url, image } = item;
            if (!image?.url || !url) return null;

            const settingImage = isMinisite ? configImage["attrSpecial"](image?.url, 310, 150) : configImage["attrSpecial"](image?.url, 312, 150);

            return (
                <a href={url} target="_blank" rel="noopener noreferrer" key={key}>
                    <figure className={isMinisite ? style["outside-image"] : ""}>
                        <img
                            loading="lazy"
                            {...settingImage}
                            alt=""
                            className={style["special-branding__image"]}
                        />
                    </figure>
                </a>
            );
        });

        return <section className={`${isMinisite ? `${style["minisite"]} d-flex` : style["middle-column"]}`}>{item}</section>;
    }

    return null;
};

export { SpecialBranding };
