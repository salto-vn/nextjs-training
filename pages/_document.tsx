import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* <b> Custom Document  </b> */}
        <Main /> {/* is index.tsx */}
        <NextScript />
      </body>
    </Html>
  )
}
