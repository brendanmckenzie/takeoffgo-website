import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "next/app";
import Head from "next/head";
import withApolloClient from "../lib/with-apollo-client";
import FavIcon from "../components/FavIcon";

import "./fonts.scss";
import "./style.scss";

class MyApp extends App<{ apolloClient: any }> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <>
        <Head>
          <FavIcon />

          <script src="//www.googletagmanager.com/gtm.js?id=GTM-TS4XLK" async />
        </Head>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </>
    );
  }
}

export default withApolloClient(MyApp);
