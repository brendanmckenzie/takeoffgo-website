import React from "react";

const FavIcon: React.FC = () => (
  <>
    <meta name="apple-mobile-web-app-title" content="Take Off Go" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />
    <link
      rel="shortcut icon"
      sizes="16x16"
      href="/static/favicon/favicon-16.png"
    />
    <link
      rel="shortcut icon"
      sizes="32x32"
      href="/static/favicon/favicon-32.png"
    />
    <link rel="apple-touch-icon" href="/static/favicon/apple-touch-icon.png" />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="57x57"
      href="/static/favicon/apple-touch-icon.png"
    />
    <meta
      name="msapplication-TileImage"
      content="/static/favicon/mstile-150x150.png"
    />
    <meta name="msapplication-TileColor" content="#212121" />
    <link rel="icon" type="image/x-icon" href="/static/favicon/favicon.ico" />
  </>
);

export default FavIcon;
