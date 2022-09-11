import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

const GOOGLE_ANALYTICS_ID = "GTM-MSFZW3P"; // inbyu.com 도메인 id (todo 추후에 삭제 필요)
const GOOGLE_ANALYTICS_ID_KP = "GTM-PGHHRJT"; // kpinsurances.com 도메인 id

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  setGoogleAnalytics(id: string) {
    return {
      __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${id}');
      `,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  setGoogleAnalyticsScript(id: string) {
    return {
      __html: `
      <iframe id="${id}" name="${id}" src="https://www.googletagmanager.com/ns.html?${id}" height="0" width="0" style="display: none; visibility: hidden;" ></iframe>
      `,
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="author" content="ellie_soyeon" />
          <meta name="description" content="next js demo" />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={this.setGoogleAnalytics(
              GOOGLE_ANALYTICS_ID,
            )}
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={this.setGoogleAnalytics(
              GOOGLE_ANALYTICS_ID_KP,
            )}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <noscript
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={this.setGoogleAnalyticsScript(
              GOOGLE_ANALYTICS_ID,
            )}
          />
          <noscript
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={this.setGoogleAnalyticsScript(
              GOOGLE_ANALYTICS_ID_KP,
            )}
          />
        </body>
      </Html>
    );
  }
}
