const { withData } = require("next-apollo");
import { HttpLink } from "apollo-boost";

const config = {
  link: new HttpLink({
    uri: "http://jambo-api.takeoffgo.com/graphql"
  })
};

export default withData(config);
