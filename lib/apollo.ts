const { withData } = require("next-apollo");
import { HttpLink } from "apollo-boost";

const config = {
  link: new HttpLink({
    uri: "https://jambo-api.takeoffgo.com/graphql"
  })
};

export default withData(config);
