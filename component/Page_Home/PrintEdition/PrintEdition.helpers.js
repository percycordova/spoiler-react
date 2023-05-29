// TODO: x revisar si se agrega en el hocs-home
export const transform = (printedsByRegion = {}, printedDomingo = {}) => {
    const region = (printedsByRegion?.printeds?.data && printedsByRegion?.printeds?.data) || [];
    const domingo = (printedDomingo?.printeds?.data && printedDomingo?.printeds?.data) || [];
    const cleanData = [];
    
    [...region, ...domingo].map((print, key) => {
        if(print && Object.keys(print)?.length > 0) {
            
            return cleanData.push({
                edition: print?.data?.categories?.find((c) => ["Norte", "Lima", "Sur", "Domingo"].includes(c?.name))?.name || "",
                title: print?.title || "",
                slug: print?.slug || "",
                image: (print?.data?.pages && print?.data?.pages[0]?.files?.find((c) => c.type === "image")?.path) || "",
            });
        }
    })

    return cleanData;
};
