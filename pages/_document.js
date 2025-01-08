import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap"
            rel="stylesheet"
          />
            <link rel="apple-touch-icon" sizes="180x180" href="https://www.800bbattery.com/assets/images/favicons/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="https://www.800bbattery.com/assets/images/favicons/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="https://www.800bbattery.com/assets/images/favicons/favicon-16x16.png"/>
            <link rel="manifest" href="https://www.800bbattery.com/assets/images/favicons/site.webmanifest"/>
            <link rel="shortcut icon" href="https://www.800bbattery.com/assets/images/favicons/favicon.ico"/>
            <link rel="preload" href="https://www.800bbattery.com/path-to-critical-font.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-MNXRNNP6"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
