import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <p> Custom Document  </p>
        <Main /> {/* is index.tsx */}
        <NextScript />
      </body>
    </Html>
  )
}