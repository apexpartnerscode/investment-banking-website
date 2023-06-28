import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'] })

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
      <main className={manrope.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
