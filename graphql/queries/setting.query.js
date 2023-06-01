import { gql } from "@apollo/client";

const SETTING_QUERY = gql`query Spotlight ($_type: String!) {
    setting (type: $_type, site_id: "larepublica") {
      title
        data {
          value
        }
    }
}`;

export default SETTING_QUERY;
