import React, { useState } from "react";
import { Layout } from "Layouts/Layouts";
import { MainContentHumor } from "component/Page_Humor/MainContentHumor/MainContentHumor";
import WithHumor from "hocs/humor/withHumor";

export const SectionCarlincatura = (props) => {
    const {
        section_data,
        section_about,
        adsPage,
        footerMenu,
        mainMenu,
        topicsMenu,
    } = props;

    return (
        <Layout
            dataHeader={mainMenu}
            dataFooter={footerMenu}
            hideAdTop
            topicMenu={topicsMenu}
            prebid={"SECTION"}
            adsPage={adsPage}
            data={section_about?.category}
            listNote={section_data?.articles?.data || []}
        >
            <MainContentHumor {...props} />
        </Layout>
    );
};

export default WithHumor(SectionCarlincatura);
