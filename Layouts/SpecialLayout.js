import NextHead from "next/head";
import { Footer } from "component/global/Footer/Footer";
import { MetaTags } from "component/global/MetaTags/MetaTags";
import resizePrototype from "util/resizePrototype";
import { convertirFecha } from "util/convertirFecha";
import { Schemas } from "component/global/Schemas/Schemas";
import { HeaderSpecial } from "component/global/HeaderSpecial/HeaderSpecial";
import { Compass } from "component/Compass";
import { CookielessTagTeads } from "component/global/CookielessTagTeads";

const newResize = new resizePrototype();

const SpecialLayout = (props) => {
    const { children, dataFooter, prebid, data, dataAds, menuSpecial, hideAdTop } = props;

    let data_title = "";
    let meta_url = "";
    let meta_title = "";
    let social_title = "";
    let meta_keywords = "";
    let meta_description = "";
    let meta_type = "";
    let meta_img = data?.metaImage || process.env.SITE_DOMAIN_URL + process.env.META_IMAGE_DEFAULT;
    let meta_img_resized = meta_img;
    let meta_slug = "",
        meta_author,
        meta_article_tags,
        list_tags,
        legends_image,
        data_section_slug,
        data_section,
        id_article,
        dataLayer_sectionSlug;
    let showSchemaData = null;

    if (data && data.type === "section") {
        meta_type = data.type;
        id_article = "";
        meta_article_tags = "";

        if (data.slug && data.slug.length) {
            meta_slug = data.slug;
            meta_url = data.slug;
            if (data.page && data.page > 1) {
                meta_url += `?page=${data.page - 1}`;
                -1;
            }
            data_section_slug = data.slug;
            dataLayer_sectionSlug = data.slug;
        }

        if (data?.name && data.name.length) {
            data_section = data?.name || "";
        }

        if (data.metadata_seo && Object.keys(data.metadata_seo) && Object.keys(data.metadata_seo).length) {
            const { metadata_seo } = data;

            if (metadata_seo.seo_title && metadata_seo.seo_title.length) {
                meta_title = metadata_seo.seo_title;
                data_title = metadata_seo.seo_title;
            } else {
                data_title = `${data_section}: Últimas noticias, fotos y videos | La República`;
            }

            if (data.page && data.page > 1) {
                data_title = `${data_title} - Página ${data.page - 1}`;
            }

            if (metadata_seo.keywords && metadata_seo.keywords.length) {
                meta_keywords = metadata_seo.keywords;
                //schema
                list_tags = metadata_seo.keywords;
            } else if (data?.name && data.name.length) {
                //schema
                list_tags = data?.name || "";
            }

            if (metadata_seo.seo_description && metadata_seo.seo_description.length) {
                meta_description = metadata_seo.seo_description;
                if (data.page && data.page > 1) {
                    meta_description = `${meta_description} - Página ${data.page - 1}`;
                }
            }
        }
        social_title = data_title;
        if(data.metadata_redes?.title?.length > 0){
            social_title = data.metadata_redes.title
        }
    }

    const meta_data = {
        meta_type,
        meta_slug,
        meta_img,
        meta_img_resized,
        meta_description,
        data_title,
        meta_description,
        meta_author,
        meta_keywords,
        social_title
    };

    showSchemaData = <Schemas data={data} type={meta_type} />;

    return (
        <>
            <NextHead>
                <title>{data_title || "Página no encontrada"}</title>
                <Compass />
                <link
                    rel="preload"
                    as="font"
                    type="font/woff2"
                    crossOrigin="crossorigin"
                    href="https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxK.woff2"
                />
                <MetaTags data={meta_data} />
                {data ? (
                    <link rel="canonical" href={`${process.env.SITE_DOMAIN_URL}${meta_slug}`} />
                ) : (
                    <link rel="canonical" href={`${process.env.SITE_DOMAIN_URL}/pagina-no-encontrada`} />
                )}
                <script dangerouslySetInnerHTML={{ __html: `window.PAGE = '${prebid && typeof prebid === "string" ? prebid : ""}'` }} />
                <CookielessTagTeads/>
                <script async type="text/javascript" src="https://cdn.embluemail.com/pixeltracking/pixeltracking.js?code=08b5881d67b4f2ce354c5ed613155799" />
            </NextHead>
            {showSchemaData}
            <HeaderSpecial hideAdTop={hideAdTop} menuData={menuSpecial} dataAds={dataAds} />
            <div className={"wrapper__content--special"}>{children}</div>
            <Footer data={dataFooter} />
        </>
    );
};
export { SpecialLayout };
