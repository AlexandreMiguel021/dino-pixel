import { AppProps } from 'next/app'
import Head from 'next/head'
import { Fragment } from 'react'
import 'styles/globals.css'
import ReactGA from 'react-ga'
const TRACKING_ID = ''
ReactGA.initialize(TRACKING_ID)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
