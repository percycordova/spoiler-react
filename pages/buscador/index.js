import { Layout } from "Layouts/Layouts";
import { useEffect } from "react";
import NextHead from "next/head"
import Script from "next/script";

const metaSite = {
    type: "section",
    name: "Buscador",
    slug: "/buscador",
    metadata_seo: {
        keywords: "",
        seo_title: "Buscador - La República",
        seo_description: "Buscador - La República",
    },
};
const PageSearch = (props) => {
    const {
        footerMenu,
        mainMenu,
        topicsMenu,
        firstAlertWeb,
        secondAlertWeb,
        adsPage,
    } = props
    function loadSearch() {

        const fnSearch = function () {
            if (document.readyState === 'complete') {
                google.search.cse.element.render(
                    {
                        div: "content-buscador",
                        attributes: {
                            queryParameterName: "buscando"
                        },
                        tag: 'search'
                    });
            } else {
                google.setOnLoadCallback(function () {
                    google.search.cse.element.render(
                        {
                            div: "content-buscador",
                            attributes: {
                                queryParameterName: "buscando"
                            },
                            tag: 'search'
                        });
                }, true);
            }
        };

        window.__gcse = {
            parsetags: 'explicit',
            callback: fnSearch
        };
    }
    const cx = '013803619059868835650:ri6kzichbws';

    return (
        <Layout
            data={metaSite}
            hideAdTop
            dataHeader={mainMenu}
            dataFooter={footerMenu}
            topicMenu={topicsMenu}
            firstAlertWeb={firstAlertWeb}
            secondAlertWeb={secondAlertWeb}
            prebid={"HOME"}
            adsPage={adsPage}
        >
            <Script strategy="afterInteractive" type="text/javascript" src={`https://cse.google.com/cse.js?cx=${cx}`} onLoad={loadSearch} />
            <h1>Buscador</h1>
            <div className="gcse-searchbox" id="content-buscador" />
            <style>{`
                    .gcse-searchbox {
                        min-height: 500px;
                    }
                    .gcse-searchbox .gsc-cursor-page {
                        padding: 0.2em 0.5em !important;
                        border: 1px solid ##F101CC; !important;
                        border-radius: 4px !important;
                    }
                    .gcse-searchbox .gsc-cursor-page.gsc-cursor-current-page {
                        text-shadow: none !important;
                        border: 1px solid ##F101CC; !important;
                        background: ##F101CC; !important;
                        color: #fff !important;
                    }
                `}</style>
        </Layout>
    )
}
PageSearch.getInitialProps = () => ({
    typePage: "otros"
})
export default PageSearch