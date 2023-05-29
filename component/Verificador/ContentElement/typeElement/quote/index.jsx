import { FbEmbed } from "component/FbEmbed";

const Quote = (props) => {
    let contentQuote = null;
    let quoteId = {};
    if (props.data && Object.keys(props.data) && Object.keys(props.data).length > 0) {
        const { data } = props;
        //console.log('data - contentElement__quote : ',data);
        if (data?.custom?.anchor) {
            quoteId = { id: data.custom.anchor };
        }
        if (data.content && Object.keys(data.content) && Object.keys(data.content).length > 0) {
            const { content } = data;

            if (content.includes('class="wp-block-quote"') && !content.includes('cite="https://www.facebook')) {
                contentQuote = (
                    <blockquote
                        {...quoteId}
                        className="contentElement__quote"
                        dangerouslySetInnerHTML={{ __html: content.replace(/(<blockquote class="wp-block-quote">|<\/blockquote>)/g, "") }}
                    />
                );
            } else if (content.includes('class=" wp-block-quote"') && !content.includes('cite="https://www.facebook')) {
                contentQuote = (
                    <blockquote
                        {...quoteId}
                        className="contentElement__quote"
                        dangerouslySetInnerHTML={{ __html: content.replace(/(<blockquote class=" wp-block-quote">|<\/blockquote>)/g, "") }}
                    />
                );
            } else if (content.includes('cite="https://www.facebook')) {
                let regx = /cite=\"(.*?)\"/gi;
                let postFb;
                content.replace(regx, (all, url) => (postFb = url));
                contentQuote = <FbEmbed {...quoteId} url={postFb} />;
            } else {
                contentQuote = null;
            }
        }
    }

    return contentQuote;
};

export { Quote };
