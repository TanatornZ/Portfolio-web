import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <title>Tanatorn</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}