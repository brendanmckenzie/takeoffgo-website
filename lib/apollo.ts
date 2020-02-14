const { withData } = require("next-apollo");
import { HttpLink } from "apollo-boost";

const config = {
  link: new HttpLink({
    uri: "https://api2.takeoffgo.com/jambo/graphql"
  })
};

export default withData(config);
