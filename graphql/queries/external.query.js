import { gql } from "@apollo/client";

const EXTERNAL_QUERY = gql`
    query analytics ( $tagSlug: String, $limit: Int, $category_slug: String ) {
        external (
            site_id: "larepublica", 
            name: "analytics", 
            limit: $limit, 
            type: "api", 
            tag_slug: $tagSlug,
            category_slug: $category_slug, 
            force: true,
            cache: 300 
            ){
            data
        }
    }
`;

export default EXTERNAL_QUERY;
