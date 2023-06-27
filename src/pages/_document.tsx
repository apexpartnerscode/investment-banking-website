import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 32 32&#39;%3E%3Cpath fill=&#39;%230078d2&#39; d=&#39;M2.29 0h27.43v32H2.29z&#39;/%3E%3Cpath fill=&#39;%23fff&#39; d=&#39;M16 8l-9.14 8L16 24l9.14-8L16 8z&#39;/%3E%3C/svg%3E"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
