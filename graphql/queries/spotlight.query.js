import { gql } from "@apollo/client";

const SPOTLIGHT_QUERY = gql`
  query Spotlight ($spotlightId: String, $site: String="larepublica") {
    spotlight (site_id: $site, status: 1, _id: $spotlightId, process: true, easy: true, cache: 60) {    
      _id
      spotlight_type {      
        title
      }    
      data
      status    
    }
  }
`;

export default SPOTLIGHT_QUERY;