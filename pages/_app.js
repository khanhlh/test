// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";
import { AppWrapper } from '../lib/context';


function MyApp({ Component, pageProps }) {
  let sharedState = {}

  return (
    <AppWrapper>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default MyApp
