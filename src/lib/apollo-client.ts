import { ApolloClient, InMemoryCache } from "@apollo/client"
 

const client = new ApolloClient({
    uri: import.meta.env.SCHEDULER_ENDPOINT+"/graphql",
    cache: new InMemoryCache(),
})

export default client
