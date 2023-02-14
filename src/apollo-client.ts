import { ApolloClient, InMemoryCache, gql} from '@apollo/client';


export const client = new ApolloClient({
    uri: 'https://gpp-schedule-staging.herokuapp.com/graphql',
    cache: new InMemoryCache(),
});

