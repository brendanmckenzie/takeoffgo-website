import Document, { Html, Head, Main, NextScript } from "next/document";
import FavIcon from "../components/FavIcon";

type MyDocumentProps = {
  pathname: string;
};

class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, pathname: ctx.pathname };
  }

  get htmlClasses() {
    switch (this.props.pathname) {
      case "/invoice":
        return "printable";
      default:
        return "";
    }
  }

  get bodyClasses() {
    switch (this.props.pathname) {
      case "/invoice":
        return "A4";
      default:
        return "";
    }
  }

  render() {
    return (
      <Html lang="en" className={this.htmlClasses}>
        <Head>
          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.10.2/css/all.css"
            integrity="sha384-XxNLWSzCxOe/CFcHcAiJAZ7LarLmw3f4975gOO6QkxvULbGGNDoSOTzItGUG++Q+"
            crossOrigin="anonymous"
          />
          <FavIcon />
        </Head>
        <body className={this.bodyClasses}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
