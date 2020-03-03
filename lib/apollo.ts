const { withData } = require("next-apollo");
import { HttpLink } from "apollo-boost";

const urlMap: { [url: string]: string } = {
  "www.takeoffgo.com": "https://api.takeoffgo.com/jambo/graphql",
  default: "http://localhost:5000/jambo/graphql"
};

const config = {
  link: new HttpLink({
    uri:
      urlMap[
        typeof window === "undefined" ? "default" : window.location.hostname
      ] || urlMap.default
  })
};

export default withData(config);
