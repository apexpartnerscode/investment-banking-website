/* eslint-disable react/no-unknown-property */
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Manrope } from 'next/font/google'
import Head from 'next/head'
const manrope = Manrope({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${manrope.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>Investment Banking | Apex Partners</title>
        <meta
          name="description"
          content="Somos uma casa de investimentos completa. Oferecemos soluções financeiras personalizadas para pessoas e organizações de espírito empreendedor."
        ></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
