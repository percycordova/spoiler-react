import { ScrollbarContainer } from "component/Page_Home/ScrollbarContainer/ScrollbarContainer";
import { ItemList } from "component/Page_Home/ItemList/ItemList";
import { TitleSection } from "component/Page_Home/TitleSection/TitleSection";

const MoreSeenGrid = ({ title, data }) => {
    const moreseen = data?.external?.data || [];

    if (moreseen?.length > 0) {
        const items = moreseen.slice(0,7).map((item, key) => {
            const { title, slug, data } = item,
                section_primary = data?.categories?.find((ctg) => ctg.primary === true)?.name || "LR";
            return <ItemList key={key} title={title} slug={slug} category={section_primary} />;
        });
        return <section>
            <TitleSection title={title} />
            <ScrollbarContainer>
                {items}
            </ScrollbarContainer>
        </section>
    }
    return null;
};

export { MoreSeenGrid };
