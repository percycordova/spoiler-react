import resizePrototype from "util/resizePrototype";
import { ScrollbarContainer } from "component/Page_Home/ScrollbarContainer/ScrollbarContainer";
import { TitleSection } from "component/Page_Home/TitleSection/TitleSection";
import { ItemList } from "component/Page_Home/ItemList/ItemList";

const newResize = new resizePrototype();
const InterestContent = ({ title, data }) => {
    const interestContent = data?.spotlight?.data?.branding_item || [];

    if (interestContent?.length > 0) {
        const items = interestContent.map((item, key) => {
            const { title, url, color, image, header, logo } = item;
            const sponsor_logo = logo?.url ? newResize.resizeWapa(logo?.url, 74, 10) : "";
            return (
                <ItemList
                    key={key}
                    tag="h3"
                    variant="mediaObject"
                    title={title}
                    slug={url}
                    color={color}
                    image={newResize.resizeWapa(image?.url || process.env.IMAGE_DEFAULT_1250x735, 77, 45)}
                    header={header}
                    logo={sponsor_logo}
                />
            );
        });
        return (
            <section>
                <TitleSection title={title} />
                <ScrollbarContainer>
                    {items}
                </ScrollbarContainer>
            </section>
        );
    }

    return null;
};

export { InterestContent };
