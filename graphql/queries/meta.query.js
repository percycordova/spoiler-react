import { gql } from "@apollo/client";

const META = gql`
  query MetaHome {
    site (_id:"larepublica") {
      _id
      name
      domain
      data {
        description
      }
      metadata_seo {
        keywords
        seo_title
        seo_description
      }
      metadata {
        key
        value
      }
    }
  }
`;

export default META;