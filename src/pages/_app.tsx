import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import RootLayout from './layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Investment Banking | Apex Partners</title>
        <meta
          name="description"
          content="Somos uma casa de investimentos completa. Oferecemos soluções
          financeiras personalizadas para pessoas e organizações de espírito empreendedor."
        ></meta>
      </Head>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  )
}
