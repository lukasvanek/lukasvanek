import Document, { Html, Head, Main, NextScript } from 'next/document';
import { InitializeColorMode } from 'theme-ui';

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    let title = 'Lukas Vanek';
    const description =
      'full-stack developer, idea maker, data science enthusiast';
    return (
      <Html lang="en">
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-79539450-2"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-79539450-2');            
            `,
          }}
        />
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
        <Head />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="icon" type="image/png" href="/LV32.png" />
        <link rel="apple-touch-icon-precomposed" href="/LV256.png" />
        <meta name="og:image" content="/LV512.png" />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
