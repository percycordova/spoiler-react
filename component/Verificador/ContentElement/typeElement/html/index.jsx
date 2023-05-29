import React from "react";
import Lazy from "lazy-child";
import { TwEmbed } from "component/TwEmbed";
import { InstEmbed } from "component/InstEmbed";

const ContentHtml = ({ data }) => {
    let showContentHTML = null;

    if (data && Object.keys(data) && Object.keys(data).length > 0) {
        //console.log('ContentHtml --- HTML : ',data);
        if (data.content && data.content.length > 0) {
            const { content } = data;
            if (content.includes("twitter-tweet")) {
                let regex = /(https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+))/g;
                let dataIns = [];
                content.replace(regex, (all, url, userName, post) => {
                    dataIns.push(userName, post);
                });

                showContentHTML = <TwEmbed tweetId={dataIns[1]} contentId={dataIns[0]} />;
            }
            if (content.includes("img")) {
                let getSRC = content.match(/\<img.+src\=(?:\"|\')(.+?)(?:\"|\')(?:.+?)\>/);

                if (getSRC && getSRC.length && getSRC[1] && getSRC[1].length) {
                    showContentHTML = React.createElement("img", {
                        src: getSRC[1],
                        className: "image-html",
                    });
                }
            }
            if (content.includes("jwplayer")) {
                showContentHTML = null;
                //showContentHTML = <div className={'embed-html-jwplayer'} dangerouslySetInnerHTML={{__html: content}}/>
            }
            if (content.includes('class="instagram-media"')) {
                const regEx = /(https?:\/\/(?:www\.)?instagram\.com\/p\/([^?#&]+)).*/g;
                const regExData = /data-instgrm-permalink=\"(.*?)\"/gi;
                let postId = "";
                let urlInst = "";

                if (content.includes("data-instgrm-permalink")) {
                    content.replace(regExData, (all, url) => (urlInst = url));

                    urlInst.replace(regEx, (link, origin, post) => {
                        if (post.includes("/")) {
                            postId = post.replace("/", "");
                        } else {
                            postId = post;
                        }
                    });
                } else {
                    content.replace(regEx, (link, origin, post) => {
                        if (post.includes("/")) {
                            postId = post.replace("/", "");
                        } else {
                            postId = post;
                        }
                    });
                }

                if (postId) {
                    showContentHTML = <InstEmbed instPost={postId} contentId={postId} />;
                } else {
                    showContentHTML = null;
                }
            }
            if (content.includes("iframe")) {
                let getSRC = content.match(/\<iframe.+src\=(?:\"|\')(.+?)(?:\"|\')(?:.+?)\>/);

                if (getSRC && getSRC[1]) {
                    const iframe = content || "";

                    showContentHTML = (
                        <Lazy renderPlaceholder={(ref) => <p ref={ref} alt="lazy-load-content-type-element-html html__mdstrm" />}>
                            <div className="" dangerouslySetInnerHTML={{ __html: iframe }} />
                        </Lazy>
                    );
                } else {
                    showContentHTML = null;
                }
            }
        }
    }

    return showContentHTML;
};

export default ContentHtml;
