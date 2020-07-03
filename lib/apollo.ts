const { withApollo } = require("next-apollo");
import ApolloClient, { InMemoryCache } from "apollo-boost";

const urlMap: { [url: string]: string } = {
  "www.takeoffgo.com": "https://api.takeoffgo.com/jambo/graphql",
  default: "http://localhost:5000/jambo/graphql",
};

const apolloClient = new ApolloClient({
  uri:
    urlMap[
      typeof window === "undefined" ? "default" : window.location.hostname
    ] || urlMap.default,
  cache: new InMemoryCache(),
});

export default withApollo(apolloClient);
