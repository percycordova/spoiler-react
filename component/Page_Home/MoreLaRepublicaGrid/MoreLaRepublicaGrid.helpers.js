// TODO: por revisar el /slug/ vs /slug x revisar si se agrega en el hocs-home
const transform = (atemporal = {}, analytics = {}) => {

    const parse_data = {};

    if (analytics?.external?.data) {
        analytics.external.data.forEach((d) => {
            const section_primary = d?.data?.categories?.find((ctg) => ctg.primary)?.name || "LR";
            const slug = d?.slug;

            parse_data[slug] = {
                slug_note: slug,
                title_note: d?.title || "Lo último de LR",
                section_primary,
            };
        });
    }

    if (atemporal?.spotlight?.data?.section_item) {
        atemporal.spotlight.data.section_item.slice(0, 15).forEach((d) => {
            const slug = d?.url?.replace("https://larepublica.pe", "");
            const section_primary = d?.section[0]?.name || "LR";

            if (!parse_data[slug]) {
                parse_data[slug] = {
                    slug_note: slug,
                    title_note: d?.title || "Lo último de LR",
                    section_primary,
                };
            }
        });
    }

    return parse_data;
};

export { transform };
