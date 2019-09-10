import Document, { Html, Head, Main, NextScript } from "next/document";
import FavIcon from "../components/FavIcon";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, pathname: ctx.pathname };
  }

  render() {
    return (
      <Html
        lang="en"
        className={
          (this.props as any).pathname === "/invoice" ? "printable" : ""
        }
      >
        <Head>
          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.10.2/css/all.css"
            integrity="sha384-XxNLWSzCxOe/CFcHcAiJAZ7LarLmw3f4975gOO6QkxvULbGGNDoSOTzItGUG++Q+"
            crossOrigin="anonymous"
          />
          <FavIcon />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
