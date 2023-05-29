import React from "react";
import dynamic from "next/dynamic";
import { Paragraph } from "component/Page_Internal/ContentElement/TypeElement/Paragraph";
import { Quote } from "component/Verificador/ContentElement/typeElement/quote/index";
import { List } from "component/Verificador/ContentElement/typeElement/List/ListVerificador";
import { Table } from "component/Page_Internal/ContentElement/TypeElement/Table";
import { AdsBody } from "component/Page_Internal/ContentElement/TypeElement/AdsBody/AdsBody";
import { ContentEmbed } from "component/Page_Internal/ContentElement/TypeElement/Embed";
import { Image } from "component/Page_Internal/ContentElement/TypeElement/Image";
import { Heading } from "component/Page_Internal/ContentElement/TypeElement/Heading";

const ContentHtml = dynamic(import("./typeElement/html"));

const ContentElement = (props) => {
    let showContentElement = null;

    if (props.data && Object.keys(props.data) && Object.keys(props.data).length > 0) {
        const { data } = props;

        showContentElement = data?.map((element, key) => {
            if (element.type === "paragraph" && !element.content.includes('<div class="fb-post"')) {
                return <Paragraph data={element} key={`paragraph-${key}`} />;
            }

            if (element.type.includes("table")) {
                return <Table data={element} key={`table-${key}`} />;
            }

            if (element.type === "quote") {
                return <Quote data={element} key={`quote-${key}`} />;
            }

            if (element.type === "heading") {
                return <Heading data={element} amp={props.amp} key={`heading-${key}`} />
            }

            if (element.type === "image") {
                return <Image data={element} amp={props.amp} key={`image-${key}`} />;
            }

            if (element.type === "list") {
                return <List data={element} key={`list-${key}`} />;
            }
            if (element.type === "html") {
                return <ContentHtml data={element} key={`html-${key}`} />;
            }
            if (element.type === "embed") {
                return <ContentEmbed data={element} amp={props.amp} key={`embed-${key}`} />;
            }
            if (element.type === "ads") {
                return <AdsBody data={element} dataAds={props.dataAds} amp={props.amp} key={`${element.type}-${key}`} />;
            }
        });
    }

    return showContentElement;
};

export { ContentElement };
