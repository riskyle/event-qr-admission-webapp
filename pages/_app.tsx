import type { AppProps } from 'next/app'
import "./globals.css";
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Glitz & Glam SOS</title>

      </Head>
      <Component {...pageProps} />
    </>
  )
}
