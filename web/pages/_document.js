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
