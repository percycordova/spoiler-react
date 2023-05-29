import NextHead from "next/head";
import { MetaTags } from "component/global/MetaTags/MetaTags";
import resizePrototype from "util/resizePrototype";
import { convertirFecha } from "util/convertirFecha";
import { Schemas } from "component/global/Schemas/Schemas";
import { useRef, useState } from "react";
import { Compass } from "component/Compass";
import { CookielessTagTeads } from "component/global/CookielessTagTeads";
import { HeaderVerificador } from "component/Verificador/HeaderVerificador/HeaderVerificador";
import { FooterVerificador } from "component/Verificador/FooterVerificador/FooterVerificador";

const newResize = new resizePrototype();

const VerificadorLayout = (props) => {
    const {
        children,
        isAmp = false,
        internal = false,
        prebid,
        data,
        listNote,
        articlesData,
        showCustom
    } = props;
    // console.log('data en layout>>>', data)
    const [showSearch, setShowSearch] = useState(false);
    const refBtnSearch = useRef();

    let data_title = "";
    let meta_url = "";
    let meta_title = "";
    let meta_keywords = "";
    let meta_description = "";
    let meta_type = "";
    let meta_img = data?.metaImage || process.env.SITE_DOMAIN_URL + process.env.META_IMAGE_DEFAULT;
    let meta_img_resized = meta_img;
    let meta_slug = "",
        id_article,
        meta_author,
        meta_article_tags,
        list_tags,
        legends_image,
        data_section_slug,
        dataLayer_sectionSlug,
        data_section,
        data_autor_slug,
        data_autor,
        articleBodyVideos,
        category_slug,
        author_slug;
    let showSchemaData = null,
        showMediaKit = false;

    if (data && Object.keys(data) && Object.keys(data).length) {
        if (data.site && Object.keys(data.site) && !data.type && data.site.__typename === "SiteType") {
            const { site } = data;
            meta_url = "";
            meta_type = "website";
            meta_slug = "";
            id_article = "";
            meta_article_tags = "";
            meta_img = process.env.META_IMAGE_DEFAULT;

            if (site.metadata_seo && Object.keys(site.metadata_seo) && Object.keys(site.metadata_seo).length) {
                const { metadata_seo } = site;

                if (metadata_seo.seo_title && metadata_seo.seo_title.length) {
                    meta_title = metadata_seo.seo_title;
                    data_title = metadata_seo.seo_title;
                    showMediaKit = true;
                } else {
                    data_title = "La República";
                }

                if (metadata_seo.keywords && metadata_seo.keywords.length) {
                    meta_keywords = metadata_seo.keywords;
                    //schema
                    list_tags = metadata_seo.keywords;
                } else if (site?.name && site.name.length) {
                    //schema
                    list_tags = site?.name || "";
                }

                if (metadata_seo.seo_description && metadata_seo.seo_description.length) {
                    meta_description = metadata_seo.seo_description;
                }
            }
        } else if (data.type && (data.type === "article" || data.type === "article2" || data.type === "gallery" || data.type === "live" || data.type === "video")) {
            if(data.slug=="/economia/2020/03/12/exportacion-palta-se-posiciono-como-producto-top-de-oferta-agroindustrial-agricultores-agricultura-lrnd"){
                showMediaKit = true;
            }
            id_article = data._id || "";
            meta_type = "article";
            data_title = data.title || "";
            meta_slug = data.slug || "";
            meta_url = data.slug;
            meta_author = data.data?.authors?.find((author) => author.fullname)?.fullname || "Redacción La República";
            author_slug = data.data?.authors?.find((author) => author.slug)?.slug || "/autor/la-republica/";
            category_slug = data.data.categories.find(category=>category.primary).slug || data.data.categories[0].slug || "/archivo"
            if (data.metadata_seo && Object.keys(data.metadata_seo) && Object.keys(data.metadata_seo).length) {
                const { metadata_seo } = data;
                if (metadata_seo.seo_title) {
                    meta_title = metadata_seo.seo_title;
                } else {
                    meta_title = data.title;
                }
                if (metadata_seo.keywords) {
                    meta_keywords = metadata_seo.keywords;
                    list_tags = metadata_seo.keywords;
                }

                if (metadata_seo.seo_description) {
                    meta_description = metadata_seo.seo_description;
                } else if (data.data && data.data.teaser) {
                    meta_description = data.data.teaser;
                }
            }

            if (data.data && Object.keys(data.data) && Object.keys(data.data).length) {
                const { data: datos } = data;
                meta_article_tags = data.data.tags || "";
                list_tags = data.data.tags || "";
                if (!!datos?.detected_elements?.iframes?.count || !!datos?.detected_elements?.embeds?.count) {
                    articleBodyVideos = [
                        ...(datos?.detected_elements?.iframes?.items || []),
                        ...(datos?.detected_elements?.embeds?.items || []),
                    ];
                }

                if (datos.multimedia && Object.keys(datos.multimedia) && Object.keys(datos.multimedia).length) {
                    const { multimedia } = datos;

                    let typeImage = multimedia.filter((img) => img.type === "image");

                    if (typeImage && typeImage[0]) {
                        //console.log('>> typeImage[0] : ',typeImage[0]);
                        if (typeImage[0].path && typeImage[0].path.length) {
                            meta_img = typeImage[0].path;
                            meta_img_resized = meta_img;
                        }

                        if (typeImage[0].data && typeImage[0].data) {
                            const { data } = typeImage[0];

                            if (data.credits && data.credits.length) {
                                legends_image = data.credits;
                            } else if (data.title && data.title.length) {
                                legends_image = data.title;
                            } else if (data.alt && data.alt.length) {
                                legends_image = data.alt;
                            }
                        }
                    } else {
                        typeImage = multimedia.find((img) => img.type === "video");
                        if (typeImage) {
                            if (typeImage?.data?.image_path) {
                                meta_img = typeImage?.data?.image_path;
                                meta_img_resized = newResize.resizeWapa(meta_img, 1200, 660, true);
                            }
                            if (typeImage?.data?.credits) {
                                legends_image = typeImage?.data?.credits;
                            }
                        }
                    }
                }

                if (datos.authors && Object.keys(datos.authors) && Object.keys(datos.authors).length) {
                    const { authors } = datos;
                    data_autor_slug = authors[0].slug;
                    if (authors[0] && authors[0].fullname && authors[0].fullname.length > 0) {
                        data_autor = authors[0].fullname.replace(/ /g, ".").toLowerCase();
                    }
                } else if (data.user && Object.keys(data.user) && Object.keys(data.user).length) {
                    const { user } = data;

                    if (user.username && user.username.length > 0) {
                        data_autor = user.username;
                    }
                }
            }
        } else if (data.type === "section") {
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
        } else if (data.__typename === "TagType") {
            const currentDate = convertirFecha(new Date(), "long");

            meta_type = "website";
            id_article = "";
            meta_article_tags = "";

            //schema
            legends_image = "Fuente - La República";

            if (data.slug && data.slug.length) {
                meta_slug = data.slug;
                meta_url = data.slug;
                if (data.page && data.page > 1) {
                    meta_url += `?page=${data.page - 1}`;
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
                    data_title = `Últimas noticias de ${data_section} hoy ${currentDate} | La República`;
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
                meta_description =
                    metadata_seo.seo_description ||
                    `¿Buscas noticias sobre ${data_section}? En La República puedes informarte sobre las últimas noticias de ${data_section} hoy ${currentDate} y otros temas relacionados.`;
                // if(data.page && data.page>1){
                //     meta_description = `${meta_description} - Página ${data.page - 1}`
                // }
            }
        } else if (data.__typename === "AuthorType") {
            meta_type = "website";
            id_article = "";
            meta_article_tags = "";
            meta_description = data.data?.description || "";

            if (data.slug && data.slug.length) {
                meta_slug = data.slug;
                meta_url = data.slug;
                data_section_slug = data.slug;
                dataLayer_sectionSlug = data.slug;
            }

            if (data.fullname && data.fullname.length) {
                data_section = data.fullname;
            }
            
            if (data.metadata_seo && Object.keys(data.metadata_seo) && Object.keys(data.metadata_seo).length) {
                const { metadata_seo } = data;
                if (metadata_seo.seo_title && metadata_seo.seo_title.length) {
                    meta_title = metadata_seo.seo_title;
                    data_title = metadata_seo.seo_title;
                } else {
                    data_title = `La República - ${data_section}`;
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
                }
                if (data.page && data.page > 1) {
                    meta_description = `${meta_description} - Página ${data.page - 1}`;
                }
            }
        }
    }

    const meta_data = {
        meta_type,
        meta_slug,
        meta_img,
        meta_img_resized,
        meta_description,
        data_title: data?.title || data_title,
        meta_description,
        meta_author,
        meta_keywords,
        id_article,
        author_slug,
        category_slug,
    };

    showSchemaData = <Schemas listNote={listNote} data={data} type={meta_type} articlesData={articlesData} showCustom={showCustom} />;

    // TODO review main
    return (
        <>
            <NextHead>
                <title>{data_title || "Página no encontrada"}</title>
                <Compass articleData={data?.type === "article" && data} />
                <link
                    rel="preload"
                    as="font"
                    type="font/woff2"
                    crossOrigin="crossorigin"
                    href="https://fonts.gstatic.com/s/ptserif/v17/EJRSQgYoZZY2vCFuvAnt66qSVys.woff2"
                />
                <link
                    rel="preload"
                    as="font"
                    type="font/woff2"
                    crossOrigin="crossorigin"
                    href="https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxK.woff2"
                />
                {showMediaKit && (
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `var getQueryString = function ( field, url ) { var href = url ? url : window.location.href; var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
                            var string = reg.exec(href); return string ? string[1] : "";};
                            dfp_demo = getQueryString("demo");`,
                        }}
                    />
                )}
                <MetaTags data={meta_data} internal={internal} />
                {id_article && (
                    <>
                        <meta idcronos={id_article} />
                        <link rel="amphtml" href={`${process.env.SITE_DOMAIN_URL}/amp${meta_slug}`} />
                    </>
                )}
                {data ? (
                    <link rel="canonical" href={`${process.env.SITE_DOMAIN_URL}${meta_slug}`} />
                ) : (
                    <link rel="canonical" href={`${process.env.SITE_DOMAIN_URL}/pagina-no-encontrada`} />
                )}
                <script dangerouslySetInnerHTML={{ __html: `window.PAGE = '${prebid && typeof prebid === "string" ? prebid : ""}'` }} />
                <script defer src="/static/js/glr-larepublica-test.min.js" />
                <CookielessTagTeads />
                <script async type="text/javascript" src="https://cdn.embluemail.com/pixeltracking/pixeltracking.js?code=08b5881d67b4f2ce354c5ed613155799" />
            </NextHead>
            {showSchemaData}
            <HeaderVerificador />
            <div className={"wrapper__content--verificador"}>{children}</div>
            <FooterVerificador />
        </>
    );
};

export { VerificadorLayout };



