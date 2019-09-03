import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "next/app";
import Head from "next/head";
import TagManager from "react-gtm-module";
import withApolloClient from "../lib/with-apollo-client";
import FavIcon from "../components/FavIcon";

import "./fonts.scss";
import "./style.scss";

class MyApp extends App<{ apolloClient: any }> {
  componentDidMount() {
    TagManager.initialize({ gtmId: "GTM-TS4XLK" });
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <>
        <Head>
          <FavIcon />
        </Head>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </>
    );
  }
}

export default withApolloClient(MyApp);
