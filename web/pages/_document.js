import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components';
import client from '../client'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const sheet = new ServerStyleSheet();
    const page = ctx.renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();
    return client.fetch('*[_id == "global-config"] {lang}.lang[0]').then((lang) => {
      return {...initialProps, lang, ...page, styleTags}
    })
  }

  render() {
    return (
      <Html lang={this.props.lang || 'en'}>
        <Head>
          <link rel="shortcut icon" href="/image/favicon.svg" />
          <link rel="apple-touch-icon" sizes="180x180" href="/image/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/image/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/image/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/image/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <script
                  async
                  src="https://www.googletagmanager.com/gtag/js?id=G-TK36GB1T83"
                />

                <script
                  dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-TK36GB1T83', { page_path: window.location.pathname });
                    `,
                  }}
          />
          
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
