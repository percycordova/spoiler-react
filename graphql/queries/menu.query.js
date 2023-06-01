import { gql } from "@apollo/client";

const MENU_QUERY = gql`
  query menu($_id: String) {
    menu (site_id: "larepublica", _id: $_id, status: 1) {
        _id
        links {
        title
        path
        metadata {
            key
            value
        }
        children {
            title
            path
        }
        }
        status
    }
  }
`;

export default MENU_QUERY;