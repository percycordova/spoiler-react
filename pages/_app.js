import "src/global.scss";
import { PageError } from "component/Page_Error";
import withApollo from "services/apollo-client/hocApollo";
import fetchApi from "services/api/fetchApi";

function MyApp({ Component, pageProps }) {
    if (pageProps.error) {
        return <PageError {...pageProps} />
    }
    return <Component {...pageProps} />;
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
    const { apolloClient, res } = ctx
    let appProps = {},
        customProps;

    if (Component.getInitialProps) {
        appProps = await Component.getInitialProps(ctx);
    }
    if (appProps) {
        if (appProps.typePage) {
            const { typePage } = appProps;
            const mainMenu = await fetchApi("menu", { id: "5f3b422ee3c5391ae1659705" }, apolloClient);
            const topicsMenu = await fetchApi("menu", {
                id: "61202c65a3bc283f4b016cf7",
            }, apolloClient);
            const footerMenu = await fetchApi("menu", {
                id: "5f3b4614b1e66d41312c56b2",
            }, apolloClient);
            let adsPage = await fetchApi("ads", { limit: 60 });
            const data = adsPage?.ads?.data?.filter(adItem => adItem?.type?.includes(typePage));
            adsPage = { ads: { data } }
            const firstAlertWeb = await fetchApi("spotlight", {
                id: "5fdccb22136b0817a17d3504"
            }, apolloClient);
            const secondAlertWeb = await fetchApi("spotlight", {
                id: "60eca46d72fba41c1e5ff238"
            }, apolloClient);
            customProps = {
                mainMenu,
                footerMenu,
                topicsMenu,
                adsPage,
                firstAlertWeb,
                secondAlertWeb,
            };

            if (appProps.error) {
                const relatedArticles = await fetchApi("external", {
                    limit: 30,
                }, apolloClient);
                res.statusCode = appProps.error;
                customProps = {
                    ...customProps,
                    statusCode: appProps.error,
                    relatedArticles
                }
            }
        }
    }


    appProps.pageProps = {
        ...appProps,
        ...customProps,
    };
    return { ...appProps };
};

export default withApollo(MyApp);