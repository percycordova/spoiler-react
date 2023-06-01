import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
const link = createHttpLink({
    fetch, // Switches between unfetch & node-fetch for client & server.
    uri: process.env.ENDPOINT
});
const authLink = setContext((_, {headers}) => {
    return {
        headers: {
            ...headers,
            'token_id': process.env.TOKEN_GRAPHQL,
            type: "application/json"
        }
    }
});
const apolloClient = new ApolloClient({
    link: authLink.concat(link),
    cache: new InMemoryCache(),
    largePageDataBytes: 1024 * 100000 
});
export default apolloClient;