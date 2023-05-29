import { InitAdsManager } from "component/global/AdsManager/initAdsManager"
import { SlotAds } from "component/global/AdsManager/SlotAds"
import Script from "next/script"
import NextHead from "next/head"
import { MetaTags } from "component/global/MetaTags/MetaTags"
import { CookielessTagTeads } from "component/global/CookielessTagTeads"
import { ComScore } from "component/global/ComScore"
import { AdsManager } from "component/global/AdsManager"
import { HeaderJudicialidad } from "component/Page_Judicialidad/HeaderJudicialidad/HeaderJudicialidad"
import { Footer } from "component/global/Footer/Footer"

const JudicialidadLayout = ({ children, adsPage, data, prebid, dataHeader, dataFooter, }) => {
    const meta_slug = data?.category?.slug;
    const meta_img = process.env.META_IMAGE_DEFAULT
    const meta_img_resized = meta_img;
    const meta_description = data.category?.metadata_seo?.seo_description;
    const data_title = data?.category?.name;
    const meta_title = data.category?.metadata_seo?.seo_title;
    const meta_data = {
        meta_slug,
        meta_img,
        meta_img_resized,
        meta_description,
        data_title,
        meta_description,
    };
    return (
        <>
            <NextHead>
                <title>{meta_title || data_title || "Página no encontrada"}</title>
                <MetaTags key="meta-tags" data={meta_data} />
                <script dangerouslySetInnerHTML={{ __html: `window.PAGE = '${prebid && typeof prebid === "string" ? prebid : ""}'` }} />
                <AdsManager data={data} dataAds={adsPage?.ads?.data} />
                <CookielessTagTeads />
                <script async type="text/javascript" src="https://cdn.embluemail.com/pixeltracking/pixeltracking.js?code=08b5881d67b4f2ce354c5ed613155799" />
            </NextHead>
            <InitAdsManager />
            <div className="bl-Ads">
                <SlotAds type="Floating" data={adsPage?.ads?.data} />
                <SlotAds type="Floating2" data={adsPage?.ads?.data} />
                <SlotAds type="Lateral_Left" data={adsPage?.ads?.data} />
                <SlotAds type="Lateral_Right" data={adsPage?.ads?.data} />
            </div>
            <SlotAds type="Top" data={adsPage?.ads?.data} />
            <HeaderJudicialidad data={dataHeader.menu}/>
            <div className={"wrapper__content mh-600"}>{children}</div>
            <Footer data={dataFooter} />
            <ComScore />
            <Script strategy="afterInteractive" src="/prebid/prebid.v7.39.js" />
            <Script strategy="afterInteractive" src="/prebid/ads-prebid-update_2023-04.min.js" />
            <Script strategy="afterInteractive" src="/static/js/glr-larepublica-test.min.js" />
        </>
    );
}

export { JudicialidadLayout }
