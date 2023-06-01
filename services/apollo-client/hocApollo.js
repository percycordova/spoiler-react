import withApollo from 'next-with-apollo';
import { setContext } from "@apollo/client/link/context";
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import fetch from 'isomorphic-unfetch';

const link = createHttpLink({
    fetch, // Switches between unfetch & node-fetch for client & server.
    uri: process.env.ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            'token_id': process.env.TOKEN_GRAPHQL,
        }
    }
});

// Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo
export default withApollo(
    // You can get headers and ctx (context) from the callback params
    // e.g. ({ headers, ctx, initialState })
    ({ initialState }) =>
        new ApolloClient({
            ssrMode: typeof window === 'undefined',
            link: authLink.concat(link),
            cache: new InMemoryCache().restore(initialState || {})
        })
);