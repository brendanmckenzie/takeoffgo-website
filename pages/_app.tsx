import React from "react";
import App from "next/app";
import TagManager from "react-gtm-module";

import "./fonts.scss";
import "./style.scss";

class MyApp extends App<{ apolloClient: any }> {
  componentDidMount() {
    TagManager.initialize({ gtmId: "GTM-TS4XLK" });
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
